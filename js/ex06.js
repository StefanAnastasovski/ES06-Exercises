/* #4 
  ES06 E06:
  Write a JavaScript program to target a given value in a nested JSON object,
  based on the given key.
*/

const findValueByKey = (obj, key) => {
  return key in obj
    ? obj[key]
    : Object.values(obj).reduce((acc, value) => {
        if (typeof value === "object") {
          return findValueByKey(value, key);
        } else {
          return acc;
        }
      }, "Not Found");
};

// ES06 E6: tests
const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};

const dog = {
  status: "success",
  message: "https://images.dog.ceo/breeds/african/n02116738_1105.jpg",
};

console.log(findValueByKey(data, "level3")); // some data
console.log(findValueByKey(data, "level4")); // Not Found
console.log(findValueByKey(dog, "message")); // https://....
