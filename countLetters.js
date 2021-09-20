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

console.log(countLetters("crocodile"));
console.log(countLetters("LHL"));

module.exports = countLetters;