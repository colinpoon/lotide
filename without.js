const eqArrays = function(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
};
// eqArrays

const assertArraysEqual = function(arrA, arrB) {
  if (eqArrays(arrA, arrB)) {
    console.log(`✅ Arrays Passed: ${arrA} = ${arrB}`);
  } else {
    console.log(`💥 Arrays Failed: ${arrA} ≠ ${arrB}`);
  }
};
//assertArraysEqual

const without = function(src, itr) {
  let newArr = [];
  for (let i = 0; i < src.length; i++) {
    if (itr[i] !== src[i]) {
      newArr.push(src[i]);
    }
  }
  return newArr;
};

//TEST CODE
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(["apple", "car", "bugs"], [1, 2, "bugs"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const things = ["hello", "world", "lighthouse", "students"];
without(things, ["students", "hello"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(things, ["world", "lighthouse"]);


// const without = function(src, itr) {
//   let arr = [];
//   for(let i = 0; i < src.length; i++) {
//         if(!itr.includes(src[i])) {
//           arr.push(src[i]);
//         }
//     }
//     return arr;
// };