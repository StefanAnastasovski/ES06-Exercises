/* #22
  ES06 212:
  Write a JavaScript program to create a n-dimensional array with given value.
*/

const createNDimensionalArray = (value, ...args) =>
  args.length === 0
    ? [value]
    : Array.from({ length: args[0] }).map(() =>
        createNDimensionalArray(value, ...args.slice(1))
      );

// ES06 212: tests
console.log(createNDimensionalArray(1, 3));
console.log(createNDimensionalArray(5, 2, 2, 2));
