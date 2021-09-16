const converter = require('./convert');
const detectJsx = require('./detect-jsx');

exports.convert = converter;
exports.parseOptions = converter.parseOptions;
exports.detectJsx = detectJsx;