/*Mutator function is the function that allow to modify the content of an array*/

// ===========Adding an element to array by mutator function============
var nums = [2, 3, 4];
// adding to the end of array
nums.push(5, 6);
console.log("after adding to the end of array by push():", nums);
// adding to benginning of an array
nums.unshift(1);
console.log("after adding to the beginning of array by unshift():", nums);
// remove an element from end of array
nums.pop();
console.log("after remove an element to the end of array by pop():", nums);
// remove and element from the beginning of array
nums.shift();
console.log(
  "after remove an element to the beginning of array by shift():",
  nums
);

// =============Adding an element to array===========
var nums2 = [2, 3, 4, 5, 6];
const addToEnd = (number, arr) => {
  const Arrlength = arr.length;
  arr[Arrlength] = number;
  console.log("addToEnd", arr);
};
addToEnd(7, nums2);

const addToBengin = (number, arr) => {
  const arrLength = arr.length;
  for (let index = arrLength; index >= 0; index--) {
    arr[index] = arr[index - 1];
  }
  arr[0] = number;
  console.log("addToBenginning:", arr);
};
addToBengin(1, nums2);

const removeFromBeginning = (arr) => {
  const arrLength = arr.length;
  for (let index = 0; index < arrLength; ++index) {
    arr[index] = arr[index + 1];
  }
  console.log("removeFromBeginning", arr);
};
removeFromBeginning(nums2);

nums3 = [1, 2, 3, 4];
const removeFromEnd = (arr) => {
  const arrLength = arr.length;
  for (let index = arrLength - 1; index > 0; --index) {
    arr[index] = arr[index - 1];
  }
  arr[0] = undefined;
  console.log("removeFromEnd", arr);
};
removeFromEnd(nums3);
