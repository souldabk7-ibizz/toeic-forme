/* Optional cloud sync via Firebase (Google sign-in + Firestore).
 *
 * Design:
 *  - localStorage stays the offline source of truth; this layer mirrors the
 *    "toeic_*" keys to a single Firestore document per signed-in user.
 *  - Last-write-wins at the whole-blob level using an updatedAt timestamp.
 *  - If Firebase isn't loaded or the config is still a placeholder, this file
 *    does nothing, so the app keeps working offline / in the preview.
 */
(function () {
  "use strict";

  var KEY_PREFIX = "toeic_";
  var META_KEY = "toeic_sync_updatedAt";
  var cfg = window.FIREBASE_CONFIG || {};
  var cfgLooksReal = !!(cfg.apiKey && cfg.apiKey.indexOf("PASTE") === -1 &&
    cfg.projectId && cfg.projectId.indexOf("PASTE") === -1);
  var configured = !!(window.firebase && cfgLooksReal);

  var statusEl = null, btnEl = null;

  function setStatus(t) { if (statusEl) statusEl.textContent = t; }

  function wireUI(onClick) {
    btnEl = document.getElementById("sync-btn");
    statusEl = document.getElementById("sync-status");
    if (btnEl) {
      btnEl.style.display = "";
      if (onClick) btnEl.addEventListener("click", onClick);
    }
  }

  if (!configured) {
    // Either the config still has placeholders, or the Firebase SDK
    // failed to load (e.g. no internet) — tell them apart so the message
    // isn't misleading.
    function hint() {
      statusEl = document.getElementById("sync-status");
      if (!statusEl) return;
      if (!cfgLooksReal) setStatus("ซิงก์ยังไม่เปิด (กรอก firebase-config.js)");
      else setStatus("โหลด Firebase ไม่สำเร็จ — ตรวจสอบอินเทอร์เน็ตแล้วรีเฟรช");
    }
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", hint);
    else hint();
    return;
  }

  firebase.initializeApp(cfg);
  var auth = firebase.auth();
  var db = firebase.firestore();
  var user = null, pushTimer = null, applying = false;

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(function () {});

  function docRef() { return db.collection("users").doc(user.uid); }

  function collectData() {
    var out = {};
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(KEY_PREFIX) === 0 && k !== META_KEY) out[k] = localStorage.getItem(k);
    }
    return out;
  }

  function applyData(data) {
    var remove = [];
    for (var i = 0; i < localStorage.length; i++) {
      var k = localStorage.key(i);
      if (k && k.indexOf(KEY_PREFIX) === 0 && k !== META_KEY) remove.push(k);
    }
    remove.forEach(function (k) { origRemove(k); });
    Object.keys(data || {}).forEach(function (k) { origSet(k, data[k]); });
  }

  function schedulePush() {
    if (!user || applying) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 1500);
  }

  function pushNow() {
    if (!user) return;
    var now = Date.now();
    origSet(META_KEY, String(now));
    docRef().set({ data: collectData(), updatedAt: now }, { merge: true })
      .then(function () { setStatus("ซิงก์แล้ว · " + (user.email || "")); })
      .catch(function (e) { setStatus("ซิงก์ไม่สำเร็จ: " + (e && e.code)); });
  }

  // Auto-push whenever the app writes a toeic_ key.
  var origSet = localStorage.setItem.bind(localStorage);
  var origRemove = localStorage.removeItem.bind(localStorage);
  localStorage.setItem = function (k, v) {
    origSet(k, v);
    if (k && k.indexOf(KEY_PREFIX) === 0 && k !== META_KEY) schedulePush();
  };
  localStorage.removeItem = function (k) {
    origRemove(k);
    if (k && k.indexOf(KEY_PREFIX) === 0 && k !== META_KEY) schedulePush();
  };

  function reconcile() {
    docRef().get().then(function (snap) {
      var localMeta = Number(localStorage.getItem(META_KEY) || 0);
      if (snap.exists) {
        var d = snap.data() || {};
        var cloudMeta = Number(d.updatedAt || 0);
        if (cloudMeta > localMeta && d.data) {
          applying = true;
          applyData(d.data);
          origSet(META_KEY, String(cloudMeta));
          applying = false;
          setStatus("ดึงข้อมูลจากคลาวด์แล้ว กำลังโหลดใหม่...");
          setTimeout(function () { location.reload(); }, 400);
          return;
        }
      }
      pushNow(); // cloud empty or local is newer -> upload local
    }).catch(function (e) { setStatus("อ่านคลาวด์ไม่สำเร็จ: " + (e && e.code)); });
  }

  function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(function (e) {
      var code = e && e.code;
      if (code === "auth/popup-blocked" || code === "auth/cancelled-popup-request" ||
          code === "auth/operation-not-supported-in-this-environment") {
        auth.signInWithRedirect(provider); // iOS Safari fallback
      } else {
        setStatus("ล็อกอินไม่สำเร็จ: " + code);
      }
    });
  }

  auth.onAuthStateChanged(function (u) {
    user = u;
    if (u) {
      if (btnEl) btnEl.textContent = "ออกจากระบบ";
      setStatus("เข้าสู่ระบบ: " + (u.email || u.uid));
      reconcile();
    } else {
      if (btnEl) btnEl.textContent = "☁︎ ล็อกอินซิงก์";
      setStatus("ยังไม่ได้ซิงก์ (ออฟไลน์)");
    }
  });

  wireUI(function () { if (user) auth.signOut(); else signIn(); });
})();
