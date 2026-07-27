// // function hello(call) {
// // //   console.log("hello");
// //   call();
// // }

// // function name() {
// //   console.log("Mohit");
// // }


// // hello(name);\\

// function name(){

// }

// var func= function(){
   
// }


// const fun=()=>{
//   console.log("kjg")
// }

// ()=>{}

// function second(first){
//    first
// }
// function first(){
//    console.log("first")
// }

// second(first())

// // iffe function- immediately invoked function expression 

// (function func(){
//     console.log("iffe")
// })()

//function currying 

// function fir(val){
//     function sec(val2){
//         return val*val2
//     }
//     return sec
// }
// const firValue=fir(5)
// console.log(firValue(2))


// function add(a){
//     return function second(b){
//         return function third(c){
//             return a+b+c
//         }
//     }
// }

// const fun= add(5)(5)(5)
// console.log(fun)

//1.case
// const a=5
// const b=10

// console.log(b)

// //2.case
// function add(){
//   let  user={name:"rishu"}
//     console.log("hehe")
// }
// add()
// console.log(user)


// function createCounter() {
//     let count = 0;   // private variable

//     return function () {
//         count++;
//         return count;
//     }
// }

// const counter = createCounter();

// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// console.log(counter.count)

// console.log(counter())


// {
//   let a = 10;
//   let b = 20;

//   console.log(a + b);
// }


// function createPromise() {
//   return new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//       resolve("Promise Resolved");
//     } else {
//       reject("Promise Rejected");
//     }
//   });
// }

// async function run() {
//   try {
//     const result = await createPromise();
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// }

// run();


// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");

// Promise.all([p1, p2, p3]).then((result) => {
//   console.log(result);
// });

const user = {
  name: "Rishu",
  showName: () => {
    console.log(this.name);
  }
};

user.showName();