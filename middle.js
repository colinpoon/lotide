const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  }
  let cntr = [];
  if (arr.length % 2 !== 0) {
    cntr = (arr.length / 2);
    return arr.slice(cntr, cntr + 1);
  }
  if (arr.length % 2 === 0) {
    cntr = (arr.length / 2);
    return arr.slice(cntr - 1 , cntr + 1);
  }
};

module.exports = middle;