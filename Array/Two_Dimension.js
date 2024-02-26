/*Create tow dimension of array*/

Array.matrix = function (numsRows, numsCols, intial) {
  var arr = [];
  for (let row = 0; row < numsRows; row++) {
    var colums = [];
    for (let cols = 0; cols < numsCols; cols++) {
      colums[cols] = intial;
    }
    arr[row] = colums;
  }
  return arr;
};

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]); // displays 0
var names = Array.matrix(3, 3, "");
names[1][2] = "Joe";
console.log(names[1][2]); // display "Joe"

/*=====Processing Two-Dimensional Array Elements=====*/
/*
   There are two fundamental patterns used to process the elements of a two-dimensional
array:
    + accessing array elements by column
    + accessing array elements by row
*/
console.log("=====Processing Two-Dimensional Array Elements=====");
var grades = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

const totalAndAverageGrades = (studentGrade, currentStudent) => {
  var total = 0;
  var average = 0.0;
  numsGrade = studentGrade.length;
  for (let grade = 0; grade < numsGrade; grade++) {
    total += studentGrade[grade];
  }
  average = total / numsGrade;
  return console.log(
    `student[${currentStudent}], total: ${total}, average: ${average}`
  );
};
grades.forEach(totalAndAverageGrades);

/*accessing by colums*/
console.log("*accessing by col*");
for (let row = 0; row < grades.length; row++) {
  for (let col = 0; col < grades[row].length; col++) {
    console.log(grades[row][col]);
  }
}

/*accessing by row*/
console.log("*accessing by row*");
for (let row = 0; row < grades.length; row++) {
  for (let col = 0; col < grades[row].length; col++) {
    console.log(grades[row][col]);
  }
}

console.log("*accessing by row====*");
var grades2 = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
  [91, 94, 89],
];
for (var col = 0; col < grades2.length; ++col) {
  for (var row = 0; row < grades2[col].length; ++row) {
    console.log(grades2[row][col]);
  }
}
