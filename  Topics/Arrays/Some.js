// Definition
// some() checks whether at least one element in the array satisfies the given condition.


// 1. Check If Any User Is Adult
// const users = [
//   { name: "Rahul", age: 16 },
//   { name: "Rishu", age: 22 },
//   { name: "Aman", age: 17 }
// ];

// const res=users.some((t)=>t.age>=18)
// console.log(res)


// 2. Check If Any Product Is Expensive
// const products = [
//   { name: "Pen", price: 20 },
//   { name: "Book", price: 150 },
//   { name: "Laptop", price: 50000 }
// ];

// const res=products.some((t)=>t.price>=1000)
// console.log(res)


// 3. Check If Any Student Failed
// const students = [
//   { name: "Priya", marks: 72 },
//   { name: "Aman", marks: 25 },
//   { name: "Rahul", marks: 91 }
// ];

// const res=students.some((t)=>t.marks<35)
// console.log(res)


// 4. Check If Any Number Is Negative
// const numbers = [10, 20, -5, 40, 50];
// const res=numbers.some((t)=>t<0)
// console.log(res)

// 5. Check If Any Email Is Gmail
// const emails = [
//   "abc@yahoo.com",
//   "xyz@hotmail.com",
//   "rishu@gmail.com"
// ];

// const res= emails.some((t)=>t.includes("@gmail.com"))
// console.log(res)