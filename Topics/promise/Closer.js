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

// var a=1
// let b=2
// const c=3

// if(true){
//     var a=5
// let b=10
// const c=15
// }

// console.log(a)
// console.log(b)
// console.log(c)

// const person2 = {
//   name: "Amit"
// }

// function sayHi() {
//   console.log("Hi " + this.name)
// }

// sayHi.call(person2)
// sayHi.apply(person2)

// const newFunc = sayHi.bind(person2)

// newFunc()



// function greet(age) {
//   console.log(this.name + " is " + age + " years old")
// }

// const user = { name: "Rishu" } 

// greet.call(user, 22)
// greet.apply(user, [22])
// const fn = greet.bind(user, 22)
// fn()



// console.log("1")

// setTimeout(() => {
//     console.log("2")
// }, 1000);

// console.log("3")

// console.log(b)
// let b=5

// function add (a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(add(5)(6)(4))

// const arr=[3,2,3]
// const add()

// const promise = new Promise((res, rej) => {
//   let success = true;
//   if (success) {
//     res("task completed");
//   } else {
//     rej("Something went wrong");
//   }
// });

// promise
//   .then((message) => {
//       console.log("Success", message)
//   })
//   .catch((message) => console.log("Error", message))

// const fetchData = async () => {
//   try {
//     const res = await promise;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();



// const greet =(name = "Rishu")=>{
//     console.log("Hello", name)
// }

// greet()
// greet("Rahul")



// const id = Symbol("id")

// const user = {
//   name: "Rishu",
//   [id]: 101
// }

// console.log(Object.keys(user))  
// ["name"]  (symbol key show nahi hoti)

// const number=Symbol("5")
// const number2=Symbol("5")
// console.log(number===number2)

// const user ={
//     name: "Rishu"
// }

// const id = Symbol("id")

// user[id]=101
// console.log(user[id])

// console.log(user.id)









//16.
// const original = {
//     name :"Rishu",
//     email:"rishu@gmail.com",
//     address:{
//         city:"Bangalore"
//     }
// }

// // const shallow={...original}

// // shallow.name="Ritik"
// // shallow.address.city="pune"
// // console.log(original.name)
// // console.log(original.address.city)


// // const deep = JSON.parse(JSON.stringify(original))
// const deep = structuredClone(original)
// deep.address.city="delhi"
// console.log(original.address.city)



(function(a,b){
    console.log("sum:",a+b)
})(5,5)