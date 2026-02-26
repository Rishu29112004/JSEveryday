//Pure function is a function that-
// always returns the same output for the same input
// does not modify external variables
// has no side effects

// same input -> same output + no external changes.


// example
function add(a, b){
    return a + b;
}

console.log(add(2,3));
console.log(add(2,3));


// exmaple impure function
let total = 0;

function addToTotal(num){
    total += num;
    return total;
}

console.log(addToTotal(5));