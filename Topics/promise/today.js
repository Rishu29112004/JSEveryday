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

function fir(val){
    function sec(val2){
        return val*val2
    }
    return sec
}
const firValue=fir(5)
console.log(firValue(2))