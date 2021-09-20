const eqArrays = require('./eqArrays');
// eqArrays

const assertArraysEqual = function (arrA, arrB) {
  if(eqArrays(arrA, arrB)) {
    console.log(`✅ Arrays Passed: ${arrA} = ${arrB}`);
  } else {
    console.log(`💥 Arrays Failed: ${arrA} ≠ ${arrB}`);
  }
};
//assertArraysEqual

module.exports = assertArraysEqual;