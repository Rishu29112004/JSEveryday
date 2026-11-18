// Q1. Check whether a string is a palindrome.
// const str = "madam";
// const res =str.split("").reverse().join("")
// if(str===res){
//     console.log(true)
// }else{
//     console.log(false)
// }
// Expected Output:
// true



// Q2. Check palindrome without using reverse().
// const str = "level";
// let res = ""

// for ( let i= str.length-1; i>=0 ; i--){
//     res += str[i]
// }
// if(str===res){
//     console.log(true)
// }else{
//     console.log(false)
// }
// Expected Output:
// true

// Hint: Use a for loop.




// Q3. Check whether a number is a palindrome.
// const num = 121;
// const r=num.toString()
// const res=r.split("").reverse().join("");
// if(r===res){
//     console.log(true)
// }else{
//     console.log(false)
// }
// Expected Output:
// true

// Example: 123 → false



// Q4. Check palindrome ignoring uppercase and lowercase.
// const str = "Madam";
// const r=str.toLocaleLowerCase()
// const res =r.split("").reverse().join("")
// if(r===res){
//     console.log(true)
// }else{
//     console.log(false)
// }
// Expected Output:
// true

// Example: "RaceCar" → true



// Q5. Check whether a sentence is a palindrome (ignore spaces).
// const str = "nurses run";
// const strr=str.replaceAll(" ","")
// const res=strr.split("").reverse().join("")
// if(strr===res){
//     console.log(true)
// }else{
//     console.log(false)
// }
// Expected Output:
// true

// Example: "hello world" → false