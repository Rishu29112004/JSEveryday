// Q1. Get All Values
// Print all values from the given object.
// const student = {
//     name: "Rahul",
//     age: 22,
//     course: "MCA",
//     city: "Chennai"
// };
// const val=Object.values(student)
// console.log(val)
// Expected Output:
// ["Rahul", 22, "MCA", "Chennai"]



// Q2. Calculate Total Marks
// Use Object.values() to calculate the total marks.
// const marks = {
//     Java: 80,
//     Python: 90,
//     JavaScript: 95,
//     DBMS: 85
// };
// const val=Object.values(marks)

// let total=0
// for(let i=0;i<val.length;i++){
//     total+=val[i]
// }
// console.log(total)
// Expected Output:
// 350



// Q3. Print Values Using Loop
// // Use Object.values() with a for...of loop to print each value separately.
// const product = {
//     name: "Laptop",
//     brand: "Apple",
//     price: 55000
// };
// const val=Object.values(product)
// for(let value of val){
//     console.log(value)
// }
// Expected Output:
// Laptop
// Apple
// 55000



// Q4. Find the Highest Value
// Find the highest salary using Object.values().
// const employees = {
//     Rahul: 25000,
//     Amit: 35000,
//     Rishu: 45000,
//     Priya: 40000
// };
// const val=Object.values(employees)
// let highest=0
// for(let v of val){
//     if(v>highest){
//         highest = v
//     }
// }
// console.log(highest)
// Expected Output:
// 45000



// Q5. Count Passing Students
// Use Object.values() and a loop to count students who scored 40 or above.
// const students = {
//     Rahul: 85,
//     Amit: 32,
//     Rishu: 75,
//     Priya: 28,
//     Aman: 60
// };
// const val=Object.values(students)
// let count=0
// for (let marks of val){
//     if(marks>=40){
//         count++
//     }
// }
// console.log(count)
// Expected Output:
// 3