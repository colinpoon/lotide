const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [8, 9] for [5, 6, 7, 8, 9, 10] force fail", () => {
    assert.deepEqual(middle([5, 6, 7, 8, 9, 10]), [8, 9]);
  });
});