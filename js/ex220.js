/* #24
  ES06 220:
    Write a JavaScript program to get the native type of a value. Returns lowercased constructor name of value,
    "undefined" or "null" if value is undefined or null.
*/

const getNativeType = (value) => {
  if (value !== undefined && value !== null)
    return value.constructor.name.toLowerCase();
  return value === null ? null : undefined;
};

// ES06 220: tests
console.log(getNativeType(new Set([1, 2, 3])));
