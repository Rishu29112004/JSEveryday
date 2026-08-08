// Definition
// reduce() is used to reduce an array into a single value by executing a callback function on each element.

// 1. Find Sum of All Numbers
// const numbers = [10, 20, 30, 40, 50];
// const res= numbers.reduce((acc,curr)=>acc+curr, 0)
// console.log(res)


// 2. Find Product of All Numbers
// const numbers = [2, 3, 4, 5];
// const res= numbers.reduce((a,b)=>a*b,1)
// console.log(res)


// 3. Count Occurrences of Elements
// const fruits = ["apple", "banana", "apple", "orange", "apple"," "];

// const res=fruits.reduce((a,b)=>{
//     a[b]=(a[b] || 0)+1
//     return a
// },{})
// console.log(res)


// // 4. Find Total Price of Products
// const cart = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 1000 },
//   { name: "Keyboard", price: 2000 }
// ];

// const res = cart.reduce((acc, curr) => acc + curr.price, 0);

// console.log(res); // 53000

// 5. Group Users by Age
// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 20 },
//   { name: "Aman", age: 22 },
//   { name: "Priya", age: 20 }
// ];

// const res=users.reduce((a,b)=>{
//     (a[b.age]=a[b.age] || []).push(b)
//     return a
// },{})
// console.log(res)

// 5. Group Users by Age
// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 20 },
//   { name: "Aman", age: 22 },
//   { name: "Priya", age: 20 }
// ];

// const res=users.reduce((a,b)=>{
//     (a[b.age]=a[b.age] || []).push(b)
//     return a
// },{})
// console.log(res)
