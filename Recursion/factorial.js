// Recursion is a process in which a function calls itself again and again until a particular condition is satisfied.



// Q1. Basic Factorial
// Write a recursive function to calculate factorial of 5.

// Expected output: 120

function factorial(n){
    if(n===1){
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5))