// Q1. Reverse a string
// const str = "hello";

// let res="";
// for (let i= str.length-1;i>=0;i--){
//     res += str[i]
// }
// console.log(res)

// const res=str.split("").reverse().join("")
// console.log(res)
// Expected Output:
// "olleh"



// Q2. Reverse a string without using built-in methods
// const str = "javascript";

// let res= "";
// for (let i = str.length-1 ; i>=0 ; i--){
//     res += str[i]
// }
// console.log(res)
// Expected Output:
// "tpircsavaj"

// Hint: Use a for loop.



// Q3. Reverse each word in a sentence
// const str = "Hello World";

// const words= str.split("")
// let res=[]

// for( let i=0 ; i< words.length; i++){
//     let rev=[]
//     for (let j= words[i].length-1; j>=0; j--){
//         rev += words[i][j]
//     }
//     res.push(rev)
// }
// console.log(res.join(" "))
// const res= str.split(" ").map(t=>t.split("").reverse().join("")).join(" ")
// console.log(res)
// Expected Output:
// "olleH dlroW"

// Hint: Use split(), map(), reverse(), join().




// Q4. Check whether a string is a palindrome

// A palindrome reads the same forward and backward.
// const str = "madam";
// const res=str.split("").reverse().join("");
// if(res==str){
//     console.log("palindrome")
// }else{
//     console.log("not a palindrome")
// }
// Expected Output:
// true

// Example:
// "hello" → false


// Q5. Reverse the order of words in a sentence
// const str = "I love JavaScript";
// const res=str.split(" ").reverse().join(" ")
// console.log(res)
// Expected Output:
// "JavaScript love I"

// Hint: Use split(), reverse(), join().