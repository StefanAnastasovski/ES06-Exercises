/* #20
  ES06 201:
  Write a JavaScript program to check whether the first numeric argument is divisible by the second one.
*/

const isDivisible = (dividend, divisor) => dividend % divisor === 0;

// ES06 201: tests
console.log(isDivisible(6, 3));
console.log(isDivisible(5, 3));
console.log(isDivisible(100, 10));
console.log(isDivisible(0, 3));
