const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Passed: ${actual} = ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} ≠ ${expected}`);
  }
};
// assertEqual

const findKeyByValue = (obj, val) => {
  for (const [key, value] of Object.entries(obj)) {
    if(value === val) return key;
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;