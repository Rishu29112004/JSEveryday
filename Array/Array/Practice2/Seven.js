// // Write a program to find the missing number in a sequence of numbers from 1 to n.
let arr=[1,2,4,5]
let missingValue=[]
for(let i=0;i<arr.length-1; i++){
       if(arr[i+1] !== arr[i]+1){
          missingValue.push(arr[i]+1)
       }
}
console.log(missingValue)