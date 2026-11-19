// Q1. Capitalize the first letter of a single word
// const str = "javascript";
// const res=str[0].toUpperCase()+str.slice(1)
// console.log(res)
// Expected Output:
// Javascript


// Q2. Capitalize the first letter of each word in a sentence
// const str = "hello world javascript";
// const res=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
// console.log(res)
// Expected Output:
// Hello World Javascript

// Q3. Capitalize each word without changing the remaining letters
// const str = "hELLO wORLD";
// const res=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1)).join(" ")
// console.log(res)
// Expected Output:
// HELLO WORLD


// Q4. Capitalize the first letter of each word and convert the remaining letters to lowercase
// const str = "hELLO wORLD JAVASCRIPT";
// const res=str.split(" ").map(word=>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ")
// console.log(res)
// Expected Output:
// Hello World Javascript


// Q5. Capitalize the first letter of each word without using map()

// const str = "i love learning javascript";

// const words = str.split(" ");
// let res = "";

// for (let i = 0; i < words.length; i++) {
//   res += words[i][0].toUpperCase() + words[i].slice(1) + " ";
// }

// console.log(res.trim());

