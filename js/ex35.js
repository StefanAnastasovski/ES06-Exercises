/* #12
  ES06 35:
  Write a JavaScript program to get an array of given n random integers in the specified range.
 */

const randomIntegerArrayInRange = (min, max, length = 1) => {
  return Array.from(
    { length: length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

// // ES06 35: tests
console.log(randomIntegerArrayInRange(1, 20, 10));
console.log(randomIntegerArrayInRange(-10, 10, 5));
