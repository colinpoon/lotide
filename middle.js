const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};
// eqArrays

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB)) {
    console.log(`✅ Arrays Passed: ${arrA} === ${arrB}`);
  } else {
    console.log(`💥 Arrays Failed: ${arrA} !== ${arrB}`);
  }
};
//assertArraysEqual

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

console.log(middle([1, 2, 3]));
console.log(middle([5, 6, 7, 8, 9]));
console.log(middle([5, 6, 7, 8, 9, 10]));
console.log(middle([1, 2]));
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([5, 6, 7, 8, 9, 10, 11]), [8, 9]); //fail