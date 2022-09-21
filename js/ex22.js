/* #11
  ES06 22:
  Write a JavaScript program to filter out the non-unique values in an array. 
*/

const getNonUniqueNumbers = (array) =>
  array.filter(
    (item, index) => array.indexOf(item) === array.indexOf(item, index)
  );

// // ES06 21: tests
console.log(getNonUniqueNumbers([1, 2, 2, 3, 4, 4, 5]));
console.log(getNonUniqueNumbers([1, 2, 3, 4]));
