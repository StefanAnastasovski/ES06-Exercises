/* #10
  ES06 21:
  Write a JavaScript program to get every nth element in a given array. 
*/

const everyNthItem = (arr, nth) =>
  arr.filter((element, index) => index % nth === nth - 1);
const extractEveryNthItem = (array, nth) =>
  array.filter((item, index) => index % nth === nth - 1);

// // ES06 21: tests
console.log(extractEveryNthItem([1, 2, 3, 4, 5, 6], 1));
console.log(extractEveryNthItem([1, 2, 3, 4, 5, 6], 2));
console.log(extractEveryNthItem([1, 2, 3, 4, 5, 6], 3));
console.log(extractEveryNthItem([1, 2, 3, 4, 5, 6], 4));
