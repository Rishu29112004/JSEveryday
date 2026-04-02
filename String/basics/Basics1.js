// 🟢 Beginner Level (Must Do First)

// 1.Reverse a string
// const str="Rishu"
// const rev=str.split("").reverse().join(" ")
// console.log(rev)

// const stri="Ritik"
// let reve=""

// for(let i=stri.length-1; i>=0; i--){
//     reve =reve+stri[i]
// }

// console.log(reve)



// 2.Check if a string is palindrome
// const word="mom"
// let fir=""

// for(let i=word.length-1; i>=0; i--){
//     fir += word[i]
// }

// if(word==fir){
//     console.log("This is palindrome")
// }else{
//     console.log("Not a palindrome")
// }


//3.Count number of vowels in a string
// const word="Rishu"
// let vol=0
// let count=0
// for (let i=0; i<word.length; i++){
//   if (
//     word[i] === "a" ||
//     word[i] === "e" ||
//     word[i] === "i" ||
//     word[i] === "o" ||
//     word[i] === "u"
//   ) {
//     vol ++;
//   }}
// console.log(vol)

// for(let char of word){
//     if("aeiou".includes(char.toLowerCase())){
//         count++
//     }
// }
// console.log(count)


//4.Convert first letter of each word to uppercase.
let str="rishu is the best"   

function change(str){
  let res=[];
  let words=str.split(" ");
  for(let word of words){
       console.log(word[0].toUpperCase()+ word.slice(1,word.length-1)+ word[word.length-1].toUpperCase())
      res.push(word[0].toUpperCase()+ word.slice(1,word.length-1)+ word[word.length-1].toUpperCase());
  }
  return res.join(" ");
}
console.log(change(str))



