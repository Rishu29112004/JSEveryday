//Q1.

// function outer(){
//     const name="Rishu"
//     function inner(){
//         console.log(name)
//     }
//     return inner
// }

// const res=outer()
// res()


//Q2.

// console.log("start")
// setTimeout(function callString(){
//     console.log("cb output")
// },1000)

// Promise.resolve().then(()=>console.log("Promise"))

// console.log("end")


//Q5.
// const person2={
//     name:"Rishu"
// }

// function sayHi(age){
//     console.log("hi " + this.name +" "+age)
// }

// sayHi.call(person2,22)
// sayHi.apply(person2,[45])
// const res=sayHi.bind(person2,35)
// res()


//Q7.

console.log(a)
console.log(b)
console.log(c)
var a=10
let b=20
const c=30
