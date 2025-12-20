// Given two arrays, write a program to merge and sort them.
let a=[2,4,6,8,0]
let b=[1,3,5,7,9]
let newarr=a.concat(b).sort((a,b)=>a-b)
console.log(newarr)