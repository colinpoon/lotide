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

const words = ["ground", "control", "to", "major", "tom"];

const map = function (arr, cb){
  const output = [];
  for (let item of arr) {
    output.push(cb(item));
  }
  return output;
};

const results1 = map(words, word => word[0]);

// TEST CODE
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[word.length -1]), [ 'g', 'c', 't', 'm', 't' ])
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[word.length -1]), [ 'd', 'l', 'o', 'r', 'm' ])
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"])
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);