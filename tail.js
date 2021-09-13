const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);