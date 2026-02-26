//Function declartion is a way of defining a function by assigning it to a variable.
//unlike function declarations, function expressions can be anonymous (without a name)
//this function are not hoisted.

//syntax
const variableName = function(parameters){
    //function body
}


//example
const fullName = function(first){
    return first + "yadav"
}

console.log(fullName("Rishu"))