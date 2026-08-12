// Definition:
// map() executes a function on every element of an array and returns a new array with the transformed values.



// 1. Double the Numbers

// const arr = [1, 2, 3, 4, 5];
// const res= arr.map((t)=>t*2)
// console.log(res)

// 2. Convert Names to Uppercase
// const names = ["rishu", "rahul", "aman"];
// const res= names.map((t)=>t.toUpperCase())
// console.log(res)

// 3. Add "Mr." Before Every Name
// const names = ["Rishu", "Rahul", "Aman"];
// const res= names.map((t)=>"Mr. "+t)
// console.log(res)

// 4. Get Length of Each String

// const fruits = ["apple", "banana", "mango"];
// const res= fruits.map((t)=>t.length)
// console.log(res)

// 5. Extract User Names

// const users = [
//   { id: 1, name: "Rishu" },
//   { id: 2, name: "Rahul" },
//   { id: 3, name: "Aman" }
// ];

// const res=users.map((t)=>t.name)
// console.log(res)

// 6. Add 18% GST to Prices

// const prices = [100, 200, 300];
// const res= prices.map((t)=>t+t*18/100)
// console.log(res)

// 7. Convert Numbers to Objects

// const nums = [1, 2, 3, 4];
// const res=nums.map((t)=>({value:t}))
// console.log(res)

// 8. Create User IDs

// const users = ["Rishu", "Rahul", "Aman"];
// const res = users.map((t, index) => ({
//   id: index+1,
//   name: t,
// }));
// console.log(res);

// const res2=users.map((t,index)=>({id:index,name:t}))
// console.log(res2)


// 9. Capitalize First Letter

// const names = ["rishu", "rahul", "aman"];
// const res=names.map((t)=>t.charAt(0).toUpperCase()+t.slice(1))
// console.log(res)


// 10. Get Full Names

// const users = [
//   { firstName: "Rishu", lastName: "Kumar" },
//   { firstName: "Rahul", lastName: "Sharma" },
//   { firstName: "Aman", lastName: "Singh" }
// ];

// const res=users.map((t)=>t.firstName +" "+t.lastName)
// console.log(res)


// 11. Add Status to Every User

// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 16 },
//   { name: "Aman", age: 25 }
// ];

// const res=users.map((t)=>({...t,status:t.age>=18?"Adult":"Minor"}))
// console.log(res)


// 11. Add Status to Every User

// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 16 },
//   { name: "Aman", age: 25 }
// ];

// const res=users.map((t)=>({...t,status:t.age>=18?"Adult":"Minor"}))
// console.log(res)