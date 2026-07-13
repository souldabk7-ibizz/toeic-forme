(function () {
  "use strict";

  /* ---------- tiny utils ---------- */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  function toKey(d) { return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); }
  function todayKey() { return toKey(new Date()); }
  function fromKey(key) { var p = key.split("-").map(Number); return new Date(p[0], p[1] - 1, p[2]); }
  function addDays(key, n) { var d = fromKey(key); d.setDate(d.getDate() + n); return toKey(d); }
  function daysBetween(a, b) { return Math.round((fromKey(b) - fromKey(a)) / 86400000); }

  function getJSON(key, fallback) {
    try { var raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch (e) { return fallback; }
  }
  function setJSON(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

  /* ---------- profile / schedule state ---------- */
  var PROFILE_KEY = "toeic_profile_v1";
  function loadProfile() {
    return getJSON(PROFILE_KEY, {
      startDate: todayKey(),
      baselineReading: 350,
      baselineListening: 160,
      targetReading: 420,
      targetListening: 350
    });
  }
  var profile = loadProfile();
  function saveProfile() { setJSON(PROFILE_KEY, profile); }

  function currentWeek() {
    var diff = daysBetween(profile.startDate, todayKey());
    var wk = Math.floor(Math.max(diff, 0) / 7) + 1;
    return Math.min(Math.max(wk, 1), VOCAB.weeks.length);
  }

  /* ---------- SRS (Leitner boxes) ---------- */
  var SRS_KEY = "toeic_srs_v1";
  var INTERVALS = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 14 };
  function loadSRS() { return getJSON(SRS_KEY, {}); }
  var srs = loadSRS();
  function saveSRS() { setJSON(SRS_KEY, srs); }

  function allWords() {
    var list = [];
    VOCAB.weeks.forEach(function (w) {
      w.words.forEach(function (word) { list.push({ week: w.week, theme: w.theme, word: word }); });
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
  function dueCount() { return allWords().filter(function (w) { return isDue(w.word.word); }).length; }

  /* ---------- session step checkboxes ---------- */
  function stepsKey(dateKey) { return "toeic_steps_" + dateKey; }
  function loadSteps(dateKey) { return getJSON(stepsKey(dateKey), []); }
  function saveSteps(dateKey, arr) { setJSON(stepsKey(dateKey), arr); }

  /* ---------- score log ---------- */
  var SCORES_KEY = "toeic_scores_v1";
  function loadScores() { return getJSON(SCORES_KEY, []); }
  function saveScores(arr) { setJSON(SCORES_KEY, arr); }

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
    html += '<div class="btn-row"><button class="btn" data-tab-link="vocab">ไปทวนศัพท์</button></div>';
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
  var vocabState = { week: currentWeek(), quiz: null };

  function renderVocab() {
    var root = $("#tab-vocab");
    var weekData = VOCAB.weeks[vocabState.week - 1];

    var html = "";
    html += '<div class="card">';
    html += '<h2>ศัพท์ TOEIC</h2>';
    html += '<div class="muted">มี <b>' + dueCount() + '</b> คำครบกำหนดทวนทั้งหมด (ทุกสัปดาห์)</div>';
    html += '<div class="btn-row">';
    html += '<select id="vocab-week">' + VOCAB.weeks.map(function (w) {
      return '<option value="' + w.week + '"' + (w.week === vocabState.week ? " selected" : "") + '>สัปดาห์ ' + w.week + ' — ' + w.theme + '</option>';
    }).join("") + '</select>';
    html += '<button class="btn primary" id="vocab-quiz-btn">ทำแบบทดสอบสัปดาห์นี้ (Quiz)</button>';
    html += '</div></div>';

    html += '<div class="card"><h3>' + weekData.theme + '</h3><div class="flash-grid" id="flash-grid"></div></div>';

    if (vocabState.quiz) html += renderQuizBlock(vocabState.quiz);

    root.innerHTML = html;

    $("#vocab-week").addEventListener("change", function (e) {
      vocabState.week = Number(e.target.value);
      vocabState.quiz = null;
      renderVocab();
    });
    $("#vocab-quiz-btn").addEventListener("click", function () {
      vocabState.quiz = buildVocabQuiz(vocabState.week);
      renderVocab();
    });

    var grid = $("#flash-grid");
    weekData.words.forEach(function (w) {
      var st = wordState(w.word);
      var box = st ? st.box : 0;
      var due = st ? st.due : "ยังไม่เคยเรียน";
      var card = document.createElement("div");
      card.className = "flash-card";
      card.innerHTML =
        '<div class="front-only"><div class="word">' + w.word + '</div><div class="pos">' + w.pos + '</div></div>' +
        '<div class="back">' +
        '<div><b>' + w.thai + '</b></div>' +
        '<div class="tiny-muted">' + w.example + '</div>' +
        '<div class="tiny-muted">' + w.exampleThai + '</div>' +
        '<div class="box-tag">Box ' + box + ' &middot; ทวนครั้งถัดไป: ' + due + '</div>' +
        '<div class="know-row">' +
        '<button class="btn small know-yes">รู้แล้ว</button>' +
        '<button class="btn small know-no">ยังไม่รู้</button>' +
        '</div></div>';
      card.addEventListener("click", function (e) {
        if (e.target.closest(".know-row")) return;
        card.classList.toggle("flipped");
      });
      card.querySelector(".know-yes").addEventListener("click", function (e) {
        e.stopPropagation(); markWord(w.word, true); renderVocab();
      });
      card.querySelector(".know-no").addEventListener("click", function (e) {
        e.stopPropagation(); markWord(w.word, false); renderVocab();
      });
      grid.appendChild(card);
    });

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

  function buildVocabQuiz(weekNum) {
    var weekData = VOCAB.weeks[weekNum - 1];
    var pool = weekData.words;
    var picks = shuffle(pool).slice(0, Math.min(5, pool.length));
    return picks.map(function (correct) {
      var distractors = shuffle(pool.filter(function (w) { return w.word !== correct.word; })).slice(0, 2);
      var choices = shuffle([correct.thai].concat(distractors.map(function (d) { return d.thai; })));
      return { word: correct.word, choices: choices, answer: choices.indexOf(correct.thai), picked: null };
    });
  }

  function renderQuizBlock(quiz) {
    var html = '<div class="card" id="quiz-block"><h3>Quiz: เลือกความหมายที่ถูกต้อง</h3>';
    quiz.forEach(function (item, qi) {
      html += '<div class="q-block"><div class="q-text">' + (qi + 1) + '. ' + item.word + '</div>';
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

  function mockQBlocks(key, items, mode) {
    mockGroups.push({ key: key, data: items });
    var h = "";
    items.forEach(function (item, qi) {
      h += '<div class="q-block" data-section="' + key + '" data-qi="' + qi + '"><div class="q-text">';
      if (mode === "play") h += "Q" + (qi + 1) + '. <button class="btn small play-btn" data-text="' + escapeAttr(item.q) + '">▶ ฟัง</button>';
      else if (mode === "blank") h += "ช่องที่ " + (qi + 1);
      else if (mode === "sentence") h += (qi + 1) + ". " + item.sentence;
      else h += (qi + 1) + ". " + item.q;
      h += "</div>";
      item.choices.forEach(function (c, ci) {
        h += '<label class="choice-row" data-c="' + ci + '"><input type="radio" name="' + key + "-" + qi + '" value="' + ci + '"> ' + c + "</label>";
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
    html += '<div class="muted">ทำทั้งชุด (Listening + Reading) แล้วกด “ตรวจคำตอบทั้งชุด” ด้านล่างเพื่อดูคะแนน</div>';
    html += '<div class="btn-row"><select id="mock-set">' + MOCK.sets.map(function (s) {
      return '<option value="' + s.set + '"' + (s.set === mockState.set ? " selected" : "") + ">" + s.title + "</option>";
    }).join("") + "</select>";
    html += '<button class="btn small" id="m-rate-normal">ความเร็วปกติ</button>';
    html += '<button class="btn small" id="m-rate-slow">ความเร็วช้า</button></div>' + speechNote + "</div>";

    html += '<div class="card"><h3>Part 2 · ถาม-ตอบสั้น</h3><div class="tiny-muted">กด “▶ ฟัง” เพื่อฟังคำถาม แล้วเลือกคำตอบที่เหมาะสมที่สุด</div>';
    html += mockQBlocks("m-p2", data.listening.part2, "play");
    html += "</div>";

    html += '<div class="card"><h3>Part 3 · บทสนทนา</h3>';
    data.listening.part3.forEach(function (conv, ci) {
      html += '<div class="script-box">' + conv.lines.join("<br>") + "</div>";
      html += '<button class="btn small play-all-btn" data-lines="' + escapeAttr(JSON.stringify(conv.lines)) + '">▶ ฟังบทสนทนา ' + (ci + 1) + "</button>";
      html += mockQBlocks("m-p3-" + ci, conv.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 4 · พูดคนเดียว/ประกาศ</h3>';
    data.listening.part4.forEach(function (talk, ti) {
      html += '<div class="script-box">' + talk.script + "</div>";
      html += '<button class="btn small play-btn" data-text="' + escapeAttr(talk.script) + '">▶ ฟัง</button>';
      html += mockQBlocks("m-p4-" + ti, talk.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><h3>Part 5 · เติมคำในประโยค</h3>';
    html += mockQBlocks("m-p5", data.reading.part5, "sentence");
    html += "</div>";

    html += '<div class="card"><h3>Part 6 · เติมคำในบทความ</h3>';
    html += '<div class="script-box">' + data.reading.part6.passage + "</div>";
    html += mockQBlocks("m-p6b", data.reading.part6.blanks, "blank");
    html += mockQBlocks("m-p6q", data.reading.part6.questions, "text");
    html += "</div>";

    html += '<div class="card"><h3>Part 7 · อ่านจับใจความ</h3>';
    data.reading.part7.forEach(function (psg, pi) {
      html += '<div class="script-box">' + psg.passage + "</div>";
      html += mockQBlocks("m-p7-" + pi, psg.questions, "text");
    });
    html += "</div>";

    html += '<div class="card"><div class="btn-row"><button class="btn primary" id="mock-grade">ตรวจคำตอบทั้งชุด</button></div><div id="mock-result" class="muted" style="margin-top:8px"></div></div>';

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
      res.innerHTML = "คะแนนรวมทั้งชุด: <b>" + correct + " / " + total + "</b> (" + pct + "%) — เฉลยขึ้นสีเขียว (ถูก) / สีแดง (ที่เลือกผิด) ในแต่ละข้อแล้ว";
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
    listening: renderListening,
    reading: renderReading,
    mock: renderMock,
    plan: renderPlan,
    progress: renderProgress
  };

  renderHeaderBadge();
  showTab(localStorage.getItem("toeic_last_tab") || "dashboard");
})();
