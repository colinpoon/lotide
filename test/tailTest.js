const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it("returns [] for [10]", () => {
    assert.deepEqual(tail([10]), []); 
  });

  it("returns [10] for [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0] force fail", () => {
    assert.deepEqual(tail([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]), [10]);
  });
});

// // TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);