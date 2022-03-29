// db.js
const Path = require('path');
const glob = require('glob');
const dataFiles = glob.sync(`${Path.resolve(__dirname, './')}/**/[!_]*.js`, { nodir: true });

const dbConfig = dataFiles.reduce((config, filePath) => {
  const data = require(filePath);
  const fileName = filePath.split('/').pop();
  const key = fileName.split('.')[0];
  return {...config, [key]: data }
}, {})

module.exports = () => dbConfig;