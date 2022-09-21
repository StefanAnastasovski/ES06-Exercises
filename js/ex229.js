/* #25
  ES06 229:
  Write a JavaScript program to convert a string from camelcase.
*/

const convertCamelCaseToString = (string, separator = "_") =>
  string
    .replace(/([a-z\d])([A-Z])/g, "$1" + separator + "$2")
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1" + separator + "$2")
    .toLowerCase();

// // ES06 229: tests
console.log(convertCamelCaseToString("someDatabaseFieldName", " "));
console.log(convertCamelCaseToString("someLabelThatNeedsToBeCamelized", "-"));
console.log(convertCamelCaseToString("someJavascriptProperty", "_"));
