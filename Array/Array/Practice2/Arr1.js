//1.Create an array of 5 numbers and print the first and last element.
let arr=[1,2,3,4,5]
console.log("first",arr[0],"last:",arr[arr.length-1])

// Add a new element to the end of an array using push().
let arr2=[1,2,3,4,5,6]
arr2.push(7)
console.log(arr2)

// Remove the last element from an array using pop().
let arr3=[1,2,3,4,5,6,7,8]
arr3.pop()
console.log(arr3)

// Add an element at the beginning using unshift().
let arr4=[1,2,3,4,5,6,7,8]
arr4.unshift(0)
console.log(arr4)

// Remove the first element using shift().
let arr5=[1,2,3,4,5,6,7,8]
arr5.shift()
console.log(arr5)

// Find the length of an array.
let arr6=[1,2,3,4,5,6,7,8]
console.log(arr6.length)

// Check whether a variable is an array.
let arr7=[1,2,3,4,5,6,7,8]
console.log(Array.isArray(arr7))


// Loop through an array using a for loop.
let arr8=[1,2,3,4,5,6,7,8]
for(let i=0; i<arr8.length; i++){
    arr8[i]=arr8[i]+1
    console.log(arr8[i])
}

// Loop through an array using for...of.
let arr9=[1,2,3,4,5,6,7,8]
for(let i of arr9){
    console.log(i)
}

// Convert an array to a string.
let arr10=[1,2,3,4,5,6,7,8]
let arr10Str=arr10.toString()
console.log(arr10Str)


// Find the sum of all numbers in an array.
let arr11=[1,2,3,4,5,6,7,8]
let arr11Sum=0
for(let i of arr11){
    arr11Sum+=i
}
console.log(arr11Sum)

// Find the largest number in an array.
let arr12=[1,2,3,4,5,6,7,8]
let arr12Len=arr12[0]
for(let i of arr12){
    if(arr12[i]>arr12Len){
        arr12Len=arr12[i]
    }
}
console.log(arr12Len)

// Find the smallest number in an array.
let arr13=[1,2,3,4,5,6,7,8]
let arr13Small=arr12[0]
for(let i of arr13){
    if (arr13[i]<arr13Small){
        arr13Small=arr13[i]
    }
}
console.log(arr13Small)


// Reverse an array without using reverse().
let arr14=[1,2,3,4,5,6,7,8]
// let arr14rev=[]
for(let i=arr14.length-1;i>0;i--){
  console.log(i)
}

// Count how many even numbers are in an array.
