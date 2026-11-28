// Fibonacci is a series of numbers where the next number is the sum of the previous two numbers.


// Q1. Basic Fibonacci
// Write a recursive function to find the Fibonacci number at position 5.

// Example: fibonacci(5)

// Expected output: 5


// function fibonacci(n){
//     if(n===0){
//         return 0
//     }
//     if(n===1){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(5))




// Q2. Fibonacci at Position 7
// Easy
// Write a function that accepts n and returns the Fibonacci number.

// Example: fibonacci(7)

// Expected output: 13

// function fibonacci(n){
//     if(n===0){
//         return 0
//     }
//     if(n===1){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci (n-2)
// }
// console.log(fibonacci(7))



// Q3. Print Fibonacci Series
// Medium
// Write a recursive function to print the first 7 Fibonacci numbers.

// Expected output:
// 0 1 1 2 3 5 8


// function fibonacci(n){
//     if(n===0){
//         return 0
//     }
//     if(n===1){
//         return 1
//     }
//     return fibonacci(n-1)+fibonacci(n-2)
// }

// function printSeries(n){
//     if (n===7){
//         return
//     }
//     console.log(fibonacci(n))
//     printSeries (n+1)
// }
// printSeries(0)



// Q4. Input Validation
// Medium
// Write a recursive Fibonacci function that:
// - Returns "Invalid Input" for negative numbers.
// - Returns "Invalid Input" for decimal numbers.
// - Returns "Invalid Input" for non-number values.
// - Returns the Fibonacci number for valid non-negative integers.
// Example: fibonacci(-5)

// Expected output: "Invalid Input"


// function fibonacci(n){
//         if(n<0 || !Number.isInteger(n) || typeof n!="number"){
//             return "Invalid Input"
//         }
//         if(n===0){
//              return 0
//         }
//         if(n===1){
//             return 1
//         }
//         return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(-5))




// Q5. Print Fibonacci Steps
// Challenge
// Write a recursive function that calculates Fibonacci and prints the calculation steps.

// Example: fibonacci(5)

// Expected output:
// fibonacci(5)
// = fibonacci(4) + fibonacci(3)
// = 3 + 2
// = 5

function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = fibonacci(n - 1);
    let b = fibonacci(n - 2);

    if (n === 5) {
        console.log(`fibonacci(${n})`);
        console.log(`= fibonacci(${n-1}) + fibonacci(${n-2})`);
        console.log(`= ${a} + ${b}`);
        console.log(`= ${a+b}`);
    }

    return a + b;
}

fibonacci(5);