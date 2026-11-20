// Q1. Basic Deep Clone
// const student = {
//     name: "Rahul",
//     age: 22
// };
// const copy=structuredClone(student)
// console.log(student==copy)
// Create a deep clone named copy.



// Q3. Nested Array
// const data = {
//     subjects: ["JavaScript", "React", "Node"],
//     marks: {
//         JavaScript: 85,
//         React: 90
//     }
// };
// const copy=structuredClone(data)
// copy.subjects[0]="HTML"
// copy.marks.React=95
// console.log(copy)

// Create a deep clone and change:
// - First subject to "HTML".
// - React marks to 95.



// Q4. Check Independence
// const employee = {
//     name: "Amit",
//     skills: {
//         frontend: ["HTML", "CSS", "JS"]
//     }
// };
// const copy = structuredClone(employee)
// copy.skills.frontend.push("React")
// console.log(copy)
// console.log(employee==copy)

// Create a deep clone. Add "React" to the copied skills array.

// Check whether the original array changes.


// Q5. Deep Clone and Update
// const product = {
//     name: "Laptop",
//     price: 50000,
//     details: {
//         brand: "HP",
//         specifications: {
//             ram: "8GB",
//             storage: "512GB"
//         }
//     }
// };
// const copy=structuredClone(product)
// copy.price=60000
// copy.details.specifications.ram="16GB"
// copy.details.specifications.storage="1TB"
// console.log(copy)
// console.log(product)
// Create a deep clone and update:
// - Price to 60000.
// - RAM to "16GB".
// - Storage to "1TB".