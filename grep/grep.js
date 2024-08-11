#!/usr/bin/env node

const {readFileSync} = require('fs');
const {resolve} = require('path');

let flags = process.argv.slice(2).filter((arg) => arg.startsWith('-'));
let pattern = process.argv[flags.length + 2];
pattern = new RegExp(flags.includes('-x') ? `^${pattern}$` : pattern, flags.includes('-i') ? 'i' : '');
let filenames = process.argv.slice(flags.length + 3);
for (let filename of filenames) {
  let lines = readFileSync(resolve(filename), { encoding: 'utf-8' }).split(/\r?\n/);
  for (let j = 0; j < lines.length; j++) {
    if (pattern.test(lines[j]) ^ flags.includes('-v')) {
      if (flags.includes('-l')) {
        console.log(filename);
        break;
      }

      console.log(((filenames.length > 1) ? `${filename}:` : '') + (flags.includes('-n') ? `${j + 1}:` : '') + lines[j]);
    }
  }
}
