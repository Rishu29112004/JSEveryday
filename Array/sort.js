// Q1. Sort numbers in ascending order
// const numbers = [45, 12, 89, 23, 5, 67];
// const numRes=numbers.sort((a,b)=>a-b)
// console.log(numRes)
// Expected Output:
// [5, 12, 23, 45, 67, 89]


// Q2. Sort numbers in descending order
// const numbers = [10, 50, 20, 80, 30, 60];
// const numRes=numbers.sort((a,b)=>b-a)
// console.log(numRes)

// Expected Output:
// [80, 60, 50, 30, 20, 10]



// Q3. Sort students according to their marks (highest to lowest)
// const students = [
//   { name: "Rahul", marks: 75 },
//   { name: "Aman", marks: 90 },
//   { name: "Rishu", marks: 85 },
//   { name: "Ayush", marks: 60 }
// ];

// const stuRes=students.sort((a,b)=>b.marks-a.marks)
// console.log(stuRes)


// Q4. Sort employees according to salary (lowest to highest)
// const employees = [
//   { name: "Amit", salary: 50000 },
//   { name: "Rahul", salary: 30000 },
//   { name: "Karan", salary: 70000 },
//   { name: "Rohit", salary: 40000 }
// ];

// const empRes=employees.sort((a,b)=>a.salary-b.salary)
// console.log(empRes)


// Q5. Sort names alphabetically (A to Z)
const names = ["Rishu", "Aman", "Karan", "Rahul", "Ayush"];
const nameRes=names.sort((a,b)=>a.localeCompare(b))
console.log(nameRes)
// Expected Output:
// ["Aman", "Ayush", "Karan", "Rahul", "Rishu"]