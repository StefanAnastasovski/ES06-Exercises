/* #9
  ES06 17:
  Write a JavaScript program to split values of two given arrays into two 
  groups. If an element in filter is truthy, the corresponding element in 
  the collection belongs to the first group; otherwise, it belongs to the 
  second group. 
*/

const splitArrayInGroups = (array, filterArray) => {
  const leftGroup = [];
  const rightGroup = [];
  filterArray.forEach((isTruthy, index) => {
    isTruthy ? leftGroup.push(array[index]) : rightGroup.push(array[index]);
  });

  return [leftGroup, rightGroup];
};

// ES06 17: tests
console.log(splitArrayInGroups([1, 2, 3, 4], [true, true, false, true]));
console.log(splitArrayInGroups([1, 2, 3, 4], [true, true, true, true]));
console.log(splitArrayInGroups([1, 2, 3, 4], [false, false, false, false]));
