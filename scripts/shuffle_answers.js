/* Shuffles the `choices` of every {choices:[...], answer:N} object in a data
   file and recomputes `answer`, so lessons can be authored with the correct
   choice first. Safe to re-run: shuffling an already-shuffled file is a no-op
   in correctness terms. Usage: node scripts/shuffle_answers.js <file> <GLOBAL> */
const fs = require('fs');
const [file, globalName] = process.argv.slice(2);
if (!file || !globalName) { console.error('usage: node shuffle_answers.js <file> <GLOBAL>'); process.exit(1); }

global.window = {};
require(require('path').resolve(file));
const data = global.window[globalName];

function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

let n = 0;
(function walk(node) {
  if (Array.isArray(node)) return node.forEach(walk);
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node.choices) && typeof node.answer === 'number') {
    const correct = node.choices[node.answer];
    const shuffled = shuffle(node.choices);
    node.choices = shuffled;
    node.answer = shuffled.indexOf(correct);
    n++;
  }
  Object.values(node).forEach(walk);
})(data);

const header = fs.readFileSync(file, 'utf8').match(/^\/\*[\s\S]*?\*\/\n/);
fs.writeFileSync(file, (header ? header[0] : '') + 'window.' + globalName + ' = ' + JSON.stringify(data, null, 2) + ';\n');
console.log('shuffled', n, 'question objects in', file);
