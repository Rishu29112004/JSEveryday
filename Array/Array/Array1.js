// Q1️⃣ Find length of array without using .length
let arr = [1, 2, 3, 4, 5]
console.log(arr.length)

// Q2️⃣ Find the largest number in an array\
let nums = [10, 5, 20, 8];
let numsLar=nums.reduce((a,b)=>a>b?a:b,0)
console.log(numsLar)

// Q3️⃣ Find the smallest number in an array
let nums3 = [10, 5, 20, 8];
let nums3Sm=nums3.reduce((a,b)=>b<a?b:a)
console.log(nums3Sm)

// Q4️⃣ Remove duplicate elements
let nums4 = [1, 2, 2, 3, 3, 4];

let nums4r=nums4.reduce((acc,curr)=>{
    if(!acc.includes(curr)){
        acc.push(curr)
    }
    return acc
},[])
console.log(nums4r)

const nums4res=[...new Set(nums4)]
console.log(nums4res)

// Q5️⃣ Reverse an array without using .reverse()
let arr5 = [1, 2, 3, 4];
// arr5.reverse()
// console.log(arr5)
for(let i=arr5.length-1;i>=0;i--){
    console.log(arr5[i])
}

// Q6️⃣ Sum all numbers in an array
let nums6 = [10, 20, 30];
let nums6res=nums6.reduce((a,b)=>a+b,0)
console.log(nums6res)

// Q7️⃣ Get only even numbers
let nums7 = [1, 2, 3, 4, 5, 6];
let nums7res=nums7.filter((t)=>t%2==0)
console.log(nums7res)

// Q8️⃣ Find second largest number
let nums8 = [10, 20, 5, 40, 30];
let num8res=nums8.sort((a,b)=>b-a)
let f=num8res[1]
console.log(f)

// Q9️⃣ Check if array is sorted
let arr9 = [1, 2, 3, 4];
let isSorted = true;

for (let i = 0; i < arr9.length - 1; i++) {
  if (arr9[i] > arr9[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);

// Q🔟 Count frequency of elements
let arr10 = ["a", "b", "a", "c", "b", "a"];
let freq = {};

for (let item of arr10) {
  if (freq[item]) {
    freq[item]++;
  } else {
    freq[item] = 1;
  }
}

console.log(freq);



