/* #15
  ES06 175:
  Write a JavaScript program to get the n minimum elements from the provided array.
 */

const getNMinimumElements = (array, n = 1) =>
  [...array].sort((a, b) => a - b).slice(0, n);

// ES06 170: tests
console.log(getNMinimumElements([1, 2, 3]));
console.log(getNMinimumElements([1, 2, 3], 2));
