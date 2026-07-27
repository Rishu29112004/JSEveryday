// Write a function that takes an array of numbers and returns the sum of even numbers.
function sum (arr){
    let res = arr.filter((a) => a % 2 === 0).reduce((a, b) => a + b, 0)
    return res
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(sum(arr))