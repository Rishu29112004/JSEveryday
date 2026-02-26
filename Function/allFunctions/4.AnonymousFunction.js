//Anonymous Function is function without a name. these functions are usually used when the function is assigned to a variable,
// used as a callback, or passed as an argument to another function.

//the term anonymous means "without identity/name"


//syntax

// function() {
//     //function body
// }.  this throw an error because js need a refrence to call the function

const name = function (){
    //code
}

// example
const fullName = function (){
    console.log("Rishu Yadav")
}

fullName()