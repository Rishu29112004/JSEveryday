// function outer(){
//     const name = "Rishu"

//     function inner (){
//         console.log(name)
//     }
//     return inner
// }

// const namefn= outer()
// namefn()

// function counter(){
//     let count = 1

//     return {
//         increment: function(){
//             console.log(++count)
//         },
//         decrement: function(){
//             console.log(--count)
//         }
//     }
// }

// const counterfn =counter()
// counterfn.increment()
// counterfn.decrement()


// console.log("Start")

// setTimeout(function callSt(){
//   console.log("Cb Timeout")
// }, 5000)

// Promise.resolve().then(() => console.log("Promise"))

// console.log("End")



var a=1
let b=2
const c=3

if(true){
    var a=5
let b=10
const c=15
}

console.log(a)
console.log(b)
console.log(c)