/*  #2
  ES06 E04:
  Write a JavaScript program to convert a comma-separated values (CSV)
  string to a 2D array of objects. The first row of the string is used
  as the title row.
*/
const convertCsvToJson = (csv, delimiter) => {
  if (!delimiter) delimiter = ",";
  const titles = csv.split("\n")[0].split(delimiter);
  return csv
    .split("\n")
    .splice(1)
    .map((row) => {
      let obj = {};
      row.split(delimiter).forEach((value, valueIndex) => {
        obj[titles[valueIndex]] = row.split(delimiter)[valueIndex];
      });
      return obj;
    });
};

// // ES06 E04: tests
console.log(convertCsvToJson("col1,col2\na,b\nc,d")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
console.log(convertCsvToJson("col1;col2\na;b\nc;d", ";")); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
