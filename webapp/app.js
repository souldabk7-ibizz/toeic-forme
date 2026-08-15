(function () {
  "use strict";

  /* ---------- tiny utils ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function toKey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function todayKey() { return toKey(new Date()); }
  /* returns null rather than an Invalid Date, so callers can fall back */
  function fromKey(key) {
    var p = String(key).split("-").map(Number);
    if (p.length !== 3 || p.some(function (n) { return !isFinite(n); })) return null;
    var d = new Date(p[0], p[1] - 1, p[2]);
    return isNaN(d.getTime()) ? null : d;
  }
  function addDays(key, n) { var d = fromKey(key) || new Date(); d.setDate(d.getDate() + n); return toKey(d); }
  function daysBetween(a, b) {
    var da = fromKey(a), db = fromKey(b);
    if (!da || !db) return 0;
    return Math.round((db - da) / 86400000);
  }
  /* keeps a day/week index inside 1..max even if the input is NaN */
  function clampIndex(n, max) {
    n = Math.round(Number(n));
    if (!isFinite(n)) return 1;
    return Math.min(Math.max(n, 1), max);
  }

  /* Stored values are only trusted when they still have the shape the caller
     expects. A stored "null", or a value of the wrong type (which sync or a
     partial write can leave behind), falls back instead of flowing into code
     that expects an array or object. */
  function getJSON(key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      if (raw === null) return fallback;
      var val = JSON.parse(raw);
      if (val === null || typeof val !== typeof fallback) return fallback;
      if (Array.isArray(fallback) !== Array.isArray(val)) return fallback;
      return val;
    } catch (e) { return fallback; }
  }
  function setJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  /* ---------- profile / schedule state ---------- */
  var PROFILE_KEY = "toeic_profile_v1";
  function loadProfile() {
    var defaults = {
      startDate: todayKey(),
      baselineReading: 350,
      baselineListening: 160,
      targetReading: 420,
      targetListening: 350
    };
    var p = getJSON(PROFILE_KEY, defaults);
    /* fill in anything missing or unusable rather than letting it reach the
       date maths, where a bad startDate would produce a NaN day index */
    Object.keys(defaults).forEach(function (k) {
      if (k === "startDate") { if (!fromKey(p[k])) p[k] = defaults[k]; }
      else if (!isFinite(Number(p[k]))) p[k] = defaults[k];
      else p[k] = Number(p[k]);
    });
    return p;
  }
  var profile = loadProfile();
  function saveProfile() { setJSON(PROFILE_KEY, profile); }

  function currentWeek() {
    var diff = daysBetween(profile.startDate, todayKey());
    return clampIndex(Math.floor(Math.max(diff, 0) / 7) + 1, PLAN.weeks.length);
  }

  function currentVocabDay() {
    var diff = daysBetween(profile.startDate, todayKey());
    return clampIndex(diff + 1, VOCAB.days.length);
  }

  /* ---------- SRS (Leitner boxes) ---------- */
  var SRS_KEY = "toeic_srs_v1";
  var INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
  function loadSRS() { return getJSON(SRS_KEY, {}); }
  var srs = loadSRS();
  function saveSRS() { setJSON(SRS_KEY, srs); }

  function allWords() {
    var list = [];
    VOCAB.days.forEach(function (d) {
      d.words.forEach(function (word) { list.push({ day: d.day, theme: d.theme, word: word }); });
    });
    return list;
  }
  function wordState(text) { return srs[text] || null; }
  function isDue(text) {
    var s = wordState(text);
    return !s || s.due <= todayKey();
  }
  function markWord(text, known) {
    var s = wordState(text) || { box: 0 };
    var box = known ? Math.min(5, (s.box || 0) + 1) : 1;
    srs[text] = { box: box, due: addDays(todayKey(), INTERVALS[box]) };
    saveSRS();
  }
  function dueWordsToday() {
    return allWords().filter(function (w) { return isDue(w.word.word); }).sort(function (a, b) {
      var sa = wordState(a.word.word), sb = wordState(b.word.word);
      var da = sa ? sa.due : "0000-00-00", db = sb ? sb.due : "0000-00-00";
      return da < db ? -1 : da > db ? 1 : 0;
    });
  }
  function dueCount() { return dueWordsToday().length; }

  /* ---------- vocab study-progress stamp ---------- */
  var VOCAB_STUDIED_KEY = "toeic_vocab_studied_v1";
  function loadStudiedDays() { return getJSON(VOCAB_STUDIED_KEY, []); }
  function saveStudiedDays(arr) { setJSON(VOCAB_STUDIED_KEY, arr); }
  function isDayStudied(day) { return loadStudiedDays().indexOf(day) !== -1; }
  function toggleDayStudied(day) {
    var arr = loadStudiedDays();
    var idx = arr.indexOf(day);
    if (idx === -1) arr.push(day); else arr.splice(idx, 1);
    saveStudiedDays(arr);
  }
  function markDayStudied(day) {
    var arr = loadStudiedDays();
    if (arr.indexOf(day) === -1) { arr.push(day); saveStudiedDays(arr); }
  }
  function markStudiedThrough(day) {
    var arr = loadStudiedDays();
    for (var i = 1; i <= day; i++) { if (arr.indexOf(i) === -1) arr.push(i); }
    saveStudiedDays(arr);
  }
  function highestStudiedDay() {
    var arr = loadStudiedDays();
    return arr.length ? Math.max.apply(null, arr) : 0;
  }
  /* first day not yet marked studied — where the user should pick up next */
  function nextUnstudiedDay() {
    var arr = loadStudiedDays();
    for (var i = 1; i <= VOCAB.days.length; i++) {
      if (arr.indexOf(i) === -1) return i;
    }
    return VOCAB.days.length;
  }
  function studiedWordCount() {
    var arr = loadStudiedDays();
    var count = 0;
    VOCAB.days.forEach(function (d) { if (arr.indexOf(d.day) !== -1) count += d.words.length; });
    return count;
  }
  function totalVocabWordCount() {
    var count = 0;
    VOCAB.days.forEach(function (d) { count += d.words.length; });
    return count;
  }

  /* ---------- session step checkboxes ---------- */
  function stepsKey(dateKey) { return "toeic_steps_" + dateKey; }
  function loadSteps(dateKey) { return getJSON(stepsKey(dateKey), []); }
  function saveSteps(dateKey, arr) { setJSON(stepsKey(dateKey), arr); }

  /* ---------- score log ---------- */
  var SCORES_KEY = "toeic_scores_v1";
  function loadScores() { return getJSON(SCORES_KEY, []); }
  function saveScores(arr) { setJSON(SCORES_KEY, arr); }

  /* ---------- daily test (vocab + grammar mix) ---------- */
  var DAILY_TEST_KEY = "toeic_dailytest_v1";
  function loadDailyTests() { return getJSON(DAILY_TEST_KEY, {}); }
  function saveDailyTests(obj) { setJSON(DAILY_TEST_KEY, obj); }
  var dashboardQuiz = null;

  function buildDailyTest() {
    var due = dueWordsToday().map(function (d) { return d.word; });
    var vocabPool = due.length ? due : shuffle(allWords().map(function (w) { return w.word; })).slice(0, 10);
    var vocabItems = buildQuizFromWords(vocabPool, 8).map(function (it) {
      return { text: it.prompt, kind: "vocab", choices: it.choices, answer: it.answer, picked: null };
    });
    var dayCount = Math.max(0, daysBetween(profile.startDate, todayKey()));
    var lesson = GRAMMAR.lessons[dayCount % GRAMMAR.lessons.length];
    var grammarItems = shuffle(lesson.practice).map(function (p) {
      return { text: p.sentence, kind: "grammar", choices: p.choices, answer: p.answer, picked: null };
    });
    var lwk = LISTENING.weeks[Math.min(currentWeek(), LISTENING.weeks.length) - 1];
    var listeningItems = shuffle(lwk.part2).slice(0, 3).map(function (p) {
      return { text: p.q, kind: "listening", choices: p.choices, answer: p.answer, picked: null };
    });
    var rwk = READING.weeks[Math.min(currentWeek(), READING.weeks.length) - 1];
    var readingItems = shuffle(rwk.part5).slice(0, 3).map(function (p) {
      return { text: p.sentence, kind: "reading", choices: p.choices, answer: p.answer, picked: null };
    });
    return shuffle(vocabItems.concat(grammarItems, listeningItems, readingItems));
  }

  var DAILY_TEST_TAGS = {
    vocab: '<span class="pill blue">ศัพท์</span>',
    grammar: '<span class="pill aqua">แกรมมาร์</span>',
    listening: '<span class="pill yellow">Listening</span>',
    reading: '<span class="pill">Reading</span>'
  };

  function renderDailyTestBlock(items) {
    var html = '<div class="card" id="daily-quiz-block"><h3>ทำแบบทดสอบวันนี้ (' + items.length + ' ข้อ)</h3>';
    items.forEach(function (item, qi) {
      var tag = DAILY_TEST_TAGS[item.kind] || "";
      html += '<div class="q-block"><div class="q-text">' + (qi + 1) + ". " + item.text + " " + tag + "</div>";
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-q="' + qi + '" data-c="' + ci + '"><input type="radio" name="daily-' + qi + '" value="' + ci + '"> ' + c + "</label>";
      });
      html += "</div>";
    });
    html += '<div class="btn-row"><button class="btn primary" id="daily-check">ตรวจคำตอบ</button></div><div id="daily-result" class="muted"></div></div>';
    return html;
  }

  /* ---------- speech ---------- */
  var speechRate = 1;
  var enVoice = null;
  function canSpeak() { return "speechSynthesis" in window; }
  function pickVoice() {
    if (!canSpeak()) return;
    var voices = window.speechSynthesis.getVoices() || [];
    // Prefer a US English voice, then any English voice.
    enVoice = voices.filter(function (v) { return /^en[-_]US/i.test(v.lang); })[0] ||
              voices.filter(function (v) { return /^en/i.test(v.lang); })[0] || null;
  }
  if (canSpeak()) {
    pickVoice();
    // iOS/Safari load voices asynchronously.
    window.speechSynthesis.onvoiceschanged = pickVoice;
  }
  function speak(text) {
    if (!canSpeak()) return;
    var synth = window.speechSynthesis;
    synth.cancel();
    if (!enVoice) pickVoice();
    var u = new SpeechSynthesisUtterance(text);
    if (enVoice) u.voice = enVoice;
    u.lang = enVoice ? enVoice.lang : "en-US";
    u.rate = speechRate;
    synth.speak(u);
    // iOS sometimes leaves the queue paused after cancel(); nudge it.
    if (synth.paused) synth.resume();
  }

  /* ---------- tabs ---------- */
  function showTab(name) {
    $$(".tab-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.tab === name); });
    $$(".tab-panel").forEach(function (p) { p.classList.toggle("active", p.id === "tab-" + name); });
    localStorage.setItem("toeic_last_tab", name);
    render[name] && render[name]();
  }
  $$(".tab-btn").forEach(function (b) {
    b.addEventListener("click", function () { showTab(b.dataset.tab); });
  });

  function renderHeaderBadge() {
    var scores = loadScores();
    var latest = scores.length ? scores[scores.length - 1] : null;
    var total = latest ? latest.reading + latest.listening : profile.baselineReading + profile.baselineListening;
    $("#score-badge").innerHTML =
      "<b>" + total + "</b> / " + (profile.targetReading + profile.targetListening) + " เป้าหมาย";
  }

  /* ================= DASHBOARD ================= */
  function renderDashboard() {
    var root = $("#tab-dashboard");
    var wk = currentWeek();
    var weekInfo = PLAN.weeks[wk - 1];
    var dayType = PLAN.dayTypes[new Date().getDay()];
    var template = PLAN.sessionTemplates[dayType];
    var dateKey = todayKey();
    var steps = loadSteps(dateKey);
    var scores = loadScores();
    var latest = scores.length ? scores[scores.length - 1] : null;
    var curTotal = latest ? latest.reading + latest.listening : profile.baselineReading + profile.baselineListening;
    var target = profile.targetReading + profile.targetListening;
    var baseTotal = profile.baselineReading + profile.baselineListening;
    var pct = Math.max(0, Math.min(100, Math.round(((curTotal - baseTotal) / (target - baseTotal)) * 100)));

    var html = "";
    html += '<div class="card">';
    html += "<h2>เป้าหมายของคุณ</h2>";
    html += '<div class="muted">คะแนนเริ่มต้น ' + baseTotal + " (Reading " + profile.baselineReading + " / Listening " + profile.baselineListening + ") &rarr; เป้าหมาย " + target + " (Reading " + profile.targetReading + " / Listening " + profile.targetListening + ")</div>";
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
    html += '<div class="tiny-muted">ความคืบหน้าจากคะแนนล่าสุดที่บันทึกไว้ (' + curTotal + ') เทียบกับเป้าหมาย — ไปที่แท็บ "ความคืบหน้า" เพื่อบันทึกผลสอบจำลอง</div>';
    html += '<div class="btn-row">';
    html += '<label class="tiny-muted">วันเริ่มแผน: <input type="date" id="start-date-input" value="' + profile.startDate + '"></label>';
    html += "</div></div>";

    html += '<div class="card">';
    html += "<h2>วันนี้ &middot; สัปดาห์ที่ " + wk + " / " + PLAN.weeks.length + " &mdash; " + weekInfo.theme + "</h2>";
    html += '<div class="muted">โฟกัส: ' + weekInfo.focus + "</div>";
    html += '<div class="tiny-muted">ช่วงเวลาแนะนำ: ' + PLAN.sessionWindow + "</div>";
    html += '<ul class="step-list">';
    template.forEach(function (step, i) {
      var checked = steps[i] ? "checked" : "";
      html += "<li><input type=\"checkbox\" data-step=\"" + i + "\" " + checked + "><span class=\"step-min\">" + step.minutes + " น.</span><span><b>" + step.label + "</b><br><span class=\"muted\">" + step.detail + "</span></span></li>";
    });
    html += "</ul>";
    html += '<div class="btn-row">';
    html += '<button class="btn" data-tab-link="vocab">ไปหน้าศัพท์</button>';
    html += '<button class="btn" data-tab-link="listening">ไปหน้า Listening</button>';
    html += '<button class="btn" data-tab-link="reading">ไปหน้า Reading</button>';
    html += "</div></div>";

    html += '<div class="card">';
    html += "<h2>ตัวจับเวลา 30 นาที</h2>";
    html += '<div class="timer-display" id="timer-display">30:00</div>';
    html += '<div class="btn-row" style="justify-content:center">';
    html += '<button class="btn primary" id="timer-start">เริ่ม</button>';
    html += '<button class="btn" id="timer-pause">พัก</button>';
    html += '<button class="btn" id="timer-reset">รีเซ็ต</button>';
    html += "</div></div>";

    html += '<div class="card">';
    html += "<h2>คำศัพท์ที่ต้องทวนวันนี้</h2>";
    html += '<div class="muted">มี <b>' + dueCount() + "</b> คำที่ครบกำหนดทวนแล้ว</div>";
    html += '<div class="tiny-muted">ท่องศัพท์ต่อเนื่องถึงวันที่ ' + (nextUnstudiedDay() - 1) + ' / ' + VOCAB.days.length + ' วัน (' + studiedWordCount() + ' / ' + totalVocabWordCount() + ' คำ) &middot; วันถัดไป: วันที่ ' + nextUnstudiedDay() + "</div>";
    html += '<div class="btn-row"><button class="btn" data-tab-link="vocab">ไปทวนศัพท์</button></div>';
    html += "</div>";

    var dailyTests = loadDailyTests();
    var todayResult = dailyTests[dateKey];
    html += '<div class="card">';
    html += "<h2>แบบทดสอบวันนี้</h2>";
    html += todayResult
      ? '<div class="muted">ทำแล้ววันนี้: <b>' + todayResult.score + " / " + todayResult.total + "</b> ข้อ &mdash; ทำซ้ำได้ถ้าอยากฝึกเพิ่ม</div>"
      : '<div class="muted">รวมศัพท์ที่ต้องทบทวน + ไวยากรณ์ประจำวัน + Listening/Reading ของสัปดาห์นี้ ~19 ข้อ ใช้เวลาประมาณ 10-15 นาที</div>';
    html += '<div class="btn-row"><button class="btn primary" id="daily-test-btn">' + (todayResult ? "ทำแบบทดสอบซ้ำ" : "เริ่มทำแบบทดสอบวันนี้") + "</button></div>";
    if (dashboardQuiz) html += renderDailyTestBlock(dashboardQuiz);
    html += "</div>";

    root.innerHTML = html;

    $("#start-date-input").addEventListener("change", function (e) {
      profile.startDate = e.target.value;
      saveProfile();
      renderDashboard();
    });
    $$('[data-tab-link]', root).forEach(function (b) {
      b.addEventListener("click", function () { showTab(b.dataset.tabLink); });
    });
    $$('input[data-step]', root).forEach(function (cb) {
      cb.addEventListener("change", function () {
        var arr = loadSteps(dateKey);
        arr[Number(cb.dataset.step)] = cb.checked;
        saveSteps(dateKey, arr);
      });
    });
    setupTimer();

    var dtBtn = $("#daily-test-btn");
    if (dtBtn) dtBtn.addEventListener("click", function () { dashboardQuiz = buildDailyTest(); renderDashboard(); });
    if (dashboardQuiz) {
      $$('input[type="radio"]', $("#daily-quiz-block")).forEach(function (r) {
        r.addEventListener("change", function () {
          var row = r.closest(".choice-row");
          dashboardQuiz[Number(row.dataset.q)].picked = Number(row.dataset.c);
        });
      });
      $("#daily-check").addEventListener("click", function () {
        var correct = 0;
        dashboardQuiz.forEach(function (item, qi) {
          $$('.choice-row[data-q="' + qi + '"]', root).forEach(function (row) {
            var ci = Number(row.dataset.c);
            row.classList.remove("correct", "incorrect");
            if (ci === item.answer) row.classList.add("correct");
            else if (ci === item.picked) row.classList.add("incorrect");
          });
          if (item.picked === item.answer) correct++;
        });
        var tests = loadDailyTests();
        tests[dateKey] = { score: correct, total: dashboardQuiz.length };
        saveDailyTests(tests);
        $("#daily-result").innerHTML = "ได้ " + correct + " / " + dashboardQuiz.length + " ข้อ — บันทึกผลวันนี้แล้ว";
      });
    }
  }

  var timerSeconds = 30 * 60;
  var timerInterval = null;
  function setupTimer() {
    var display = $("#timer-display");
    function render() {
      var m = Math.floor(timerSeconds / 60), s = timerSeconds % 60;
      display.textContent = pad(m) + ":" + pad(s);
    }
    render();
    $("#timer-start").addEventListener("click", function () {
      if (timerInterval) return;
      timerInterval = setInterval(function () {
        if (timerSeconds > 0) { timerSeconds--; render(); }
        else { clearInterval(timerInterval); timerInterval = null; }
      }, 1000);
    });
    $("#timer-pause").addEventListener("click", function () {
      clearInterval(timerInterval); timerInterval = null;
    });
    $("#timer-reset").addEventListener("click", function () {
      clearInterval(timerInterval); timerInterval = null;
      timerSeconds = 30 * 60; render();
    });
  }

  /* ================= VOCAB ================= */
  var vocabState = { day: currentVocabDay(), mode: "today", quiz: null, moreOpen: false };

  function flashCardHTML(w) {
    var st = wordState(w.word);
    var box = st ? st.box : 0;
    var due = st ? st.due : "ยังไม่เคยเรียน";
    return '<div class="flash-card">' +
      '<div class="front-only"><div class="word">' + w.word + ' <button class="btn small no-flip speak-word" data-text="' + escapeAttr(w.word) + '" aria-label="ฟังคำอ่าน">🔊</button></div><div class="pos">' + w.pos + '</div></div>' +
      '<div class="back">' +
      '<div><b>' + w.thai + '</b></div>' +
      (w.general ? '<div class="tiny-muted">ความหมายทั่วไป: ' + w.general + '</div>' : '') +
      (w.meaningEn ? '<div class="tiny-muted meaning-en"><i>' + w.meaningEn + '</i> <button class="btn small no-flip speak-meaning" data-text="' + escapeAttr(w.meaningEn) + '" aria-label="ฟังคำจำกัดความภาษาอังกฤษ">🔊</button></div>' : '') +
      (w.syn ? '<div class="tiny-muted word-rel"><span class="rel-tag syn">คล้าย</span>' + w.syn + '</div>' : '') +
      (w.ant ? '<div class="tiny-muted word-rel"><span class="rel-tag ant">ตรงข้าม</span>' + w.ant + '</div>' : '') +
      '<div class="tiny-muted example-line">' + w.example + ' <button class="btn small no-flip speak-ex" data-text="' + escapeAttr(w.example) + '" aria-label="ฟังตัวอย่างประโยค">🔊</button></div>' +
      '<div class="tiny-muted">' + w.exampleThai + '</div>' +
      '<div class="box-tag">Box ' + box + ' &middot; ทวนครั้งถัดไป: ' + due + '</div>' +
      '<div class="know-row">' +
      '<button class="btn small know-yes">รู้แล้ว</button>' +
      '<button class="btn small know-no">ยังไม่รู้</button>' +
      '</div></div></div>';
  }

  function wireFlashCard(card, w, afterUpdate) {
    card.addEventListener("click", function (e) {
      if (e.target.closest(".no-flip") || e.target.closest(".know-row")) return;
      card.classList.toggle("flipped");
    });
    card.querySelector(".speak-word").addEventListener("click", function (e) { e.stopPropagation(); speak(w.word); });
    var speakMeaning = card.querySelector(".speak-meaning");
    if (speakMeaning) speakMeaning.addEventListener("click", function (e) { e.stopPropagation(); speak(w.meaningEn); });
    card.querySelector(".speak-ex").addEventListener("click", function (e) { e.stopPropagation(); speak(w.example); });
    card.querySelector(".know-yes").addEventListener("click", function (e) { e.stopPropagation(); markWord(w.word, true); afterUpdate(); });
    card.querySelector(".know-no").addEventListener("click", function (e) { e.stopPropagation(); markWord(w.word, false); afterUpdate(); });
  }

  function vocabStampHTML() {
    var studiedDays = loadStudiedDays();
    var highestDay = highestStudiedDay();
    var streakDay = nextUnstudiedDay() - 1; /* last day before the first gap */
    var nextDay = nextUnstudiedDay();
    var studiedWords = studiedWordCount();
    var totalWords = totalVocabWordCount();
    var stampPct = totalWords ? Math.round((studiedWords / totalWords) * 100) : 0;
    var allDone = studiedDays.length >= VOCAB.days.length;

    var html = "";
    html += "<h2>ความคืบหน้าการท่องศัพท์</h2>";
    html += '<div class="muted">ท่องต่อเนื่องถึง <b>วันที่ ' + streakDay + ' / ' + VOCAB.days.length + '</b> &middot; รวม <b>' + studiedWords + ' / ' + totalWords + ' คำ</b></div>';
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + stampPct + '%"></div></div>';
    html += '<div class="tiny-muted">ติ๊กว่าท่องแล้วไปทั้งหมด ' + studiedDays.length + ' วัน (' + stampPct + "%)";
    if (highestDay > streakDay) html += " &middot; ท่องข้ามไปถึงวันที่ " + highestDay + " แล้วบางวัน";
    html += "</div>";
    html += '<div class="tiny-muted">' + (allDone ? "ท่องครบทุกวันแล้ว 🎉" : "วันถัดไปที่ต้องท่อง: <b>วันที่ " + nextDay + "</b>") + "</div>";
    return html;
  }
  function refreshVocabStamp() {
    var el = $("#vocab-stamp");
    if (el) el.innerHTML = vocabStampHTML();
  }

  function renderVocab() {
    var root = $("#tab-vocab");
    var due = dueWordsToday();
    var todayWords = due.map(function (d) { return d.word; });

    var html = "";
    html += '<div class="card" id="vocab-stamp">' + vocabStampHTML() + "</div>";

    html += '<div class="card">';
    html += "<h2>ศัพท์ TOEIC</h2>";
    html += '<div class="muted">ระบบ Leitner: กด &ldquo;รู้แล้ว&rdquo; คำนั้นจะเว้นระยะทวนนานขึ้นอัตโนมัติ กด &ldquo;ยังไม่รู้&rdquo; จะกลับมาทวนพรุ่งนี้</div>';
    html += '<div class="btn-row">';
    html += '<button class="btn small' + (vocabState.mode === "today" ? " primary" : "") + '" data-mode="today">ทบทวนวันนี้ (' + due.length + ")</button>";
    html += '<button class="btn small' + (vocabState.mode === "day" ? " primary" : "") + '" data-mode="day">เรียนคำใหม่ตามวัน</button>';
    html += "</div></div>";

    if (vocabState.mode === "today") {
      if (!due.length) {
        html += '<div class="card"><div class="muted">ไม่มีคำที่ครบกำหนดทบทวนวันนี้ 🎉 ไปเรียนคำใหม่ที่โหมด &ldquo;เรียนคำใหม่ตามวัน&rdquo; ได้เลย</div></div>';
      } else {
        html += '<div class="card"><h3>คำที่ต้องทบทวนวันนี้ (' + due.length + " คำ)</h3>";
        html += '<div class="flash-grid" id="flash-grid">' + todayWords.map(flashCardHTML).join("") + "</div>";
        html += '<div class="btn-row"><button class="btn primary" id="today-quiz-btn">ทำแบบทดสอบทบทวนวันนี้</button></div></div>';
      }
    } else {
      var dayData = VOCAB.days[vocabState.day - 1];
      var dayStudied = isDayStudied(vocabState.day);
      var nextDay = nextUnstudiedDay();

      html += '<div class="card">';
      html += '<div class="day-nav">';
      html += '<button class="btn day-arrow" id="day-prev"' + (vocabState.day <= 1 ? " disabled" : "") + ' aria-label="วันก่อนหน้า">&#9664;</button>';
      html += '<div class="day-nav-center">';
      html += '<div class="day-nav-title">วันที่ ' + dayData.day + ' <span class="day-nav-total">/ ' + VOCAB.days.length + '</span></div>';
      html += '<div class="day-nav-theme">' + dayData.theme + '</div>';
      html += '<div class="day-nav-status' + (dayStudied ? " done" : "") + '">' + (dayStudied ? "&#10003; ท่องแล้ว" : "ยังไม่ได้ท่อง") + "</div>";
      html += "</div>";
      html += '<button class="btn day-arrow" id="day-next"' + (vocabState.day >= VOCAB.days.length ? " disabled" : "") + ' aria-label="วันถัดไป">&#9654;</button>';
      html += "</div>";

      html += '<div class="btn-row">';
      html += '<button class="btn primary" id="vocab-quiz-btn">ทำแบบทดสอบวันนี้ (Quiz)</button>';
      if (nextDay !== vocabState.day) {
        html += '<button class="btn" id="jump-next-btn">ไปวันที่ต้องท่องต่อ (วันที่ ' + nextDay + ")</button>";
      }
      html += "</div>";

      html += '<div class="toggle-row">';
      html += '<label class="ios-toggle"><input type="checkbox" id="day-studied-toggle"' + (dayStudied ? " checked" : "") + '><span class="slider"></span></label>';
      html += '<span class="toggle-label">ติ๊กว่าท่องวันที่ ' + dayData.day + ' แล้ว</span>';
      html += "</div>";

      html += '<details class="day-more" id="day-more"' + (vocabState.moreOpen ? " open" : "") + "><summary>เลือกวันอื่น / ตัวเลือกเพิ่มเติม</summary>";
      html += '<div class="btn-row">';
      html += '<select id="vocab-day">' + VOCAB.days.map(function (d) {
        return '<option value="' + d.day + '"' + (d.day === vocabState.day ? " selected" : "") + '>' + (isDayStudied(d.day) ? "✓ " : "") + "วันที่ " + d.day + " — " + d.theme + "</option>";
      }).join("") + "</select>";
      html += '<button class="btn small" id="mark-through-btn">ทำเครื่องหมายว่าท่องถึงวันนี้ (วันที่ 1&ndash;' + dayData.day + ')</button>';
      html += "</div>";
      html += '<div class="tiny-muted">' + VOCAB.days.length + " วัน x 10 คำ — เรียนวันละชุด แล้วคำจะเข้าระบบทบทวนอัตโนมัติที่โหมด &ldquo;ทบทวนวันนี้&rdquo;</div>";
      html += "</details>";
      html += "</div>";

      html += '<div class="card"><h3>วันที่ ' + dayData.day + ' — ' + dayData.theme + '</h3><div class="flash-grid" id="flash-grid">' + dayData.words.map(flashCardHTML).join("") + "</div></div>";
    }

    if (vocabState.quiz) html += renderQuizBlock(vocabState.quiz);

    root.innerHTML = html;

    $$("button[data-mode]", root).forEach(function (b) {
      b.addEventListener("click", function () { vocabState.mode = b.dataset.mode; vocabState.quiz = null; renderVocab(); });
    });

    var grid = $("#flash-grid");
    if (grid) {
      var words = vocabState.mode === "today" ? todayWords : VOCAB.days[vocabState.day - 1].words;
      $$(".flash-card", grid).forEach(function (card, i) { wireFlashCard(card, words[i], renderVocab); });
    }

    if (vocabState.mode === "today") {
      var tqBtn = $("#today-quiz-btn");
      if (tqBtn) tqBtn.addEventListener("click", function () {
        vocabState.quiz = buildQuizFromWords(todayWords, 10);
        renderVocab();
      });
    } else {
      function gotoDay(n) {
        vocabState.day = Math.min(Math.max(n, 1), VOCAB.days.length);
        vocabState.quiz = null;
        renderVocab();
      }
      $("#day-more").addEventListener("toggle", function (e) { vocabState.moreOpen = e.target.open; });
      $("#day-prev").addEventListener("click", function () { gotoDay(vocabState.day - 1); });
      $("#day-next").addEventListener("click", function () { gotoDay(vocabState.day + 1); });
      var jumpBtn = $("#jump-next-btn");
      if (jumpBtn) jumpBtn.addEventListener("click", function () { gotoDay(nextUnstudiedDay()); });
      $("#vocab-day").addEventListener("change", function (e) {
        gotoDay(Number(e.target.value));
      });
      $("#vocab-quiz-btn").addEventListener("click", function () {
        vocabState.quiz = buildVocabQuiz(vocabState.day);
        renderVocab();
      });
      $("#day-studied-toggle").addEventListener("change", function () {
        toggleDayStudied(vocabState.day);
        renderVocab();
      });
      $("#mark-through-btn").addEventListener("click", function () {
        markStudiedThrough(vocabState.day);
        renderVocab();
      });
    }

    if (vocabState.quiz) wireQuizBlock();
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  /* ---- quiz construction ----
     Questions rotate through four formats and draw distractors from words
     that share the prompt word's part of speech (and theme where possible),
     so wrong choices cannot be eliminated on shape alone. */
  var QUIZ_FORMATS = ["th", "en", "def", "cloze"];
  var CHOICE_COUNT = 4;

  /* Pick distractor words, closest-matching first: same theme + pos, then
     same pos, then anything.
     `labelOf` keeps the displayed choices distinct. `conflictOf` rules out
     words that would also correctly answer the prompt — necessary because
     several words share a Thai meaning (deny/refuse, evaluate/assess), so a
     "pick the English word for ปฏิเสธ" question must not offer both. */
  function pickDistractors(correct, entries, labelOf, conflictOf, count) {
    var correctLabel = labelOf(correct);
    var correctConflict = conflictOf(correct);
    var taken = {};
    taken[correctLabel] = true;

    var eligible = entries.filter(function (e) {
      if (e.word.word === correct.word) return false;
      var label = labelOf(e.word);
      if (!label || label === correctLabel) return false;
      return conflictOf(e.word) !== correctConflict;
    });

    var correctEntry = null;
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].word.word === correct.word) { correctEntry = entries[i]; break; }
    }
    var theme = correctEntry ? correctEntry.theme : null;

    var tiers = [
      eligible.filter(function (e) { return e.theme === theme && e.word.pos === correct.pos; }),
      eligible.filter(function (e) { return e.word.pos === correct.pos; }),
      eligible
    ];

    var out = [];
    for (var t = 0; t < tiers.length && out.length < count; t++) {
      var tier = shuffle(tiers[t]);
      for (var j = 0; j < tier.length && out.length < count; j++) {
        var label = labelOf(tier[j].word);
        if (taken[label]) continue;
        taken[label] = true;
        out.push(tier[j].word);
      }
    }
    return out;
  }

  /* Blank out the target word in its own example sentence. Returns null when
     the word does not appear (some examples use a different form), so the
     caller can fall back to another question format. */
  function clozeSentence(w) {
    if (!w.example) return null;
    var escaped = w.word.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var patterns = [
      new RegExp("\\b" + escaped + "\\b", "i"),
      new RegExp("\\b" + escaped + "(?:s|es|ed|d|ing|ly|ment)\\b", "i")
    ];
    for (var i = 0; i < patterns.length; i++) {
      if (patterns[i].test(w.example)) return w.example.replace(patterns[i], "______");
    }
    return null;
  }

  function buildQuizFromWords(pool, limit) {
    var entries = allWords();
    var picks = shuffle(pool).slice(0, Math.min(limit || 10, pool.length));

    return picks.map(function (correct, i) {
      var format = QUIZ_FORMATS[i % QUIZ_FORMATS.length];
      var sentence = null;

      if (format === "cloze") {
        sentence = clozeSentence(correct);
        if (!sentence) format = "def";
      }
      if (format === "def" && !correct.meaningEn) format = "th";

      /* "th" asks for the Thai meaning; every other format asks for the
         English word, so choices are Thai labels only in the "th" case.
         conflictOf marks what would make a distractor a second valid answer:
         for "def" that is an identical English definition, otherwise an
         identical Thai meaning. */
      var wantsThai = format === "th";
      var labelOf = wantsThai
        ? function (w) { return w.thai; }
        : function (w) { return w.word; };
      var conflictOf = format === "def"
        ? function (w) { return w.meaningEn; }
        : function (w) { return w.thai; };

      var prompt;
      if (format === "cloze") prompt = sentence + ' <span class="tiny-muted">(เติมคำที่หายไป)</span>';
      else if (format === "def") prompt = "<i>" + correct.meaningEn + "</i>";
      else if (format === "en") prompt = correct.thai;
      else prompt = correct.word;

      var correctLabel = labelOf(correct);
      var distractors = pickDistractors(correct, entries, labelOf, conflictOf, CHOICE_COUNT - 1);
      var choices = shuffle([correctLabel].concat(distractors.map(labelOf)));

      return {
        prompt: prompt,
        word: correct.word,
        format: format,
        choices: choices,
        answer: choices.indexOf(correctLabel),
        picked: null
      };
    });
  }

  function buildVocabQuiz(dayNum) {
    return buildQuizFromWords(VOCAB.days[dayNum - 1].words, 10);
  }

  /* ================= CUMULATIVE REVIEW =================
     Periodic tests over a block of days, to check that words learned a
     while ago have actually stuck rather than only being recognised on the
     day they were introduced. */
  var REVIEW_KEY = "toeic_review_v1";
  function loadReviewScores() { return getJSON(REVIEW_KEY, {}); }
  function saveReviewScores(obj) { setJSON(REVIEW_KEY, obj); }

  var REVIEW_SIZES = [5, 10];
  var REVIEW_QUESTIONS = { 5: 20, 10: 30 };
  var reviewState = { size: 5, block: null, quiz: null };

  /* Split the whole vocabulary into consecutive blocks of `size` days. The
     final block absorbs the remainder when the total is not a multiple. */
  function reviewBlocks(size) {
    var blocks = [];
    for (var start = 1; start <= VOCAB.days.length; start += size) {
      var end = Math.min(start + size - 1, VOCAB.days.length);
      var words = [];
      for (var d = start; d <= end; d++) words = words.concat(VOCAB.days[d - 1].words);
      blocks.push({ start: start, end: end, words: words });
    }
    return blocks;
  }
  function reviewKey(size, start) { return size + "-" + start; }

  function buildReviewQuiz(block, size) {
    return buildQuizFromWords(block.words, Math.min(REVIEW_QUESTIONS[size] || 20, block.words.length));
  }

  function renderReview() {
    var root = $("#tab-review");
    var blocks = reviewBlocks(reviewState.size);
    var scores = loadReviewScores();
    var studiedThrough = nextUnstudiedDay() - 1;

    var html = "";
    html += '<div class="card">';
    html += "<h2>ทบทวนรวม</h2>";
    html += '<div class="muted">ทดสอบคำศัพท์ย้อนหลังเป็นช่วงๆ เพื่อเช็กว่ายังจำคำที่เรียนไปนานแล้วได้จริง สุ่มคำจากทั้งช่วง ไม่ใช่แค่วันเดียว</div>';
    html += '<div class="btn-row">';
    REVIEW_SIZES.forEach(function (s) {
      html += '<button class="btn small' + (reviewState.size === s ? " primary" : "") + '" data-size="' + s + '">ชุดละ ' + s + " วัน (" + (REVIEW_QUESTIONS[s]) + " ข้อ)</button>";
    });
    html += "</div></div>";

    html += '<div class="card"><h3>เลือกช่วงที่จะทดสอบ</h3>';
    html += '<div class="tiny-muted">ท่องต่อเนื่องถึงวันที่ ' + studiedThrough + " แล้ว — ช่วงที่ท่องครบจะขึ้นว่า &ldquo;พร้อมทดสอบ&rdquo;</div>";
    html += '<div class="review-list">';
    blocks.forEach(function (b) {
      var rec = scores[reviewKey(reviewState.size, b.start)];
      var ready = studiedThrough >= b.end;
      var partial = !ready && studiedThrough >= b.start;
      var active = reviewState.block === b.start;

      html += '<div class="review-row' + (active ? " active" : "") + '">';
      html += '<div class="review-row-main">';
      html += '<div class="review-row-title">วันที่ ' + b.start + "&ndash;" + b.end + ' <span class="tiny-muted">(' + b.words.length + " คำ)</span></div>";
      html += '<div class="review-row-sub">';
      if (rec) {
        var pct = Math.round((rec.best / rec.total) * 100);
        html += '<span class="pill ' + (pct >= 80 ? "aqua" : pct >= 60 ? "yellow" : "") + '">สูงสุด ' + rec.best + "/" + rec.total + " (" + pct + "%)</span>";
        html += '<span class="tiny-muted">ทำไป ' + rec.attempts + " ครั้ง &middot; ล่าสุด " + rec.last + "</span>";
      } else if (ready) {
        html += '<span class="tiny-muted">พร้อมทดสอบ — ยังไม่เคยทำ</span>';
      } else if (partial) {
        html += '<span class="tiny-muted">ท่องถึงวันที่ ' + studiedThrough + " (ยังไม่ครบช่วง)</span>";
      } else {
        html += '<span class="tiny-muted">ยังไม่ได้ท่องช่วงนี้</span>';
      }
      html += "</div></div>";
      html += '<button class="btn small' + (ready && !rec ? " primary" : "") + '" data-block="' + b.start + '">' + (rec ? "ทำอีกครั้ง" : "เริ่มทดสอบ") + "</button>";
      html += "</div>";
    });
    html += "</div></div>";

    if (reviewState.quiz) {
      var cur = blocks.filter(function (b) { return b.start === reviewState.block; })[0];
      html += '<div class="card"><h3>ชุดทดสอบ: วันที่ ' + cur.start + "&ndash;" + cur.end + " (" + reviewState.quiz.length + " ข้อ)</h3>";
      html += '<div class="tiny-muted">สุ่มจาก ' + cur.words.length + " คำในช่วงนี้ สลับ 4 รูปแบบคำถามเหมือน Quiz รายวัน</div></div>";
      html += renderReviewQuizBlock(reviewState.quiz);
    }

    root.innerHTML = html;

    $$("button[data-size]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        reviewState.size = Number(b.dataset.size);
        reviewState.block = null;
        reviewState.quiz = null;
        renderReview();
      });
    });
    $$("button[data-block]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var start = Number(b.dataset.block);
        var blk = reviewBlocks(reviewState.size).filter(function (x) { return x.start === start; })[0];
        reviewState.block = start;
        reviewState.quiz = buildReviewQuiz(blk, reviewState.size);
        renderReview();
        var el = $("#review-quiz-block");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    if (reviewState.quiz) wireReviewQuizBlock();
  }

  function renderReviewQuizBlock(quiz) {
    var html = '<div class="card" id="review-quiz-block">';
    quiz.forEach(function (item, qi) {
      html += '<div class="q-block"><div class="q-text">' + (qi + 1) + ". " + item.prompt + " " + (QUIZ_FORMAT_TAGS[item.format] || "") + "</div>";
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-q="' + qi + '" data-c="' + ci + '"><input type="radio" name="rev-' + qi + '" value="' + ci + '"> ' + c + "</label>";
      });
      html += "</div>";
    });
    html += '<div class="btn-row"><button class="btn primary" id="review-check">ตรวจคำตอบ</button></div>';
    html += '<div id="review-result" class="muted"></div></div>';
    return html;
  }

  function wireReviewQuizBlock() {
    var block = $("#review-quiz-block");
    $$('input[type="radio"]', block).forEach(function (r) {
      r.addEventListener("change", function () {
        var row = r.closest(".choice-row");
        reviewState.quiz[Number(row.dataset.q)].picked = Number(row.dataset.c);
      });
    });
    $("#review-check").addEventListener("click", function () {
      var correct = 0;
      var wrong = [];
      reviewState.quiz.forEach(function (item, qi) {
        $$('.choice-row[data-q="' + qi + '"]', block).forEach(function (row) {
          var ci = Number(row.dataset.c);
          row.classList.remove("correct", "incorrect");
          if (ci === item.answer) row.classList.add("correct");
          else if (ci === item.picked) row.classList.add("incorrect");
        });
        if (item.picked === item.answer) correct++;
        else wrong.push(item.word);
      });

      var total = reviewState.quiz.length;
      var scores = loadReviewScores();
      var key = reviewKey(reviewState.size, reviewState.block);
      var rec = scores[key] || { best: 0, total: total, attempts: 0, last: "" };
      rec.attempts += 1;
      rec.total = total;
      rec.best = Math.max(rec.best, correct);
      rec.last = todayKey();
      scores[key] = rec;
      saveReviewScores(scores);

      var pct = Math.round((correct / total) * 100);
      var msg = "ได้ " + correct + " / " + total + " ข้อ (" + pct + "%)";
      if (pct >= 80) msg += " — จำได้ดีมาก 🎉";
      else if (pct >= 60) msg += " — พอใช้ ควรทวนคำที่ผิดอีกรอบ";
      else msg += " — ควรกลับไปทบทวนช่วงนี้อีกครั้ง";
      if (rec.best === correct && rec.attempts > 1) msg += " (คะแนนสูงสุดใหม่)";

      var out = $("#review-result");
      out.innerHTML = msg + (wrong.length ? '<div class="tiny-muted" style="margin-top:6px">คำที่ตอบผิด: <b>' + wrong.join(", ") + "</b></div>" : "");
    });
  }

  /* ================= LESSONS (grammar + vocabulary) =================
     Two lesson tracks sharing one renderer. Each keeps its own completion
     progress so finishing a grammar lesson does not tick a vocab one. */
  var LESSON_TRACKS = {
    grammar: { label: "ไวยากรณ์", data: function () { return GRAMMAR.lessons; }, key: "toeic_grammar_v1" },
    vocab: { label: "คำศัพท์", data: function () { return VOCABLESSONS.lessons; }, key: "toeic_vocablesson_v1" }
  };
  var grammarState = { track: "grammar", lesson: 1 };

  var GRAMMAR_KEY = "toeic_grammar_v1";
  function loadGrammarProgress() { return getJSON(GRAMMAR_KEY, {}); }
  function saveGrammarProgress(obj) { setJSON(GRAMMAR_KEY, obj); }

  function trackLessons() { return LESSON_TRACKS[grammarState.track].data(); }
  function loadTrackProgress() { return getJSON(LESSON_TRACKS[grammarState.track].key, {}); }
  function saveTrackProgress(obj) { setJSON(LESSON_TRACKS[grammarState.track].key, obj); }

  function renderGrammar() {
    var root = $("#tab-grammar");
    var lessons = trackLessons();
    var progress = loadTrackProgress();
    var doneCount = lessons.filter(function (l) { return progress[l.id]; }).length;
    if (grammarState.lesson > lessons.length) grammarState.lesson = 1;
    var lesson = lessons[grammarState.lesson - 1];
    var done = !!progress[lesson.id];

    var html = "";
    html += '<div class="card">';
    html += "<h2>บทเรียนเตรียมสอบ TOEIC</h2>";
    html += '<div class="muted">เนื้อหาแบ่งตามจุดที่ข้อสอบ Part 5/6/7 วัดจริง เรียนทีละบท แต่ละบทมีคำอธิบาย ตัวอย่าง (ฟังเสียงได้) และแบบฝึกหัดท้ายบท</div>';
    html += '<div class="btn-row">';
    Object.keys(LESSON_TRACKS).forEach(function (t) {
      var tl = LESSON_TRACKS[t].data();
      var tp = getJSON(LESSON_TRACKS[t].key, {});
      var tdone = tl.filter(function (l) { return tp[l.id]; }).length;
      html += '<button class="btn small' + (grammarState.track === t ? " primary" : "") + '" data-track="' + t + '">' + LESSON_TRACKS[t].label + " (" + tdone + "/" + tl.length + ")</button>";
    });
    html += "</div></div>";

    html += '<div class="card">';
    html += '<div class="day-nav">';
    html += '<button class="btn day-arrow" id="lesson-prev"' + (grammarState.lesson <= 1 ? " disabled" : "") + ' aria-label="บทก่อนหน้า">&#9664;</button>';
    html += '<div class="day-nav-center">';
    html += '<div class="day-nav-title">บทที่ ' + lesson.id + ' <span class="day-nav-total">/ ' + lessons.length + "</span></div>";
    html += '<div class="day-nav-theme">' + lesson.title + "</div>";
    html += '<div class="day-nav-status' + (done ? " done" : "") + '">' + (done ? "&#10003; เรียนแล้ว" : "ยังไม่ได้เรียน") + "</div>";
    html += "</div>";
    html += '<button class="btn day-arrow" id="lesson-next"' + (grammarState.lesson >= lessons.length ? " disabled" : "") + ' aria-label="บทถัดไป">&#9654;</button>';
    html += "</div>";
    html += '<div class="progress-track"><div class="progress-fill" style="width:' + Math.round((doneCount / lessons.length) * 100) + '%"></div></div>';
    html += '<div class="tiny-muted">เรียนแล้ว ' + doneCount + " / " + lessons.length + " บทในหมวดนี้</div>";
    html += '<details class="day-more" id="lesson-more"' + (grammarState.moreOpen ? " open" : "") + "><summary>เลือกบทอื่น</summary>";
    html += '<div class="btn-row"><select id="grammar-lesson">' + lessons.map(function (l) {
      return '<option value="' + l.id + '"' + (l.id === grammarState.lesson ? " selected" : "") + ">" + (progress[l.id] ? "✓ " : "") + "บทที่ " + l.id + " — " + l.title + "</option>";
    }).join("") + "</select></div></details>";
    html += "</div>";

    html += '<div class="card lesson-block"><h3>บทที่ ' + lesson.id + " — " + lesson.title + "</h3>";
    lesson.explain.forEach(function (block) {
      html += "<h4>" + block.heading + "</h4>";
      html += '<div class="muted" style="white-space:pre-line">' + block.body + "</div>";
      (block.examples || []).forEach(function (ex) {
        html += '<div class="script-box"><button class="btn small play-btn" data-text="' + escapeAttr(ex.en) + '">▶</button> ' + ex.en + '<div class="tiny-muted">' + ex.th + "</div></div>";
      });
    });
    html += "</div>";

    html += '<div class="card"><h3>แบบฝึกหัดท้ายบท (' + lesson.practice.length + " ข้อ)</h3>";
    lesson.practice.forEach(function (item, qi) {
      html += '<div class="q-block" data-qi="' + qi + '"><div class="q-text">' + (qi + 1) + ". " + item.sentence + "</div>";
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="gp-' + qi + '" value="' + ci + '"> ' + c + "</label>";
      });
      html += "</div>";
    });
    html += '<div class="btn-row"><button class="btn primary" id="grammar-check">ตรวจคำตอบ</button></div><div id="grammar-result" class="muted"></div></div>';

    root.innerHTML = html;

    function gotoLesson(n) {
      grammarState.lesson = Math.min(Math.max(n, 1), lessons.length);
      renderGrammar();
    }
    $$("button[data-track]", root).forEach(function (b) {
      b.addEventListener("click", function () {
        grammarState.track = b.dataset.track;
        grammarState.lesson = 1;
        renderGrammar();
      });
    });
    $("#lesson-more").addEventListener("toggle", function (e) { grammarState.moreOpen = e.target.open; });
    $("#lesson-prev").addEventListener("click", function () { gotoLesson(grammarState.lesson - 1); });
    $("#lesson-next").addEventListener("click", function () { gotoLesson(grammarState.lesson + 1); });
    $("#grammar-lesson").addEventListener("change", function (e) { gotoLesson(Number(e.target.value)); });
    $$(".play-btn", root).forEach(function (b) { b.addEventListener("click", function () { speak(b.dataset.text); }); });
    $("#grammar-check").addEventListener("click", function () {
      var correct = 0;
      lesson.practice.forEach(function (item, qi) {
        var block = $('.q-block[data-qi="' + qi + '"]', root);
        var picked = null;
        $$(".choice-row", block).forEach(function (row) { if (row.querySelector("input").checked) picked = Number(row.dataset.c); });
        $$(".choice-row", block).forEach(function (row) {
          var ci = Number(row.dataset.c);
          row.classList.remove("correct", "incorrect");
          if (ci === item.answer) row.classList.add("correct");
          else if (ci === picked) row.classList.add("incorrect");
        });
        if (picked === item.answer) correct++;
      });
      var p2 = loadTrackProgress();
      p2[lesson.id] = true;
      saveTrackProgress(p2);
      $("#grammar-result").innerHTML = "ได้ " + correct + " / " + lesson.practice.length + " ข้อ — บันทึกว่าเรียนบทนี้แล้ว ✓";
    });
  }

  var QUIZ_FORMAT_TAGS = {
    th: '<span class="pill blue">ความหมายไทย</span>',
    en: '<span class="pill aqua">เลือกคำอังกฤษ</span>',
    def: '<span class="pill">นิยามอังกฤษ</span>',
    cloze: '<span class="pill yellow">เติมคำในประโยค</span>'
  };

  function renderQuizBlock(quiz) {
    var html = '<div class="card" id="quiz-block"><h3>Quiz (' + quiz.length + ' ข้อ)</h3>';
    html += '<div class="tiny-muted">สลับ 4 รูปแบบคำถาม ตัวเลือกลวงเป็นคำชนิดเดียวกันและหมวดเดียวกัน</div>';
    quiz.forEach(function (item, qi) {
      html += '<div class="q-block"><div class="q-text">' + (qi + 1) + ". " + item.prompt + " " + (QUIZ_FORMAT_TAGS[item.format] || "") + "</div>";
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-q="' + qi + '" data-c="' + ci + '"><input type="radio" name="quiz-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary" id="quiz-check">ตรวจคำตอบ</button></div>';
    html += '<div id="quiz-result" class="muted"></div></div>';
    return html;
  }

  function wireQuizBlock() {
    $$('input[type="radio"]', $("#quiz-block")).forEach(function (r) {
      r.addEventListener("change", function () {
        var row = r.closest(".choice-row");
        vocabState.quiz[Number(row.dataset.q)].picked = Number(row.dataset.c);
      });
    });
    $("#quiz-check").addEventListener("click", function () {
      var correct = 0;
      vocabState.quiz.forEach(function (item, qi) {
        $$('.choice-row[data-q="' + qi + '"]').forEach(function (row) {
          var ci = Number(row.dataset.c);
          row.classList.remove("correct", "incorrect");
          if (ci === item.answer) row.classList.add("correct");
          else if (ci === item.picked) row.classList.add("incorrect");
        });
        if (item.picked === item.answer) correct++;
      });
      $("#quiz-result").textContent = "ได้ " + correct + " / " + vocabState.quiz.length + " ข้อ";

      if (vocabState.mode === "day") {
        markDayStudied(vocabState.day);
        refreshVocabStamp();
        var toggle = $("#day-studied-toggle");
        if (toggle) toggle.checked = true;
      }
    });
  }

  /* ================= LISTENING ================= */
  var listeningState = { week: Math.min(currentWeek(), LISTENING.weeks.length) };

  function renderListening() {
    var root = $("#tab-listening");
    var wk = LISTENING.weeks[listeningState.week - 1];
    var speechNote = canSpeak() ? "" : '<div class="tiny-muted">เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง ลองใช้ Chrome หรือ Edge</div>';

    var html = "";
    html += '<div class="card"><h2>Listening Practice</h2>';
    html += '<div class="btn-row">';
    html += '<select id="listening-week">' + LISTENING.weeks.map(function (w) {
      return '<option value="' + w.week + '"' + (w.week === listeningState.week ? " selected" : "") + '>สัปดาห์ ' + w.week + '</option>';
    }).join("") + '</select>';
    html += '<button class="btn small" id="rate-normal">ความเร็วปกติ</button>';
    html += '<button class="btn small" id="rate-slow">ความเร็วช้า</button>';
    html += '</div>' + speechNote + '</div>';

    html += '<div class="card"><h3>Part 2 &middot; คำถาม-คำตอบสั้น</h3>';
    wk.part2.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p2" data-qi="' + qi + '">';
      html += '<div class="q-text">Q' + (qi + 1) + '. <button class="btn small play-btn" data-text="' + escapeAttr(item.q) + '">▶ ฟัง</button></div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p2-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p2">ตรวจคำตอบ Part 2</button></div></div>';

    html += '<div class="card"><h3>Part 3 &middot; บทสนทนา</h3>';
    html += '<div class="script-box">' + wk.part3.lines.join("<br>") + '</div>';
    html += '<button class="btn small play-all-btn" data-lines="' + escapeAttr(JSON.stringify(wk.part3.lines)) + '">▶ ฟังทั้งบทสนทนา</button>';
    wk.part3.questions.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p3" data-qi="' + qi + '"><div class="q-text">' + (qi + 1) + '. ' + item.q + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p3-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p3">ตรวจคำตอบ Part 3</button></div></div>';

    html += '<div class="card"><h3>Part 4 &middot; การพูดคนเดียว/ประกาศ</h3>';
    html += '<div class="script-box">' + wk.part4.script + '</div>';
    html += '<button class="btn small play-btn" data-text="' + escapeAttr(wk.part4.script) + '">▶ ฟัง</button>';
    wk.part4.questions.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p4" data-qi="' + qi + '"><div class="q-text">' + (qi + 1) + '. ' + item.q + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p4-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p4">ตรวจคำตอบ Part 4</button></div></div>';

    root.innerHTML = html;

    $("#listening-week").addEventListener("change", function (e) {
      listeningState.week = Number(e.target.value); renderListening();
    });
    $("#rate-normal").addEventListener("click", function () { speechRate = 1; });
    $("#rate-slow").addEventListener("click", function () { speechRate = 0.75; });
    $$(".play-btn", root).forEach(function (b) {
      b.addEventListener("click", function () { speak(b.dataset.text); });
    });
    $$(".play-all-btn", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var lines = JSON.parse(b.dataset.lines);
        var text = lines.map(function (l) { return l.replace(/^[MW]:\s*/, ""); }).join(". ");
        speak(text);
      });
    });
    $$(".check-btn", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var section = b.dataset.section;
        var data = section === "p2" ? wk.part2 : section === "p3" ? wk.part3.questions : wk.part4.questions;
        checkSection(root, section, data);
      });
    });
  }

  function escapeAttr(s) { return s.replace(/"/g, "&quot;"); }

  function checkSection(root, section, data) {
    data.forEach(function (item, qi) {
      var block = $('.q-block[data-section="' + section + '"][data-qi="' + qi + '"]', root);
      var picked = null;
      $$(".choice-row", block).forEach(function (row) {
        var input = row.querySelector("input");
        if (input.checked) picked = Number(row.dataset.c);
      });
      $$(".choice-row", block).forEach(function (row) {
        var ci = Number(row.dataset.c);
        row.classList.remove("correct", "incorrect");
        if (ci === item.answer) row.classList.add("correct");
        else if (ci === picked) row.classList.add("incorrect");
      });
    });
  }

  /* ================= READING ================= */
  var readingState = { week: Math.min(currentWeek(), READING.weeks.length) };

  function renderReading() {
    var root = $("#tab-reading");
    var wk = READING.weeks[readingState.week - 1];

    var html = "";
    html += '<div class="card"><h2>Reading Practice</h2>';
    html += '<select id="reading-week">' + READING.weeks.map(function (w) {
      return '<option value="' + w.week + '"' + (w.week === readingState.week ? " selected" : "") + '>สัปดาห์ ' + w.week + '</option>';
    }).join("") + '</select></div>';

    html += '<div class="card"><h3>Part 5 &middot; เติมคำในประโยค</h3>';
    wk.part5.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p5" data-qi="' + qi + '"><div class="q-text">' + (qi + 1) + '. ' + item.sentence + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p5-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p5">ตรวจคำตอบ Part 5</button></div></div>';

    html += '<div class="card"><h3>Part 6 &middot; เติมคำในบทความ</h3>';
    html += '<div class="script-box">' + wk.part6.passage + '</div>';
    wk.part6.blanks.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p6b" data-qi="' + qi + '"><div class="q-text">ช่องที่ ' + (qi + 1) + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p6b-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    wk.part6.questions.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p6q" data-qi="' + qi + '"><div class="q-text">' + item.q + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p6q-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p6">ตรวจคำตอบ Part 6</button></div></div>';

    html += '<div class="card"><h3>Part 7 &middot; อ่านจับใจความ</h3>';
    html += '<div class="script-box">' + wk.part7.passage + '</div>';
    wk.part7.questions.forEach(function (item, qi) {
      html += '<div class="q-block" data-section="p7" data-qi="' + qi + '"><div class="q-text">' + (qi + 1) + '. ' + item.q + '</div>';
      item.choices.forEach(function (c, ci) {
        html += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="p7-' + qi + '" value="' + ci + '"> ' + c + '</label>';
      });
      html += '</div>';
    });
    html += '<div class="btn-row"><button class="btn primary check-btn" data-section="p7">ตรวจคำตอบ Part 7</button></div></div>';

    root.innerHTML = html;

    $("#reading-week").addEventListener("change", function (e) {
      readingState.week = Number(e.target.value); renderReading();
    });
    $$(".check-btn", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var section = b.dataset.section;
        if (section === "p5") checkSection(root, "p5", wk.part5);
        else if (section === "p6") { checkSection(root, "p6b", wk.part6.blanks); checkSection(root, "p6q", wk.part6.questions); }
        else if (section === "p7") checkSection(root, "p7", wk.part7.questions);
      });
    });
  }

  /* ================= MOCK (full practice sets) ================= */
  var mockState = { set: 1 };
  var mockGroups = [];
  var MOCK_HISTORY_KEY = "toeic_mocktest_v1";
  function loadMockHistory() { return getJSON(MOCK_HISTORY_KEY, []); }
  function saveMockHistory(arr) { setJSON(MOCK_HISTORY_KEY, arr); }

  function mockQBlocks(key, items, mode) {
    mockGroups.push({ key: key, data: items });
    var h = "";
    items.forEach(function (item, qi) {
      h += '<div class="q-block" data-section="' + key + '" data-qi="' + qi + '"><div class="q-text">';
      if (mode === "photo") {
        var spoken = item.scene + " Option A. " + item.choices[0] + " Option B. " + item.choices[1] + " Option C. " + item.choices[2] + " Option D. " + item.choices[3];
        h += (qi + 1) + '. <button class="btn small play-btn" data-text="' + escapeAttr(spoken) + '">▶ ฟัง</button><div class="tiny-muted">ภาพ: ' + item.scene + "</div>";
      } else if (mode === "play") h += "Q" + (qi + 1) + '. <button class="btn small play-btn" data-text="' + escapeAttr(item.q) + '">▶ ฟัง</button>';
      else if (mode === "blank") h += "ช่องที่ " + (qi + 1);
      else if (mode === "sentence") h += (qi + 1) + ". " + item.sentence;
      else h += (qi + 1) + ". " + item.q;
      h += "</div>";
      item.choices.forEach(function (c, ci) {
        var label = mode === "photo" ? String.fromCharCode(65 + ci) + ". " + c : c;
        h += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="' + key + "-" + qi + '" value="' + ci + '"> ' + label + "</label>";
      });
      h += "</div>";
    });
    return h;
  }

  function renderMock() {
    var root = $("#tab-mock");
    var data = MOCK.sets[mockState.set - 1];
    mockGroups = [];
    var speechNote = canSpeak() ? "" : '<div class="tiny-muted">เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง ลองใช้ Chrome, Edge หรือ Safari</div>';

    var html = "";
    html += '<div class="card"><h2>ข้อสอบชุด (Mock Test)</h2>';
    html += '<div class="muted">ข้อสอบเสมือนจริงเต็มรูปแบบ 200 ข้อ (Listening 100 + Reading 100) ตามสัดส่วนจริงของ TOEIC — ทำทั้งชุดแล้วกด “ตรวจคำตอบทั้งชุด” ด้านล่างเพื่อดูคะแนน</div>';
    html += '<div class="btn-row"><select id="mock-set">' + MOCK.sets.map(function (s) {
      return '<option value="' + s.set + '"' + (s.set === mockState.set ? " selected" : "") + ">" + s.title + "</option>";
    }).join("") + "</select>";
    html += '<button class="btn small" id="m-rate-normal">ความเร็วปกติ</button>';
    html += '<button class="btn small" id="m-rate-slow">ความเร็วช้า</button></div>' + speechNote + "</div>";

    html += '<div class="card"><h3>Part 1 · บรรยายภาพ (6 ข้อ)</h3><div class="tiny-muted">อ่านคำบรรยายภาพ แล้วกด “▶ ฟัง” เพื่อฟังตัวเลือก A-D เลือกประโยคที่ตรงกับภาพที่สุด</div>';
    html += mockQBlocks("m-p1", data.listening.part1, "photo");
    html += "</div>";

    html += '<div class="card"><h3>Part 2 · ถาม-ตอบสั้น (25 ข้อ)</h3><div class="tiny-muted">กด “▶ ฟัง” เพื่อฟังคำถาม แล้วเลือกคำตอบที่เหมาะสมที่สุด</div>';
    html += mockQBlocks("m-p2", data.listening.part2, "play");
    html += "</div>";

    html += '<div class="card"><h3>Part 3 · บทสนทนา (13 บท x 3 ข้อ = 39 ข้อ)</h3>';
    data.listening.part3.forEach(function (conv, ci) {
      html += '<div class="script-box">' + conv.lines.join("<br>") + "</div>";
      html += '<button class="btn small play-all-btn" data-lines="' + escapeAttr(JSON.stringify(conv.lines)) + '">▶ ฟังบทสนทนา ' + (ci + 1) + "</button>";
      html += mockQBlocks("m-p3-" + ci, conv.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 4 · พูดคนเดียว/ประกาศ (10 บท x 3 ข้อ = 30 ข้อ)</h3>';
    data.listening.part4.forEach(function (talk, ti) {
      html += '<div class="script-box">' + talk.script + "</div>";
      html += '<button class="btn small play-btn" data-text="' + escapeAttr(talk.script) + '">▶ ฟัง</button>';
      html += mockQBlocks("m-p4-" + ti, talk.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 5 · เติมคำในประโยค (30 ข้อ)</h3>';
    html += mockQBlocks("m-p5", data.reading.part5, "sentence");
    html += "</div>";

    html += '<div class="card"><h3>Part 6 · เติมคำในบทความ (4 บทความ x 4 ข้อ = 16 ข้อ)</h3>';
    data.reading.part6.forEach(function (psg, pi) {
      html += '<div class="script-box">' + psg.passage + "</div>";
      html += mockQBlocks("m-p6-" + pi, psg.blanks, "blank");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 7 · อ่านจับใจความ เดี่ยว (29 ข้อ)</h3>';
    data.reading.part7.single.forEach(function (psg, pi) {
      html += '<div class="script-box">' + psg.passage + "</div>";
      html += mockQBlocks("m-p7s-" + pi, psg.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 7 · อ่านจับใจความ คู่ (2 ชุด x 5 ข้อ = 10 ข้อ)</h3>';
    data.reading.part7.double.forEach(function (set, si) {
      html += set.passages.map(function (p) { return '<div class="script-box">' + p + "</div>"; }).join("");
      html += mockQBlocks("m-p7d-" + si, set.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 7 · อ่านจับใจความ สาม (3 ชุด x 5 ข้อ = 15 ข้อ)</h3>';
    data.reading.part7.triple.forEach(function (set, si) {
      html += set.passages.map(function (p) { return '<div class="script-box">' + p + "</div>"; }).join("");
      html += mockQBlocks("m-p7t-" + si, set.questions, "text");
    });
    html += "</div>";

    var totalQ = mockGroups.reduce(function (s, g) { return s + g.data.length; }, 0);
    html += '<div class="card"><div class="muted">รวมทั้งชุด: <b>' + totalQ + ' ข้อ</b></div><div class="btn-row"><button class="btn primary" id="mock-grade">ตรวจคำตอบทั้งชุด</button></div><div id="mock-result" class="muted" style="margin-top:8px"></div></div>';

    var history = loadMockHistory();
    if (history.length) {
      html += '<div class="card"><h3>ประวัติการทำข้อสอบชุด</h3><table class="data-table"><tr><th>วันที่</th><th>ชุด</th><th>คะแนน</th><th>%</th></tr>';
      history.slice().reverse().slice(0, 15).forEach(function (h) {
        var setTitle = MOCK.sets[h.set - 1] ? MOCK.sets[h.set - 1].title : "ชุดที่ " + h.set;
        html += "<tr><td>" + h.date + "</td><td>" + setTitle + "</td><td>" + h.correct + " / " + h.total + "</td><td>" + Math.round((h.correct / h.total) * 100) + "%</td></tr>";
      });
      html += "</table></div>";
    }

    root.innerHTML = html;

    $("#mock-set").addEventListener("change", function (e) { mockState.set = Number(e.target.value); renderMock(); });
    $("#m-rate-normal").addEventListener("click", function () { speechRate = 1; });
    $("#m-rate-slow").addEventListener("click", function () { speechRate = 0.75; });
    $$(".play-btn", root).forEach(function (b) { b.addEventListener("click", function () { speak(b.dataset.text); }); });
    $$(".play-all-btn", root).forEach(function (b) {
      b.addEventListener("click", function () {
        var lines = JSON.parse(b.dataset.lines);
        var text = lines.map(function (l) { return l.replace(/^[MW]:\s*/, ""); }).join(". ");
        speak(text);
      });
    });
    $("#mock-grade").addEventListener("click", function () {
      var total = 0, correct = 0;
      mockGroups.forEach(function (g) {
        g.data.forEach(function (item, qi) {
          total++;
          var block = $('.q-block[data-section="' + g.key + '"][data-qi="' + qi + '"]', root);
          var picked = null;
          $$(".choice-row", block).forEach(function (row) {
            if (row.querySelector("input").checked) picked = Number(row.dataset.c);
          });
          $$(".choice-row", block).forEach(function (row) {
            var cc = Number(row.dataset.c);
            row.classList.remove("correct", "incorrect");
            if (cc === item.answer) row.classList.add("correct");
            else if (cc === picked) row.classList.add("incorrect");
          });
          if (picked === item.answer) correct++;
        });
      });
      var pct = Math.round((correct / total) * 100);
      var res = $("#mock-result");
      res.innerHTML = "คะแนนรวมทั้งชุด: <b>" + correct + " / " + total + "</b> (" + pct + "%) — เฉลยขึ้นสีเขียว (ถูก) / สีแดง (ที่เลือกผิด) ในแต่ละข้อแล้ว บันทึกผลแล้ว";
      var history = loadMockHistory();
      history.push({ date: todayKey(), set: mockState.set, correct: correct, total: total });
      saveMockHistory(history);
    });
  }

  /* ================= PLAN ================= */
  function renderPlan() {
    var root = $("#tab-plan");
    var wk = currentWeek();
    var dayLabels = { rest: "พัก/ทบทวนเบาๆ", listening: "Listening", reading: "Reading", mixed: "รวม Mix", review: "ทบทวนอิสระ" };

    var html = "";
    html += '<div class="card"><h2>แผน 12 สัปดาห์: 510 &rarr; 770</h2>';
    html += '<div class="muted">' + PLAN.phaseNote + '</div></div>';

    html += '<div class="card"><h3>รูปแบบรายวัน (30 นาที/วัน, ' + PLAN.sessionWindow + ')</h3>';
    html += '<table class="week-table"><tr><th>วัน</th><th>ประเภท</th></tr>';
    ["จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์", "อาทิตย์"].forEach(function (d, i) {
      var idx = (i + 1) % 7; // Mon=1 ... Sun=0
      html += "<tr><td>" + d + "</td><td>" + dayLabels[PLAN.dayTypes[idx]] + "</td></tr>";
    });
    html += '</table></div>';

    html += '<div class="card"><h3>ภาพรวม 12 สัปดาห์</h3><table class="week-table"><tr><th>สัปดาห์</th><th>ธีมศัพท์</th><th>โฟกัส</th></tr>';
    PLAN.weeks.forEach(function (w) {
      html += '<tr class="' + (w.week === wk ? "current-week" : "") + '"><td>' + w.week + '</td><td>' + w.theme + '</td><td>' + w.focus + '</td></tr>';
    });
    html += '</table></div>';

    html += '<div class="card"><h3>จุดตรวจสอบ (Checkpoints)</h3><ul class="step-list">';
    PLAN.milestones.forEach(function (m) {
      html += '<li><span class="step-min">W' + m.afterWeek + '</span><span>' + m.note + ' (เป้าคร่าวๆ: Reading ' + m.targetReading + ' / Listening ' + m.targetListening + ')</span></li>';
    });
    html += '</ul></div>';

    root.innerHTML = html;
  }

  /* ================= PROGRESS ================= */
  function renderProgress() {
    var root = $("#tab-progress");
    var scores = loadScores();

    var html = "";
    html += '<div class="card"><h2>บันทึกผลสอบจำลอง (Mock Test)</h2>';
    html += '<div class="btn-row">';
    html += '<input type="date" id="score-date" value="' + todayKey() + '">';
    html += '<input type="number" id="score-reading" min="0" max="495" step="5" placeholder="Reading (0-495)">';
    html += '<input type="number" id="score-listening" min="0" max="495" step="5" placeholder="Listening (0-495)">';
    html += '<button class="btn primary" id="score-add">บันทึก</button>';
    html += '</div></div>';

    html += '<div class="card"><h3>คะแนนรวมตามช่วงเวลา</h3>' + buildLineChart(scores) + '</div>';
    html += '<div class="card"><h3>Reading vs Listening &mdash; ปัจจุบันเทียบเป้าหมาย</h3>' + buildBarComparison(scores) + '</div>';

    html += '<div class="card"><h3>ตารางบันทึกผล</h3>' + buildScoreTable(scores) + '</div>';

    root.innerHTML = html;

    $("#score-add").addEventListener("click", function () {
      var r = Number($("#score-reading").value), l = Number($("#score-listening").value), d = $("#score-date").value;
      if (!d || isNaN(r) || isNaN(l) || r < 0 || l < 0) { alert("กรุณากรอกวันที่และคะแนนให้ครบถ้วน"); return; }
      scores.push({ date: d, reading: r, listening: l });
      scores.sort(function (a, b) { return a.date < b.date ? -1 : 1; });
      saveScores(scores);
      renderProgress();
      renderHeaderBadge();
    });
  }

  function buildScoreTable(scores) {
    if (!scores.length) return '<div class="muted">ยังไม่มีข้อมูล — บันทึกผลสอบจำลองครั้งแรกด้านบน</div>';
    var baseTotal = profile.baselineReading + profile.baselineListening;
    var rows = scores.map(function (s) {
      var total = s.reading + s.listening;
      return "<tr><td>" + s.date + "</td><td>" + s.reading + "</td><td>" + s.listening + "</td><td>" + total + "</td><td>" + (total - baseTotal >= 0 ? "+" : "") + (total - baseTotal) + "</td></tr>";
    }).join("");
    return '<table class="data-table"><tr><th>วันที่</th><th>Reading</th><th>Listening</th><th>รวม</th><th>เทียบเริ่มต้น</th></tr>' + rows + '</table>';
  }

  function buildLineChart(scores) {
    var w = 640, h = 220, padL = 40, padR = 16, padT = 16, padB = 24;
    var minY = 300, maxY = 900;
    var baseTotal = profile.baselineReading + profile.baselineListening;
    var target = profile.targetReading + profile.targetListening;
    var points = [{ label: "เริ่มต้น", total: baseTotal }].concat(
      scores.map(function (s) { return { label: s.date, total: s.reading + s.listening }; })
    );
    function x(i) { return padL + (i * (w - padL - padR)) / Math.max(1, points.length - 1); }
    function y(v) { return padT + (h - padT - padB) * (1 - (v - minY) / (maxY - minY)); }

    var grid = "";
    [300, 400, 500, 600, 700, 800, 900].forEach(function (v) {
      grid += '<line x1="' + padL + '" y1="' + y(v) + '" x2="' + (w - padR) + '" y2="' + y(v) + '" style="stroke:var(--gridline)" stroke-width="1"/>';
      grid += '<text x="4" y="' + (y(v) + 3) + '">' + v + '</text>';
    });

    var targetY = y(target);
    var targetLine = '<line x1="' + padL + '" y1="' + targetY + '" x2="' + (w - padR) + '" y2="' + targetY + '" style="stroke:var(--good)" stroke-width="1.5" stroke-dasharray="4 3"/>' +
      '<text x="' + (w - padR - 60) + '" y="' + (targetY - 4) + '" style="fill:var(--good)">เป้าหมาย ' + target + '</text>';

    var path = points.map(function (p, i) { return (i === 0 ? "M" : "L") + x(i) + "," + y(p.total); }).join(" ");
    var dots = points.map(function (p, i) {
      return '<circle cx="' + x(i) + '" cy="' + y(p.total) + '" r="4" style="fill:var(--series-1)"><title>' + p.label + ": " + p.total + '</title></circle>';
    }).join("");
    var lastLabel = points.length ? '<text x="' + x(points.length - 1) + '" y="' + (y(points[points.length - 1].total) - 10) + '" text-anchor="middle" style="fill:var(--text-primary);font-weight:700">' + points[points.length - 1].total + '</text>' : "";

    return '<svg class="chart" viewBox="0 0 ' + w + ' ' + h + '" width="100%" height="220" role="img" aria-label="กราฟคะแนนรวมตามช่วงเวลา เทียบกับเป้าหมาย">' +
      grid + targetLine +
      '<path d="' + path + '" fill="none" style="stroke:var(--series-1)" stroke-width="2"/>' +
      dots + lastLabel + '</svg>' +
      '<div class="tiny-muted">จุดแรก = คะแนนเริ่มต้น เส้นประสีเขียว = เป้าหมาย ' + target + '</div>';
  }

  function buildBarComparison(scores) {
    var latest = scores.length ? scores[scores.length - 1] : null;
    var rows = [
      { label: "Reading", color: "var(--series-1)", baseline: profile.baselineReading, latest: latest ? latest.reading : profile.baselineReading, target: profile.targetReading },
      { label: "Listening", color: "var(--series-2)", baseline: profile.baselineListening, latest: latest ? latest.listening : profile.baselineListening, target: profile.targetListening }
    ];
    var max = 495;
    var html = '<div class="legend-row">' +
      '<span class="legend-item"><span class="legend-dot" style="background:var(--series-1)"></span>Reading</span>' +
      '<span class="legend-item"><span class="legend-dot" style="background:var(--series-2)"></span>Listening</span>' +
      '<span class="legend-item">| เป้าหมายต่อพาร์ท: Reading ' + profile.targetReading + ' / Listening ' + profile.targetListening + '</span>' +
      '</div>';
    rows.forEach(function (r) {
      var pct = Math.round((r.latest / max) * 100);
      var targetPct = Math.round((r.target / max) * 100);
      html += '<div class="bar-row"><span class="bar-label">' + r.label + '</span>';
      html += '<div class="bar-track">';
      html += '<div class="bar-fill" style="width:' + pct + '%;background:' + r.color + '"></div>';
      html += '<div style="position:absolute;left:' + targetPct + '%;top:0;bottom:0;width:2px;background:var(--good)" title="เป้าหมาย ' + r.target + '"></div>';
      html += '</div><span class="bar-value">' + r.latest + '</span></div>';
    });
    html += '<div class="tiny-muted">เส้นสีเขียว = เป้าหมายของพาร์ทนั้น &middot; แถบสี = คะแนนล่าสุด (หรือคะแนนเริ่มต้นถ้ายังไม่บันทึกผลสอบจำลอง)</div>';
    return html;
  }

  /* ================= boot ================= */
  var render = {
    dashboard: renderDashboard,
    vocab: renderVocab,
    review: renderReview,
    grammar: renderGrammar,
    listening: renderListening,
    reading: renderReading,
    mock: renderMock,
    plan: renderPlan,
    progress: renderProgress
  };

  renderHeaderBadge();
  showTab(localStorage.getItem("toeic_last_tab") || "dashboard");
})();
