// Q1. Get All Key-Value Pairs
// Print all key-value pairs using Object.entries().
// const student = {
//     name: "Rahul",
//     age: 22,
//     course: "MCA"
// };

// const ent=Object.entries(student)
// console.log(ent)


// Q2. Print Keys and Values Using for...of
// Use Object.entries() with a for...of loop.
// const user = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi"
// };
// const data=Object.entries(user)
// for(let [key,value] of data){
//     console.log(`${key}: ${value}`)
// }
// Expected Output:
// name: Rishu
// age: 21
// city: Ranchi



// Q3. Find the Highest Salary
// Use Object.entries() to find the employee name and highest salary.
// const employees = {
//     Rahul: 25000,
//     Amit: 35000,
//     Rishu: 45000,
//     Priya: 40000
// };
// const data=Object.entries(employees)
// let name=""
// let highest=0
// for(let [key,value] of data){
//     if(value>highest){
//        highest=value
//        name=key
//     }
// }
// console.log(name,highest)
// Expected Output:
// Employee: Rishu
// Salary: 45000



// Q4. Filter Students Who Passed
// Use Object.entries() and a loop to print students who scored 40 or above.
// const students = {
//     Rahul: 85,
//     Amit: 32,
//     Rishu: 75,
//     Priya: 28,
//     Aman: 60
// };
// const data=Object.entries(students)

// for(let [key,value] of data){
//     if(value>=40){
//    console.log(`${key}:${value}`)
//     }
// }

// Expected Output:
// Rahul: 85
// Rishu: 75
// Aman: 60



