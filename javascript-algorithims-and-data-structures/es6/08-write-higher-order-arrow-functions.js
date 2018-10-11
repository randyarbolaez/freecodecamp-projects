/*
Use arrow function syntax to compute the square of only the positive integers (decimal numbers are not integers) in the array realNumberArray and store the new array in the variable squaredIntegers.
*/

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = arr => {
  'use strict';
  // change code below this line
  const squaredIntegers = arr
    .filter(blah => {
      return Number.isInteger(blah);
    })
    .map(foo => {
      return foo * foo;
    });
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);
