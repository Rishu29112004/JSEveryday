// Q1. Flatten a 2D array into a 1D array
// const numbers = [1, 2, [3, 4], 5, 6];
// const numRes=numbers.flat()
// console.log(numRes)
// Expected Output:
// [1, 2, 3, 4, 5, 6]


// Q2. Flatten a nested array containing 2 levels
// const numbers = [1, [2, 3], [4, [5, 6]], 7];
// const numRes=numbers.flat(2)
// console.log(numRes)
// Expected Output:
// [1, 2, 3, 4, [5, 6], 7]


// Q3. Flatten a deeply nested array completely
// const numbers = [1, [2, [3, [4, 5]]], 6];
// const numRes=numbers.flat(Infinity)
// console.log(numRes)
// Expected Output:
// [1, 2, 3, 4, 5, 6]


// Q4. Flatten an array of student marks
// const marks = [
//   [80, 90],
//   [75, 85],
//   [95, 88]
// ];
// const markRes=marks.flat(1)
// console.log(markRes)
// Expected Output:
// [80, 90, 75, 85, 95, 88]


// Q5. Flatten a deeply nested array with mixed values
// const data = [
//   10,
//   [20, 30],
//   [40, [50, 60]],
//   [[70, 80]]
// ];
// const dataRes=data.flat(Infinity)
// console.log(dataRes)
// Expected Output:
// [10, 20, 30, 40, 50, 60, 70, 80]