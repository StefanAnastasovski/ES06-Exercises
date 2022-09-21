/* #19
  ES06 196:
  Write a JavaScript program to check whether the provided value is an object 
  created by the Object constructor.
*/

const isNull = (value) => value === null;

// // ES06 196: tests
console.log(isNull(null));
console.log(isNull(123));
