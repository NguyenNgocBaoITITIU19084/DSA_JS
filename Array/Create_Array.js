//  There are 4 ways to create array in JS
const firstExample = []; // empty array
const secondExample = [1, 2, 3, 4];
const thirdExample = new Array(); // creating an empty array
const fourExample = new Array(1, 2, 3, 4, 5); // [1,2,3,4,5]
const fifthExample = new Array(10); // number of elements in arrays

console.log("example creating array:", firstExample);
console.log("example creating array:", secondExample);
console.log("example creating array:", thirdExample);
console.log("example creating array:", fourExample);
console.log("example creating array:", fifthExample);

// Creating Array from String
console.log(
  "===============================Creating Array from String==============================="
);
var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (let index = 0; index < words.length; index++) {
  console.log(`word[${index}]: ${words[index]}`);
}

console.log(
  "===============================Aggregate Array Operations==============================="
);
console.log("*****SHALLOW COPPY*****");
var nums = [];
for (var i = 0; i < 100; ++i) {
  nums[i] = i + 1;
}
var samenums = nums; // This method assign the reference of the nums to the samenums, it called "shallow copy"
nums[0] = 400;
console.log("samenums[0]:", samenums[0]);
console.log("nums[0]:", nums[0]);

console.log("*****DEEP COPY*****");
function deep_copy(copyArr, emptyArr) {
  for (let index = 0; index < copyArr.length; index++) {
    emptyArr[index] = copyArr[index];
  }
}

//create array wth 100 numbers

var numbers = [];
var samenumbers = [];
for (let index = 0; index < 100; index++) {
  numbers[index] = index + 1;
}
deep_copy(numbers, samenumbers);
numbers[0] = 100;
console.log("samenumbers[0]:", samenumbers[0]);
console.log("numbers[0]:", numbers[0]);
