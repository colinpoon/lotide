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

const assertArraysEqual = function (arrA, arrB) {
  if(eqArrays(arrA, arrB)) {
    console.log(`✅ Arrays Passed: ${arrA} = ${arrB}`);
  } else {
    console.log(`💥 Arrays Failed: ${arrA} ≠ ${arrB}`);
  }
};
//assertArraysEqual

// const letterPosition = function(sntn) {
//   const result = {};
//   for (let i = 0; i <sntn.length; i++){
//     if ()
//   }
//   return result;
// };

const letterPositions = function(sntn) {
  const result = {};
  sntn = sntn.replace(/\s/g, "");
  for (let i = 0; i < sntn.length; i++) {
    const ltr = sntn[i];
    if (result[ltr] === undefined) {
      result[ltr] = [];
    }
    result[ltr].push(i);
  }
  return result;
};

console.log(letterPositions("lighthouse in the house"));

// console.log(letterPosition('hello'))
// assertArraysEqual(letterPosition('hello').e, [1])