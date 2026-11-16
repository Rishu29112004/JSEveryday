// Q1. Calculate the sum of all numbers
// const numbers = [10, 20, 30, 40, 50];
// const numRes=numbers.reduce((a,b)=>a+b)
// console.log(numRes)


// Q2. Find the product of all numbers
// const numbers = [2, 3, 4, 5];
// const numRes=numbers.reduce((a,c)=>a*c)
// console.log(numRes)

// Q3. Find the maximum number in an array
// const numbers = [10, 45, 23, 89, 12, 67];
// const numRes=numbers.reduce((a,c)=>a>c? a : c)
// console.log(numRes)


// Q4. Calculate the total salary of all employees
// const employees = [
//   { name: "Rishu", salary: 25000 },
//   { name: "Ayush", salary: 30000 },
//   { name: "Rahul", salary: 20000 },
//   { name: "Amit", salary: 35000 }
// ];
// const empRes=employees.reduce((a,c)=>a+c.salary,0)
// console.log(empRes)


// Q5. Count the frequency of each element
const fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];
const fruitRes = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});

console.log(fruitRes);

