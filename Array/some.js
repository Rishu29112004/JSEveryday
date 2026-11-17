// Q1. Check if an array contains any even number
// const numbers = [11, 15, 21, 22, 31, 45];
// const numRes=numbers.some(t=>t%2==0)
// console.log(numRes)


// Q2. Check if any student scored more than 90
// const students = [
//   { name: "Rahul", marks: 65 },
//   { name: "Aman", marks: 75 },
//   { name: "Rishu", marks: 95 },
//   { name: "Ayush", marks: 85 }
// ];
// const stuRes=students.some(t=>t.marks>90)
// console.log(stuRes)


// Q3. Check if any employee earns more than 1 lakh
// const employees = [
//   { name: "Amit", salary: 30000 },
//   { name: "Rahul", salary: 45000 },
//   { name: "Karan", salary: 120000 },
//   { name: "Rohit", salary: 70000 }
// ];

// const empRes=employees.some(t=>t.salary>100000)
// console.log(empRes)
// Expected Output:
// true


// Q4. Check if any product is out of stock
// const products = [
//   { name: "Laptop", stock: 10 },
//   { name: "Mobile", stock: 5 },
//   { name: "Tablet", stock: 0 },
//   { name: "Watch", stock: 8 }
// ];
// const prodRes=products.some(t=>t.stock==0)
// console.log(prodRes)


// Q5. Check if any user is above 18 and active
// const users = [
//   { name: "Aman", age: 17, isActive: true },
//   { name: "Rahul", age: 22, isActive: false },
//   { name: "Rishu", age: 21, isActive: true },
//   { name: "Karan", age: 16, isActive: true }
// ];
// const userRes=users.some(t=>t.age>18 & t.isActive==true)
// console.log(userRes)