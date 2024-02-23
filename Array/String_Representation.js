/*There are two functions that return string representations of an array: join() and
toString(). Both functions return a string containing the elements of the array de‐
limited by commas*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["Kun", "Bao", "Ngan", "Tien", "Phong"];

// using join() to convert array to string
const stringnums = nums.join();
console.log(
  "Representation Array with Join():",
  stringnums,
  "type Of:",
  typeof stringnums
);

// using toString to convert array to string
const stringnumsWithToString = nums.toString();
console.log(
  "Representation Array with toString():",
  stringnumsWithToString,
  "type Of:",
  typeof stringnumsWithToString
);

//using concat to add 2 string to 1 string
const stringnumsWithConcat = nums.concat(names);
console.log(
  "Representation Array with Concat():",
  stringnumsWithConcat,
  "type Of:",
  typeof stringnums
);

const stringnumsWithConcat2 = names.concat(nums);
console.log(
  "Representation Array with Concat():",
  stringnumsWithConcat2,
  "type Of:",
  typeof stringnums
);

//using splice(startIndex, numberOfElementRemove) to cut the string
var itDiv = [
  "Mike",
  "Clayton",
  "Terrill",
  "Raymond",
  "Cynthia",
  "Danny",
  "Jennifer",
];
var newString = itDiv.splice(3, 3);
console.log("Cutting the string by slice()", newString);
