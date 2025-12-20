// Write a function to find the second-largest number in an array.
let arr=[10, 20, 4, 45, 99]
let asc=arr.sort((a,b)=>a-b).reverse()
console.log(asc[1])