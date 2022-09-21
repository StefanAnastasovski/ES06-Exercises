/* #5 
  ES06 E14:
  Write a JavaScript program to replace the names of multiple object keys
  with the values provided.
*/

const replaceObjectKeys = (obj, newKeys) =>
  Object.keys(obj).reduce(
    (acc, key) =>
      key in newKeys
        ? { ...acc, [newKeys[key]]: obj[key] }
        : { ...acc, [key]: obj[key] },
    {}
  );

// // ES06 14: tests
const obj = { name: "Bobo", job: "Programmer", shoeSize: 100 };
const newKeys = { name: "firstName", job: "Actor" };
console.log("Original Object");
console.log(obj);
console.log("-------------------------------------");
result = replaceObjectKeys(obj, newKeys);
console.log("Result");
console.log(result);
