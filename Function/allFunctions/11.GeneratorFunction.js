//Generator function is a special function that can pause and resume execution.

// it does not run completely at once.
// it produces multiple values one at a time using yield.

// syntax
// function* funcitonName(){
//     yield value1
//     yield value2
// }

// * after function indicates generator function.


// example
function* simpleGenerator(){
    yield "First value"
    yield "Second value"
    yield "Third value"
}

const gen= simpleGenerator()

console.log(gen.next().value)


// example
function* snacks(){
    yield "chips"
    yield "biscuits"
    yield "juice"
}                         //generator -> give values one by one using yield

const shop = snacks()

console.log(shop.next().value)
