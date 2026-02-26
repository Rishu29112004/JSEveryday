//Function: A function is a reusable block of code that performs a specific task.
//we can define a function once and can call (use) it multiple times whenever needed.


//Hoisting: Hoisting is a behavior where variable and function declarations are moved (hoisted)
// to the top of their scope during the compilation phase, before the code is executed.
//Only declarations are hoisted, not initializations.


//Function Declaration is a way to define a function using the function keyword. 
//function declaration are hoisted.

//syntax
function functionName(){
    //function body
    return value
}

//example
function fullName(first){
    return first + "Yadav"
}

console.log(fullName("Rishu"))