const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); // fail
assertEqual(1, 1); // pass
assertEqual("hello", "hello"); // pass
assertEqual("hello", "bye"); // fail
assertEqual(10, 10); // pass
assertEqual(10, 100); // fail