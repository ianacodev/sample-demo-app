// db.js
const Path = require('path');
const glob = require('glob');
const files = glob.sync(`${Path.resolve(__dirname, './')}/**/[!_]*.js`, { nodir: true });

const middlewares = files.map((filePath) => require(filePath));

module.exports = middlewares;