//In JavaScript, functions are first-class citizens. That means functions are treated like any other value. You can:

// Assign them to variables

// Pass them as arguments to other functions

// Return them from functions

// Store them in arrays or objects



// 1.function as variables- you can assign a function to a variable just like a number or String.
 function greet(){
    console.log("Hello")
 }

 const say= greet
 say() 


 //2.passing functions as arguments- you can pass functions to other functions as arguments:

function firstname(secName){
    console.log("Rishu, "+ secName)
}

function secondname(callBack){
    let sn="yadav"
    callBack(sn)
}

secondname(firstname)



//3.returning functions from functios- a function can return another function.
function multiple(x){
    return function num(y){
        return x * y
    }
}
let fnum=multiple(5)
console.log(fnum(2))


//4.assigning functions to variables- this is similar to the first point but emphasizes ananymous functios.
const ad=function (a,b){
    return a+b
}
console.log(ad(3,4))


//5.storing functions in data structures.

const men =()=> console.log("Mohan")
const women =()=> console.log("Mohini")
const child=()=> console.log("monku")

const family=[men,women,child]

family[0]()
family[1]()
family[2]()