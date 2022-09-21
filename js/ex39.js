/* #6 
  ES06 39:
  Write a JavaScript program to remove the key-value pairs corresponding
  to the given keys from an object.
*/

const removePairsFromObject = (obj, array) => {
  return Object.keys(obj)
    .filter((key) => !array.includes(key))
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: obj[key],
      };
    }, {});
};

// ES06 39: tests
console.log(removePairsFromObject({ a: 1, b: "2", c: 3 }, ["b"]));
console.log(removePairsFromObject({ a: 1, b: 2, c: 3 }, ["c"]));
console.log(removePairsFromObject({ a: 1, b: 2, c: 3 }, ["b", "c"]));
console.log(removePairsFromObject({ a: 1, b: 2, c: 3 }, ["a", "b"]));
