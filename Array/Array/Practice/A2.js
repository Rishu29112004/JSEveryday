// Write a function to reverse an array without using the built-in .reverse() method.

function reverse(a) {
    for (let i = a.length - 1; i >= 0; i--) {
        console.log(a[i])
    }
}
let a=[1,2,3,4,5,6]
reverse(a)
// console.log(reverse([1,2,3,4,5]))