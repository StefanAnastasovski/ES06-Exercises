/* #18
  ES06 192:
  Write a JavaScript program to check whether the provided value is an object 
  created by the Object constructor.
 */

const isPlainObject = (value) =>
  typeof value === "object" && !!value && value.constructor === Object;

// ES06 192: tests
console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject(new Map()));
