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

const eqObjects = function(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  for(let key of Object.keys(obj1)) {
    if(Array.isArray(obj1[key])) {
      if(!eqArrays(obj1[key], obj2[key])) return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};
// eqObjects

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; 
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`💥💥Assertion Failed: ${inspect(obj1)} ≠≠≠ ${inspect(obj2)}`);
  }
};
// assertObjectEq
// console.log(`Example label: ${inspect(actual)}`);
assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});