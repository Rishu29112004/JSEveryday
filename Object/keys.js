// Q1. Get All Keys
// Print all keys of the given object.
// const student = {
//     name: "Rahul",
//     age: 22,
//     course: "MCA",
//     city: "Chennai"
// };
// const obj=Object.keys(student)
// console.log(obj)
// Expected Output:
// ["name", "age", "course", "city"]

// Q2. Count Total Properties
// Find how many properties are present in the object using Object.keys().
// const user = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi",
//     country: "India"
// };
// const obj=Object.keys(user)
// console.log(obj.length)
// Expected Output:
// 4



// Q3. Print Keys Using Loop
// Use Object.keys() with a for loop to print each key separately.
// const car = {
//     brand: "BMW",
//     model: "X5",
//     price: 8000000
// };

// const obj=Object.keys(car)

// for(let i=0; i<obj.length; i++){
//     console.log(obj[i])
// }
// Expected Output:
// brand
// model
// price


// Q4. Check Whether a Key Exists
// Check whether the object contains the key "email" using Object.keys().
// const user = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi"
// };
// const obj=Object.keys(user)
// if(obj.includes("email")){
//     console.log("true")
// }else{
//     console.log("false")
// }
// Expected Output:
// false




// Q5. Find the Key with the Highest Value
// Find which subject has the highest marks using Object.keys() and a loop.
// const marks = {
//     Java: 85,
//     Python: 92,
//     JavaScript: 95,
//     DBMS: 80
// };
// const obj=Object.keys(marks)
// let max=0
// let subject=""
// for(let i=0;i<obj.length;i++){
//     if(marks[obj[i]]>max){
//         max=marks[obj[i]]
//         subject=obj[i]
//     }
// }
// console.log(max)
// console.log(subject)
// Expected Output:
// Subject: JavaScript
// Marks: 95