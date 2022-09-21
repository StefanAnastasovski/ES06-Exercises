/* #3
  ES06 E05:
  Write a JavaScript program to convert an array of objects to a 
  comma-separated values (CSV) string that contains
  only the columns specified.
*/

const convertArrayToCsv = (array, columns, delimiter) => {
  if (!delimiter) delimiter = ",";

  return [
    [...columns],
    array.map((row) =>
      columns
        .reduce(
          (acc, currentValue) =>
            row.hasOwnProperty(currentValue)
              ? [...acc, row[currentValue]]
              : [...acc, '""'],
          []
        )
        .join("\n")
    ),
  ].join("\n");
};

// // ES06 E05: tests
console.log(
  convertArrayToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"]
  )
);
console.log(
  convertArrayToCsv(
    [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }],
    ["x", "y"],
    ";"
  )
);
