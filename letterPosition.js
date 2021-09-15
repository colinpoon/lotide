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

const letterPosition = function(sntn) {
  const result = {};
  
  return result;
}