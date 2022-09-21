/* #29
  ES06 263:
  Write a JavaScript program to capitalize the first letter of a string.
*/

const capitalizeFirstLetter = ([first, ...rest]) => {
  return first.toUpperCase() + rest.join("").toLowerCase();
};

// ES06 263: tests
console.log(capitalizeFirstLetter("fooBar"));
console.log(capitalizeFirstLetter("footBarkoDSdqeasdqwgs"));
