// Q1. Basic Object Destructuring
// Extract name and age from the object and print them.
// const user = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi"
// };
// const {name,age}=user
// console.log(name)
// console.log(age)




// Q2. Destructuring with Default Values
// Extract name and country. If country is missing, assign "India" as the default value.
// const user = {
//     name: "Rishu",
//     age: 21
// };

// const {name,country="India"}=user
// console.log(name)
// console.log(country)



// Q3. Rename Variables
// Extract name into a variable called userName and age into userAge.
// const student = {
//     name: "Rahul",
//     age: 22,
//     course: "MCA"
// };

// const {name:userName,age:userAge}=student
// console.log(userName)
// console.log(userAge)



// Q4. Nested Object Destructuring
// Extract city and pincode from the nested address object.
// const user = {
//     name: "Rishu",
//     address: {
//         city: "Ranchi",
//         pincode: 834001
//     }
// };

// const {address:{city,pincode}}=user
// console.log(city,pincode)



// Q5. Destructuring in Function Parameters
// Use object destructuring directly inside the function parameter.
// const product = {
//     name: "Laptop",
//     price: 55000,
//     brand: "Apple"
// };

// function showProduct({name,price}) {
//     console.log(name);
//     console.log(price);
// }

// showProduct(product);

// Expected Output:
// Laptop
// 55000