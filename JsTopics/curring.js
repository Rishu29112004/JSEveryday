// Curring is a technique where a function with multiple arguments is transformed into a sequence of 
// function where each takes only one agruments.

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

console.log(add (6)(5)(4))
