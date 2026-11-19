// Q1. Find the longest word in a sentence
// const str = "I love learning JavaScript";
// let word=str.split(" ")
// let longest=""

// for (let i=0; i<word.length; i++){
//     if(word[i].length>longest.length){
//         longest=word[i]
//     }
// }
// console.log(longest)
// Expected Output:
// JavaScript



// Q2. Find the longest word without using sort()
// const str = "HTML CSS JavaScript React";
// const word=str.split(" ")
// let longest=""
// for (let i =0 ; i<word.length; i++){
//     if(word[i].length>longest.length){
//         longest=word[i]
//     }
// }
// console.log(longest)
// Expected Output:
// JavaScript

// Hint: Use for loop.



// Q3. Find the shortest word in a sentence
// const str = "I love learning JavaScript";
// const word=str.split(" ")
// let sort=word[0]
// for (let i=0; i<word.length; i++){
//     if(word[i].length<sort.length){
//         sort=word[i]
//     }
// }
// console.log(sort)
// Expected Output:
// I



// Q4. Find the longest word and its length
// const str = "I love programming";
// const word=str.split(" ")
// let longest=""
// for (let i=0; i<word.length; i++){
//     if(word[i].length>longest.length){
//         longest=word[i]
//     }
// }
// console.log(longest,longest.length)
// Expected Output:
// Word: programming
// Length: 11



// Q5. Find all words having the maximum length
const str = "I love code with Java";
const word=str.split(" ")
let maxLength=0
let max=[]
for(let i=0; i<word.length; i++){
    if(word[i].length>maxLength){
        maxLength=word[i].length
    }
}

for(let i=0; i<word.length; i++){
    if(word[i].length===maxLength){
        max.push(word[i])
    }
}
console.log(max)
// Expected Output:
// love
// code
// Java