// Q1. Find the index of the first even number
// const numbers = [11, 15, 22, 31, 40, 50];
// const numRes=numbers.findIndex(t=>t%2==0)
// console.log(numRes)
// Expected Output:
// 2


// Q2. Find the index of a student who scored more than 80
// const students = [
//   { name: "Rahul", marks: 65 },
//   { name: "Aman", marks: 75 },
//   { name: "Rishu", marks: 90 },
//   { name: "Ayush", marks: 85 }
// ];
// const stuRes=students.findIndex(t=>t.marks>80)
// console.log(stuRes)


// Q3. Find the index of an employee whose salary is greater than 50000
// const employees = [
//   { name: "Amit", salary: 30000 },
//   { name: "Rahul", salary: 45000 },
//   { name: "Karan", salary: 60000 },
//   { name: "Rohit", salary: 70000 }
// ];
// const empRes=employees.findIndex(t=>t.salary>50000)
// console.log(empRes)
// Expected Output:
// 2



// Q4. Find the index of a product with ID 103
// const products = [
//   { id: 101, name: "Laptop", price: 50000 },
//   { id: 102, name: "Mobile", price: 20000 },
//   { id: 103, name: "Tablet", price: 15000 },
//   { id: 104, name: "Watch", price: 5000 }
// ];
// const proRes=products.findIndex(t=>t.id==103)
// console.log(proRes)


// Q5. Find the index of the first user who is above 18 and active
const users = [
  { name: "Aman", age: 17, isActive: true },
  { name: "Rahul", age: 22, isActive: false },
  { name: "Rishu", age: 21, isActive: true },
  { name: "Karan", age: 25, isActive: true }
];
const usersRes=users.findIndex(t=>t.age>18 & t.isActive==true)
console.log(usersRes)