const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  if (arr === []) {
    return undefined;
  }
  return arr[0];
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");
assertEqual(head([]), undefined);