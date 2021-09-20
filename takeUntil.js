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

const assertArraysEqual = function (arrA, arrB) {
  if(eqArrays(arrA, arrB)) {
    console.log(`✅ Arrays Passed: ${arrA} = ${arrB}`);
  } else {
    console.log(`💥 Arrays Failed: ${arrA} ≠ ${arrB}`);
  }
};
//assertArraysEqual

const takeUntil = function(arr, cb) {
  let output = []
  for (i of arr) {
    if(cb(i)){
      return output;
    }
    output.push(i);
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data1, x => x > 1), [1] );

module.exports = takeUntil;