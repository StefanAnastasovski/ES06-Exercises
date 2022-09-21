/* #23
  ES06 216:
  Write a JavaScript program to get all indexes of val in an array. If val never occurs, returns [].
*/

const indexOfAll = (array, value) => {
  return array.reduce((acc, item, index) => {
    return item === value ? [...acc, index] : acc;
  }, []);
  //   const filteredItems = [];
  //   array.forEach((item, index) => {
  //     item === value ? filteredItems.push(index) : null;
  //   });
  //   return filteredItems;
};

// ES06 216: tests
console.log(indexOfAll([1, 2, 3, 1, 2, 3], 1));
console.log(indexOfAll([1, 2, 3], 4));
