// Defination:
// sort() array ke elements ko sort karta hai.


// Question 1: Sort Users by Age
// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Aman", age: 18 },
//   { name: "Rahul", age: 25 }
// ];

// const res= users.sort((a,b)=>a.age-b.age)
// console.log(res)



// Question 2: Sort Products by Price (High → Low)
// const products = [
//   { name: "Laptop", price: 50000 },
//   { name: "Mouse", price: 500 },
//   { name: "Phone", price: 30000 }
// ];

// const res=products.sort((a,b)=>b.price-a.price)
// console.log(res)


// Question 3: Sort Names by Length
// const names = ["Rahul", "A", "Rishu", "Aman"];
// const res=names.sort((a,b)=>a.length-b.length)
// console.log(res)


// Question 4: Sort Students by Marks
// const students = [
//   { name: "A", marks: 78 },
//   { name: "B", marks: 95 },
//   { name: "C", marks: 60 }
// ];

// const res=students.sort((a,b)=>a.marks-b.marks)
// console.log(res)


// Question 5: Sort Array and Find Top 3 Highest Numbers
// const arr = [45, 12, 89, 34, 100, 67, 78];
// const res=arr.sort((a,b)=>b-a)
// const finRes=res.slice(0,3)
// console.log(finRes)





// What is the output?

// const arr = [10, 5, 100, 25];

// arr.sort();

// console.log(arr);

// Output:

// [10, 100, 25, 5]

// Why?

// Because sort() by default strings ki tarah compare karta hai, numbers ki tarah nahi.

// Correct way:

// arr.sort((a, b) => a - b);

//