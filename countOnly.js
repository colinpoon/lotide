const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢 Passed: ${actual} = ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} ≠ ${expected}`);
  }
};
// assertEqual

const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (const item of allItems) {
    // console.log(item);
    if (itemsToCount[item]) {
      if (obj[item]) {
        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }
  }
  return obj;
};



// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);