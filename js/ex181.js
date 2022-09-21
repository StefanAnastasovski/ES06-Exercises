/* #16
  ES06 181:
  Write a JavaScript program to get the last element from a given array.
 */

const getLastElement = (array) => array[array.length - 1];

// ES06 181: tests
console.log(getLastElement([1, 2, 3]));
console.log(getLastElement([1, 2, 3, 4, 5, 7]));
