//First-class citizens means functions in js can be -
// 1.store functions in variables.
// 2.pass functions as arguments.
// 3.return functions from functions.
// 4.store functions in data structures.


//Higher Order Function (HOF) is a function that either-
// taked another function as an arguments, or
// returns a function as its result 


// syntax 
// function hof(callBack){
//     callBack()
// }

// example

function greet(callback){
  console.log("Hellow")
  callback()
}

function name (){
    console.log("Rishu")
}

greet(name)




