/* #28
  ES06 257:
  Write a JavaScript program to convert a 2D array to a comma-separated values (CSV) string.
*/

const arrayToCSV = (array, delimiter = ",") =>
  array
    .map((innerArray) =>
      innerArray.map((innerItem) => `"${innerItem}"`).join(delimiter)
    )
    .join("\n");

// ES06 257: tests
console.log(
  arrayToCSV([
    ["a", "b"],
    ["c", "d"],
  ])
);
console.log(
  arrayToCSV(
    [
      ["a", "b"],
      ["c", "d"],
    ],
    ";"
  )
);
