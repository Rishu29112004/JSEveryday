//Q1. Find length of array without using .length
let arr = [1, 2, 3, 4, 5];
//map
let len=0
let arrRes=arr.map(()=>len++)
console.log(len)


//reduce
let count=arr.reduce((acc)=>acc+1,0)
console.log(count)


//for
let count1 = 0
for(let i=0; arr[i] !==undefined;i++){
    count1++
}
console.log(count1)

//for..of
let count2=0
for(let value of arr){
    count2++
}
console.log(count2)



// //Q2. Get last element of array
// //.length
// let arr1 = [5, 10, 15, 20];
// let arr1Res=arr1[arr1.length-1]
// console.log(arr1Res)

// let arr1Res1=arr1.pop()
// console.log(arr1Res1)

// //Q3. Check if element exists
// let arr2 = [2, 4, 6, 8];
// let target = 6;
// let target1=arr2.includes(6)
// console.log(target1)



// LEVEL 2 – LOGIC BASED
// Q1. Find maximum number
let nums = [3, 9, 1, 6, 8];
let numsMax=nums.reduce((a,b)=>a>b?a:b,0)
console.log(numsMax)

