/* #7
  ES06 07:
  Write a JavaScript program to converts a specified number to an array of digits.
*/

const convertNumberToArrayOfDigits = (specifiedNumber) => {
  return specifiedNumber
    .toString()
    .split("")
    .map((num) => {
      return +num;
    });
};

// ES06 07: tests
console.log(convertNumberToArrayOfDigits(123));
console.log(convertNumberToArrayOfDigits(1230));
