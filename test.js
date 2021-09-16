const fs = require('fs');
const path = require('path');

const f2t = require('./src/index');

const cwd = process.cwd();
const pR = (...a) => path.resolve(cwd, ...a);

const ip = pR('../../codemod-flow-2-ts-joi/src/target/flow-2-joi.input.js');
const op = pR('../../codemod-flow-2-ts-joi/src/target/flow-2-joi.input.tsx');

const source = fs.readFileSync(ip, 'utf8');
const converted = f2t.convert(source, f2t.parseOptions);

console.log('source =----> ', converted);