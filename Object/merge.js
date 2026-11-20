// Q1. Basic Object Merging
// Merge both objects using the spread operator.
// const user = {
//     name: "Rishu",
//     age: 21
// };

// const details = {
//     city: "Ranchi",
//     country: "India"
// };

// const res={...user,...details}
// console.log(res)



// Q2. Merge Three Objects
// Merge all three objects into one object.
// const personal = {
//     name: "Rahul",
//     age: 22
// };

// const education = {
//     course: "MCA",
//     college: "SRM"
// };

// const address = {
//     city: "Chennai",
//     state: "Tamil Nadu"
// };
// const res={...personal,...education,...address}
// console.log(res)



// Q3. Handle Duplicate Keys
// Merge both objects. Notice that both have the same age property.
// const obj1 = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi"
// };

// const obj2 = {
//     age: 22,
//     country: "India"
// };

// const res={...obj1,...obj2}
// console.log(res)


// Q4. Merge Using Object.assign()
// Solve this question using Object.assign() instead of the spread operator.
// const student = {
//     name: "Aman",
//     age: 23
// };

// const marks = {
//     Java: 85,
//     Python: 90
// };

// const res=Object.assign({},student,marks)
// console.log(res)


// Q5. Merge and Update an Object
// Merge the two objects, but update the existing user's city and age using the second object.
// const user = {
//     name: "Rishu",
//     age: 21,
//     city: "Ranchi"
// };

// const update = {
//     age: 22,
//     city: "Chennai",
//     course: "MCA"
// };

// const res= {...user,...update}
// console.log(res)