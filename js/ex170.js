/* #14
  ES06 170:
 Write a JavaScript program to create a function that invokes fn with partials prepended to the 
 arguments it receives.
 */

const partialFunc =
  (func, ...partialArgs) =>
  (...args) =>
    func(...partialArgs, ...args);
const greetFunc = (greeting, name) => greeting + " " + name + "!";

// ES06 170: tests
const greetHello = partial(greet, "Hello");
console.log(greetHello("John"));
