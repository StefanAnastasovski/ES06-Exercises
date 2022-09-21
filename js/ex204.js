/* #21
  ES06 204:
 Write a JavaScript program that will check if the given argument is a native boolean element. 
 */

const isBoolean = (value) => typeof value === "boolean";

// ES06 204: tests
console.log(isBoolean(null));
console.log(isBoolean(false));
