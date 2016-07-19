const path = require('path');
const root = path.resolve(__dirname, '..');

exports.root = (...args) => {
  const argsArray = Array.prototype.slice.call(args, 0);
  return path.join.apply(path, [root].concat(argsArray));
};
