/* Firebase web config.
 *
 * Paste the values from:
 *   Firebase Console > Project settings (gear icon) > General
 *   > Your apps > Web app (</>) > "SDK setup and configuration" > Config
 *
 * NOTE: these values are NOT secret — they are meant to be shipped in
 * client-side code. Access is controlled by Firestore Security Rules and
 * Firebase Authentication, not by hiding these keys. Leaving the "PASTE_"
 * placeholders in place simply keeps cloud sync turned off.
 */
window.FIREBASE_CONFIG = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};
