// Q1. Find duplicate characters in a string
// const str = "hellooooo";
// let res={}
// for (let i= 0; i<str.length; i++){
//     if(res[str[i]] !== undefined){
//          res[str[i]]++
//     }else{
//         res[str[i]]=1
//     }
// }

// for (let key in res){
//     if(res[key]>1){
//         console.log(key)
//     }
// }
// Expected Output:
// l



// Q2. Find all duplicate characters in a string
// const str = "programming";
// let res={}
// for(let i=0; i<str.length; i++){
//     if(res[str[i]] !== undefined){
//         res[str[i]]++
//     }else{
//         res[str[i]]=1
//     }
// }

// for (let key in res){
//     if(res[key]>1){
//         console.log(key)
//     }
// }
// Expected Output:
// r, g, m



// Q3. Count how many times each character appears
// const str = "banana";
// let res={}
// for (let i=0; i<str.length; i++){
//     if(res[str[i]] !== undefined){
//         res[str[i]]++
//     }else{
//         res[str[i]]=1
//     }
// }
// console.log(res)
// Expected Output:
// b: 1
// a: 3
// n: 2



// Q4. Find duplicate characters and their frequency
// const str = "javascript";
// const res={}
// for (let i=0; i<str.length; i++){
//     if(res[str[i]] !== undefined){
//         res[str[i]]++
//     }else{
//         res[str[i]]=1
//     }
// }

// for(let key in res){
//     if(res[key]>1){
//         console.log(`${key}: ${res[key]}`)
//     }
// }

// Expected Output:
// a: 2
// s: 2



// Q5. Find the character that occurs the most in a string
const str = "success";
const res={}
let max=0;
let result=""
for(let i=0; i<str.length; i++){
    if(res[str[i]]!==undefined){
        res[str[i]]++
    }else{
        res[str[i]]=1
    }
}
for (let key in res){
    if(res[key]>max){
        max = res[key]
        result=key
    }
  
}

  console.log(result + ":" +max)
// Expected Output:
// s: 3