/*Iteration Function are a set of functions that apply a a function 
to each of element of an array, then return a value, a set of value, a new array. */

/*
    There are two types of iteration function:
      + Non-Array-Generating Iteration Function includes:
        - forEach()
        - every()
        - some()
        - reduce()
      + Array-Generating Iteration Function:
*/
/*================Non-Array-Generating Iteration Function====================*/
console.log("=======Non-Array-Generating Iteration Function=============");
console.log("====Example of forEach()====");
/*
    forEach() is Iteration function that apply a function to each element of an array
*/
var nums = [1, 2, 3, 4, 5, 6];
const sum = (number) => {
  console.log(number, number * number);
};
nums.forEach(sum);

console.log("====Example of every()====");
/*
    every() is Iteration function that apply Boolean function to each element, and return 
    true if the function return true for EVERY element in the array.
*/
var evenNums = [2, 4, 6, 8, 10];
const isEven = (number) => {
  return number % 2 === 0;
};

const even = evenNums.every(isEven);
if (even) {
  console.log("every number of array is even number:", even);
} else {
  console.log("some number of array is odd number:", even);
}

console.log("====Example of some()====");
/*
    some() is Iteration function that apply Boolean function to each element 
of an array and return true if at least one element of array return true, and return 
false if all element in array return false
*/

var oddNums = [1, 2, 4, 6, 8];
const isOdd = (number) => {
  return number % 2 !== 0;
};
const odd = oddNums.some(isOdd);
if (odd) {
  console.log("some element of array is odd", odd);
} else {
  console.log("all element of array is even");
}

console.log("====Example of some()====");
/*
The reduce() function applies a function to an accumulator and the successive elements
of an array until the end of the array is reached, yielding a single value.*/

function add(runningTotal, currentValue) {
  return runningTotal + currentValue;
}
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = nums.reduce(add);
console.log(total); // displays 55

// We can also use reduce() with strings to perform concatenation:
function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"

/*a reduceRight() function, which works similarly to re
duce(), only working from the righthand side of the array to the left, instead of from
left to right.*/
function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ["the ", "quick ", "brown ", "fox "];
var sentence = words.reduceRight(concat);
console.log(sentence); // displays "fox brown quick the"
