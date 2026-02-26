//Infinite Curring is an advanced js concept where a function keeps returning another function and continues to accept arguments indefinitely, until a termination condition is met.

// in simple - call function again and again like chaining until you stop.


// example
function add(a){
    return function(b){
        if(b){
            return add(a+b)
        }
        return a
    }
}

console.log(add(2)(4)(5)())

// arrow example
const ad = c=> d=> d? ad(c+d) :c
console.log(ad(3)(5)(6)(7)())


// example
function multiply(a){
    return function(b){
        if(b){
            return multiply(a*b)
        }
        return a
    }
}

console.log(multiply(4)(5)())