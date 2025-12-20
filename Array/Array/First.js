// Write a program to find the largest and smallest elements in an array.

let arr = [1, 2, 3, 4, 5, 6];

//by maiking a function
let fun=(arr)=>{
let max=0
let min=0

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        max=arr[i]
    }
}
return {max,min}
}
console.log(fun([1,2,3,4,3,2,2,4,56]))

//by loop
// let max=0
// let min=0

// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
//     if(arr[i]<min){
//         max=arr[i]
//     }
// }

// console.log("Max:",max)
// console.log("Min",min)

