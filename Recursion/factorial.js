// Recursion is a process in which a function calls itself again and again until a particular condition is satisfied.



// Q1. Basic Factorial
// Write a recursive function to calculate factorial of 5.

// Expected output: 120

// function factorial(n=5){
//     if(n===1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial())




// Q2. Factorial of 7
// Easy
// Write a function that accepts a number and returns its factorial.

// Example: factorial(7)

// Expected output: 5040


// function factorial(n){
//     if(n===1){
//         return 1
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(7))





// Q3. Factorial of Zero
// Important
// Write a recursive function that handles zero and one correctly.

// Example: factorial(0)

// Expected output: 1

// function factorial(n=0){
//     if(n<1){
//         return 1
//     }
//     return n * factorial(n-1)
// }
// console.log(factorial())




// Q4. Negative Number Validation
// Medium
// Write a recursive factorial function that:
// - Returns factorial for positive integers.
// - Returns 1 for zero.
// - Returns "Invalid Input" for negative numbers.
// Example: factorial(-5)

// Expected output: "Invalid Input"

// function factorial(n){
//     if(n<0 || !Number.isInteger(n) || n!=="number"){
//         return "Invalid Input"
//     }
//     if (n===0||n===1) {
//         return 1
//     } else {
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(-5))



// Q5. Print Factorial Steps
// Challenge
// Write a recursive function that calculates factorial and prints each multiplication step.

// Example: factorial(5)

// Expected output:
// 5 * 4 * 3 * 2 * 1 = 120

// let steps=""
// function factorial(n){
//     if(n===1){
//         steps += "1"
//         return 1
//     }
//     steps += n + " * "
//     return n * factorial(n-1)
// }
// let result = factorial(5)
// console.log(steps + " = " +result)