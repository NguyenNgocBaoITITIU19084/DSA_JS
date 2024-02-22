console.log(
  "===============================Searching for a Value==============================="
);
const names = [
  "Kun",
  "Bao",
  "Ngan",
  "Tien",
  "Phong",
  "Kun",
  "Bao",
  "Ngan",
  "Tien",
  "Phong",
];
console.log("*****indexOf*****");
// indexOf will return the index of first value in array if it was founded and return -1 if it was not founded
const searchingWithIndexOf = (keyword) => {
  const index = names.indexOf(keyword);
  return index;
};
console.log("Index of keyword with index of is:", searchingWithIndexOf("Ngan"));
console.log(
  "Index of keyword with index of is:",
  searchingWithLastIndexOf("Ngannn")
);
console.log("*****lastIndexOf*****");
// indexOf will return the index of last value in array if it was founded and return -1 if it was not founded
const searchingWithLastIndexOf = (keyword) => {
  const index = names.lastIndexOf(keyword);
  return index;
};
console.log(
  "Index of keyword with index of is:",
  searchingWithLastIndexOf("Ngan")
);
console.log(
  "Index of keyword with index of is:",
  searchingWithLastIndexOf("Ngannn")
);
