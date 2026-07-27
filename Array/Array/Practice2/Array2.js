// Q1️⃣ Find the sum of all numbers in an array
let arr = [1, 2, 3, 4, 5];
// let sum=0
    // for (let i=0;i<arr.length;i++){
    //     sum +=arr[i]
    // }

//     arr.forEach((num)=>{
//         sum+=num
//     })
// console.log(sum)
let arrRess=arr.reduce((acc,curr)=>acc+curr,0)
console.log(arrRess)


// Q2️⃣ Find the largest number in an array
let arr2 = [10, 5, 20, 8];
let arr2Lar=arr2.reduce((a,b)=>a>b?a:b,0)
console.log(arr2Lar)

// Q3️⃣ Count how many elements are greater than 10
let arr3 = [5, 12, 8, 21, 3, 15];
let greater=0
for(let num of arr3){
    if(num>10){
        greater++
    }
}
console.log(greater)

// Q4️⃣ Reverse an array (without using .reverse())
let arr4 = [1, 2, 3, 4];
let rev=[]
for (let num of arr){
    rev.unshift(num)
}
console.log(rev)

// Q5️⃣ Remove duplicate values from an array
let arr5 = [1, 2, 2, 3, 4, 4, 5];
// let dub=[...new Set(arr5)]
// console.log(dub)
let arr5Res=[]
for(let num of arr5){
    if(!arr5Res.includes(num)){
        arr5Res.push(num)
    }
}
console.log(arr5Res)

// Q6️⃣ Create a new array with only even numbers
let arr6 = [1, 2, 3, 4, 5, 6];
let even=[]
let arr6Even=arr6.map((t)=>{
    if (t%2==0){
        even.push(t)
    }
})
console.log(even)

// Q7️⃣ Convert this array to uppercase
let names = ["ram", "shyam", "hari"];
let nameRes=names.map((t)=>t.toUpperCase())
console.log(nameRes)

// Q8️⃣ Find the first element greater than 50
let arr8 = [10, 25, 60, 40, 90];
arr8.sort()
let arr8Res=[]
for (let num of arr8){
    if(num>50){
        arr8Res.push(num)
    }
}
console.log(arr8Res[0])

// Q9️⃣ Count frequency of each element
let arr9 = ["apple", "banana", "apple", "orange", "banana", "apple"];

let freq = {};

for (let item of arr9) {
    if (freq[item]) {
        freq[item]++;
    } else {
        freq[item] = 1;
    }
}

console.log(freq);


// Q🔟 Check if all elements are positive numbers
let arr10 = [2, 5, 8, 10];
let r=arr10.every(num=>num>0)
console.log(r)

let arr11 = [2,4, 5, 8, 10];
let ri=arr10.every(num=>num>0)
console.log(r)
