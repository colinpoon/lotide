const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 7, 6]), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false);
assertArraysEqual([1, 1, 2], [1, 1, 2]);
assertArraysEqual(["1", 1, 2], [1, 1, 2]);