// Closure Function is a function that remembers and accesses variables from its outer (parent) function scope,
// even after the outer function has finished execution.

// function + its lexical environment = closure

// example
function outer() {
  let message = "Hello Rishu";

  function inner() {
    console.log(message);
  }

  return inner;
}

const myFunc = outer();
myFunc();
