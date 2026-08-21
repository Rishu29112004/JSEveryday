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



// 5. Check if all products are in stock
// const products = [
//   { name: "Laptop", inStock: true },
//   { name: "Mouse", inStock: true },
//   { name: "Keyboard", inStock: true }
// ];

// // Condition:
// // product.inStock === true

// const res=products.every((t)=>t.inStock===true)
// console.log(res)

// Q6. Check whether all numbers are positive.

// let arr = [10, 20, 30, 40, 50];

// let arrAns=arr.every((t)=>t>0)
// console.log(arrAns)


// Q7.Check whether all numbers are even.
// let arr = [2, 4, 6, 8, 10];
// let arrRes=arr.every((t)=>t%2==0)
// console.log(arrRes)



// Q8. Check whether all students have passed (marks ≥ 40).
// let marks = [55, 67, 42, 80, 39];
// let marksRes=marks.every((t)=>t>=40)
// console.log(marksRes)


// Q9. Check whether all numbers are greater than 10.

// let arr = [15, 20, 25, 30, 5];
// const arrRes=arr.every((t)=>t>10)
// console.log(arrRes)

// Q10. Check whether all names have more than 3 characters.

// let names = ["Rishu", "Aman", "Rahul", "Raj"];
// let namesRes=names.every((t)=>t.length>3)
// console.log(namesRes)
