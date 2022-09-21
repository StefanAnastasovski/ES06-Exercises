/* #26
  ES06 244:
  Write a JavaScript program to get the distance between two given points.
*/

const returnDifferenceBetweenTwoArrays = (arrayA, arrayB) => {
  // const setB = new Set(arrayB); // {i1 : i1, i2: i2,...}
  return arrayA.filter((itemA) => !new Set(arrayB).has(itemA));
};

// ES06 244: tests
console.log(returnDifferenceBetweenTwoArrays([1, 2, 3], [1, 2, 4]));
console.log(returnDifferenceBetweenTwoArrays([1, 2, 4], [1, 2, 3]));
