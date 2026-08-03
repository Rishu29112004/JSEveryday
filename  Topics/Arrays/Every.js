// Definition
// every() array method check karta hai ki array ke sabhi elements given condition satisfy karte hain ya nahi.

// Return Value
// true → Agar sab elements condition satisfy kare.
// false → Agar ek bhi element condition satisfy na kare.


// 1. Check if all numbers are positive

// const arr = [5, 10, 15, 20];
// const res= arr.every((t)=>t>=0);
// console.log(res)




// 2. Check if all students passed

// const marks = [45, 60, 78, 90];

// // Condition:
// // mark >= 35

// const res=marks.every((t)=>t>=35);
// console.log(res)



// 3. Check if all strings have length greater than 3
// const names = ["Rishu", "Rahul", "Aman", "Riya"];

// // Condition:
// // name.length > 3

// const res=names.every((t)=>t.length>3);
// console.log(res)



// 4. Check if all users are adults

// const users = [
//   { name: "Rishu", age: 22 },
//   { name: "Rahul", age: 25 },
//   { name: "Aman", age: 19 }
// ];

// // Condition:
// // age >= 18

// const res=users.every((t)=>t.age>=18)
// console.log(res)



// // 5. Check if all products are in stock
// const products = [
//   { name: "Laptop", inStock: true },
//   { name: "Mouse", inStock: true },
//   { name: "Keyboard", inStock: true }
// ];

// // Condition:
// // product.inStock === true

// const res=products.every((t)=>t.inStock===true)
// console.log(res)