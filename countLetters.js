const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Passed: ${actual} = ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} ≠ ${expected}`);
  }
};
// assertEqual

const countLetters = function(str) {
  let count = {};
  for (const ltr of str) {
    // console.log(ltr)
    if (!count[ltr]) {
      // console.log('count if ltr of str is not in count', count);
      count[ltr] = 1;
      // console.log('increase by 1 if not present', count);
    } else {
      count[ltr] += 1;
      // console.log('increase again', count);
    }
  }
  return count;
};


// TEST CODE
// countLetters("crocodile");
// console.log(countLetters("crocodile"));
// console.log(countLetters("LHL"));

assertEqual(countLetters('LHL', { L: 2, H: 1 }), true);
// const output = countLetters(word, { "c": 2, "r": 1, "o": 2, "c": 2, "o": 2, "d": 1, "i": 1, "l": 1, "e": 1 });
// assertEqual(output["c"], 2);
