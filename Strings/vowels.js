// Q1. Count the total number of vowels in a string.
// const str = "javascript";
// let count=0
// let v=[]
// for(let i = 0 ; i<str.length ;i++){
//     if("aeiou".includes(str[i])){
//         count++
//         v += str[i]
//     }
// }
// console.log(count,v)
// Expected Output:
// 3
// (a, a, i)



// Q2. Count vowels without using built-in methods like filter().
// const str = "hello world";
// let count = 0
// let v=""
// for (let i=0; i<str.length; i++){
//    if("aeiou".includes(str[i])){
//      count++
//     v += str[i]+ " "
//    }
// }
// console.log(count)
// console.log(v)
// Expected Output:
// 3
// (e, o, o)

// Hint: Use for loop and if condition.



// Q3. Count vowels in uppercase and lowercase letters.
// const strr = "Hello JAVASCRIPT";
// const str= strr.toLocaleLowerCase()
// let count = 0
// let v=""
// for (let i=0; i<str.length; i++){
//    if("aeiou".includes(str[i])){
//      count++
//     v += str[i]+ " "
//    }
// }
// console.log(count)
// console.log(v)
// Expected Output:
// 5

// Hint: Use toLowerCase().



// Q4. Count each vowel separately (a, e, i, o, u).
// const str = "education";

// let count = {a:0,e:0,i:0,o:0,u:0}
// let v=""
// for (let i=0; i<str.length; i++){
//    if(count[str[i]] !== undefined){
//      count[str[i]]++
//     v += str[i]+ " "
//    }
// }
// console.log(count)
// console.log(v)

// // Expected Output:
// {
//   a: 1,
//   e: 1,
//   i: 1,
//   o: 1,
//   u: 1
// }



// Q5. Find which vowel occurs the most in a string.

const str = "programming education";

let count = {
  a: 0,
  e: 0,
  i: 0,
  o: 0,
  u: 0
};

// Step 1: Count each vowel
for (let i = 0; i < str.length; i++) {
  if (count[str[i]] !== undefined) {
    count[str[i]]++;
  }
}

// Step 2: Find maximum frequency
let max = 0;
let vowel = "";

for (let key in count) {
  if (count[key] > max) {
    max = count[key];
    vowel = key;
  }
}

console.log(`${vowel} (${max})`);
// Hint: Use an object to store vowel frequency.