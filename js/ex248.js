/* #27
  ES06 248:
  Write a JavaScript program to deep flatten an array.
*/

const deepFlatten = (array) =>
  [].concat(
    ...array.map((item) => (Array.isArray(item) ? deepFlatten(item) : item))
  );

// // ES06 248: tests
console.log(deepFlatten([1, [2], [[3], 4], 5]));
