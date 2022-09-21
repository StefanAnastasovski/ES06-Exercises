/*  #1
  ES06 E01: Write a JavaScript program to compare two objects
  to determine if the first one contains equivalent property 
  values to the second one.
*/

const areObjectsEqual = (fObject, sObject) =>
  Object.keys(fObject).every(
    (key) => sObject.hasOwnProperty(key) && sObject[key] === fObject[key]
  );

// ES06 E01: tests
console.log(
  areObjectsEqual(
    { firstName: "Stefan", age: 26, isStudent: false },
    { firstName: "Stefan", age: 26, isStudent: true }
  )
); // false
console.log(
  areObjectsEqual(
    { firstName: "Stefan", age: 26, isStudent: false },
    { firstName: "Stefan", age: 26, isStudent: false }
  )
); // true
console.log(
  areObjectsEqual(
    { firstName: "Stefan", age: 26 },
    { firstName: "Stefan", age: 25 }
  )
); // false
