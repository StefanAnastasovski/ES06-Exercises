/* #8
  ES06 10:
  Write a JavaScript program to extract out the values at the specified indexes from a specified array.
*/

const extractAtIndex = (array, extractIndexes) => {
  return extractIndexes.map((extractIndex) => {
    array.indexOf(extractIndex) !== "-1";
    return array[extractIndex];
  });
};

// ES06 10: tests
const arra1 = ["a", "b", "c", "d", "e", "f"];
console.log(extractAtIndex(arra1, [1, 3]));
const arra2 = [1, 2, 3, 4, 5, 6, 7];
console.log(extractAtIndex(arra2, [4]));
