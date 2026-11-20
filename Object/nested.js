// Q1. Basic Nested Object
// const user = {
//     name: "Rishu",
//     profile: {
//         age: 22,
//         city: "Ranchi"
//     }
// };
// console.log(user.name,user.profile.age,user.profile.city)

// - Print the user's name.
// - Print the user's age.
// - Print the user's city.



// Q2. Three-Level Nested Object
// const employee = {
//     name: "Amit",
//     company: {
//         name: "Google",
//         location: {
//             city: "Bangalore",
//             country: "India"
//         }
//     }
// };

// console.log(employee.company.name,employee.company.location.city, employee.company.location.country)
// - Print company name.
// - Print city.
// - Print country.


// Q3. Nested Object with Array
// const student = {
//     name: "Rahul",
//     subjects: {
//         semester1: ["Java", "DBMS", "DSA"],
//         semester2: ["React", "Node", "MongoDB"]
//     }
// };

// console.log(student.subjects.semester1[0],student.subjects.semester2[2],student.subjects.semester1.length)

// - Print the first subject of semester 1.
// - Print the third subject of semester 2.
// - Print the total number of subjects in semester 1.




// Q4. Nested Array of Objects
// const users = {
//     students: [
//         { name: "Rahul", age: 22 },
//         { name: "Amit", age: 23 },
//         { name: "Priya", age: 21 }
//     ]
// };
// console.log(users.students[0].name)
// console.log(users.students[1].age)
// for (let data of users.students){
//     console.log(data.name)
// }
// - Print the name of the first student.
// - Print the age of the second student.
// - Print all student names using a loop.


// Q5. Complex Nested Object
// const company = {
//     name: "Tech Solutions",
//     departments: {
//         frontend: {
//             manager: "Rahul",
//             employees: ["Amit", "Priya", "Rohan"]
//         },
//         backend: {
//             manager: "Karan",
//             employees: ["Neha", "Vikas"]
//         }
//     }
// };

// console.log(company.departments.frontend.manager)
// console.log(company.departments.frontend.employees[1])
// console.log(company.departments.backend.manager)
// for(let data of company.departments.backend.employees){
//     console.log(data)
// }
// console.log(company.departments.frontend.employees.length+company.departments.backend.employees.length)
// - Print the frontend manager's name.
// - Print the second frontend employee.
// - Print the backend manager's name.
// - Print all backend employees using a loop.
// - Count the total employees in both departments.