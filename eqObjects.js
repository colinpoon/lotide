const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Passed: ${actual} = ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} ≠ ${expected}`);
  }
};
// assertEqual

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect; 
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
  } else {
    console.log(`💥💥Assertion Failed: ${inspect(obj1)} ≠≠≠ ${inspect(obj2)}`);
  }
};
// assertObjectEq

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


//TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});