// Partial Application is a technique where a function is pre-filled with some argumnets and returns
// a new function waiting for the remaining arguments.


// in simple - fix some argumnets first-> provide remaining later


// example 
function add(a, b, c){
    return a + b + c;
}

const partialAdd = add.bind(null, 2);

console.log(partialAdd(3,4));


// example
function add(a, b, c){
    return a + b + c;
}

const partialAddd = add.bind(null, 2);

console.log(partialAddd(3,4));