/* #30
  ES06 56:
  Write a JavaScript program to check whether all elements in a given array are equal or not.
*/

const allEqual = (array) => array.every((item) => item === array[0]);

// // ES06 56: tests
console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));
