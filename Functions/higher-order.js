// A Higher Order Function is a function that does one or both of these things:
// 1. Takes another function as an argument.
// 2. Returns another function.
// Simple meaning: A function that works with another function.


// Q1. Function as an Argument
// Create two functions:
// - greet() prints "Hello Rishu".
// - execute() accepts a function as an argument and calls it.
// Call execute(greet).

// Expected output:
// Hello Rishu

// function greet(name){
//     console.log("Hello "+name)
// }

// function execute(callback){
//     callback("Rishu")
// }

// execute(greet)




// Q2. Calculator Using Higher Order Function
// Create a function named calculate that:
// - Accepts two numbers.
// - Accepts another function as the third parameter.
// - Calls that function with the two numbers.
// Create another function named add that returns the sum.

// Call:
// calculate(10, 20, add);


// Expected output:
// 30

// function add(a,b){
//     return a+b
// }
// function calculate(a,b,third){
//     return third(a,b)
// }

// const res=calculate(10,20,add)
// console.log(res)





// Q3. Function Returning Another Function
// Create a function named multiplier that:
// - Accepts one number.
// - Returns another function.
// - The returned function accepts a second number and multiplies both numbers.
// Example:
// const double = multiplier(2);
// console.log(double(5));


// Expected output:
// 10

// function multiplier(a){
//     return function(b){
//         return a*b
//     }
// }

// const double=multiplier(2)
// console.log(double(5))







// Q4. Custom Higher Order Function
// Given:
// const numbers = [1, 2, 3, 4, 5];


// Create a function named processArray that:
// - Accepts an array.
// - Accepts a callback function.
// - Uses a loop to process every element.
// - Passes each element to the callback.
// Create a callback that prints the square of each number.

// Expected output:
// 1
// 4
// 9
// 16
// 25

// const numbers = [1, 2, 3, 4, 5];
// function processArray(arr,callback){
//             for(let data of arr){
//                 callback(data)
//     }
// }
// function square(num){
//     console.log(num*num)
// }
// processArray(numbers,square)




// Q5. Filter Using Higher Order Function
// Given:
// const numbers = [10, 15, 20, 25, 30, 35, 40];


// - Create a function named filterNumbers.
// - It should accept an array and a callback.
// - Return only the numbers that satisfy the callback condition.
// - Create a callback to check whether a number is even.
// Expected output:
// [10, 20, 30, 40]

// const numbers = [10, 15, 20, 25, 30, 35, 40];

// function filterNumbers(arr, callback) {
//     let result = [];

//     for (let data of arr) {
//         if (callback(data)) {
//             result.push(data);
//         }
//     }

//     return result;
// }

// function even(num) {
//     return num % 2 === 0;
// }

// const res = filterNumbers(numbers, even);

// console.log(res);