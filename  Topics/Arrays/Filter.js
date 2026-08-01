// Definition:
// filter() checks each element against a condition and returns a new array containing only the elements that satisfy that condition.

// 1. Get Even Numbers
// const numbers = [12, 7, 5, 20, 33, 18, 9];
// const res= numbers.filter((t)=>t%2==0)
// console.log(res)


// 2. Filter Adults
// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 17 },
//   { name: "Aman", age: 25 },
//   { name: "Priya", age: 16 }
// ];

// const res= users.filter((t)=>(t.age>=18))
// console.log(res)


// 3. Filter Products Above ₹1000
// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 800 },
//   { name: "Keyboard", price: 1500 },
//   { name: "Pen", price: 50 }
// ];

// const res=products.filter((t)=>t.price>=1000)
// console.log(res)


// 4. Filter Words Longer Than 5 Characters
// const words = ["apple", "banana", "cat", "elephant", "dog", "orange"];
// const res= words.filter((t)=>t.length>5)
// console.log(res)



// 5. Filter Active Users
// const users = [
//   { id: 1, name: "Rishu", isActive: true },
//   { id: 2, name: "Rahul", isActive: false },
//   { id: 3, name: "Aman", isActive: true },
//   { id: 4, name: "Priya", isActive: false }
// ];

// const res=users.filter((t)=>t.isActive==true)
// console.log(res)


// 6.Filter students who scored more than 70 marks:

// const students = [
//   { name: "Rishu", marks: 85 },
//   { name: "Rahul", marks: 60 },
//   { name: "Aman", marks: 92 },
//   { name: "Priya", marks: 70 }
// ];

// const res=students.filter((t)=>t.marks>70)
// console.log(res)