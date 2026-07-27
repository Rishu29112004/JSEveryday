// Q1️⃣ Find array length (without .length)
let arr = [10, 20, 30, 40];
let num=0
for(let i of arr){
    num++
}
console.log(num)

// Q2️⃣ Get last element
let arr2 = [5, 10, 15, 20];
let arr2res=arr2[arr2.length-1]
console.log(arr2res)

// Q3️⃣ Sum of all numbers
let nums = [1, 2, 3, 4, 5];
let sumres=nums.reduce((a,b)=>a+b)
console.log(sumres)

// Q4️⃣ Find largest number
let nums4 = [45, 12, 78, 34];
let num4res=nums4.reduce((a,b)=>a>b?a:b,0)
console.log(num4res)

// Q5️⃣ Count even numbers
let nums5 = [1, 2, 3, 4, 6, 8];
for(let i of nums5){
    if(i%2===0){
        console.log(`even`,i)
    }
}

// Q6️⃣ Remove duplicates
let nums6 = [1, 2, 2, 3, 4, 4, 5];
let nums6res=[...new Set(nums6)]
console.log(nums6res)

// Q7️⃣ Reverse an array
let arr7 = [1, 2, 3, 4];
// let arr7res=arr7.reduce((a,b)=>b,a)
for(let i=arr7.length ; i>0;i--){
    console.log(i)
}
// console.log(arr7res)


const arr9=[1,1,2,3,4,4,5,5,6];

function removeDublicate(arr){
    let  newArray=[];
    for(let i=0;i<arr.length;i++){
        if(!newArray.includes(arr[i])){
            newArray.push(arr[i]);
        }
    }
    return newArray
}

console.log("check with the value",removeDublicate(arr9))


