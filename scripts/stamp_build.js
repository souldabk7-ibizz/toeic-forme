/* Stamps a build id onto webapp/index.html.

   GitHub Pages serves app.js, style.css and the data files with no
   fingerprint in the filename, so a browser that has seen the old copy will
   keep using it after a deploy — on iOS especially, where a page added to
   the home screen holds its cache hard. This appends ?v=<build> to every
   local script and stylesheet so each deploy is a new URL, and writes the
   same id into the footer so the running build can be read off the screen.

   Usage: node scripts/stamp_build.js [build-id]   (default: today + time) */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'webapp', 'index.html');
const now = new Date();
const pad = n => String(n).padStart(2, '0');
const build = process.argv[2] ||
  `${now.getUTCFullYear()}${pad(now.getUTCMonth() + 1)}${pad(now.getUTCDate())}.${pad(now.getUTCHours())}${pad(now.getUTCMinutes())}`;

let html = fs.readFileSync(file, 'utf8');

/* local assets only — the Firebase CDN tags are versioned already */
html = html.replace(/(<(?:script src|link rel="stylesheet" href)=")([^"]+)"/g, (m, head, url) => {
  if (/^https?:/.test(url)) return m;
  return head + url.split('?')[0] + '?v=' + build + '"';
});

html = html.replace(/<span class="build-tag">[^<]*<\/span>/, `<span class="build-tag">build ${build}</span>`);

fs.writeFileSync(file, html);

/* The running page compares its own build against this file, fetched past
   every cache, and offers a reload when they differ. Without it a page
   restored from memory — which is what a home-screen app on iOS does when
   reopened — keeps running the old code indefinitely, because the ?v=
   stamps above only help once index.html itself has been fetched again. */
fs.writeFileSync(path.join(__dirname, '..', 'webapp', 'version.json'),
  JSON.stringify({ build: build }) + '\n');

console.log('stamped build ' + build);
