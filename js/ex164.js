/* #13
  ES06 164:
  Write a JavaScript program that will return the singular or plural form of the word based on the input number.
*/

const pluralize = (qty, word, plural = `${word}s`) => {
  if (+qty === 1) return word;
  else return typeof plural !== "object" ? plural : plural[word];
};

// // ES06 164: tests
console.log(pluralize(0, "apple")); // 'apples'
console.log(pluralize(1, "apple")); // 'apple'
console.log(pluralize(2, "apple")); // 'apples'
console.log(pluralize(2, "person", "people")); // 'people'

const PLURALS = {
  person: "people",
  radius: "radii",
};
console.log(pluralize(1, "person", PLURALS));
console.log(pluralize(2, "person", PLURALS));
console.log(pluralize(1, "radius", PLURALS));
console.log(pluralize(2, "radius", PLURALS));
