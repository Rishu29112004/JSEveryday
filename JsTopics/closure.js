// A Closer is created when a function is able to remember its laxical scope
// even when function is defined outside that scope.

// How its work:-
// When a function is defined, the inner funtion remember the variable and parameter
// of outer function even the outer function is finished its execution.

// Why return inner?
// Returning inner allows us to use it outside of outer().
// Even after outer() finishes, inner still remembers the variables from outer.
// This is called a closure.

// Q1.
function outer(){
    const name="Rishu"

    function inner(){
        console.log(name)
    }
    return inner
}

const namefn=outer()
namefn()



// Q2.
function greet(){
    return function name(){
        console.log("hello")
    }
}

const greetfn=greet()
greetfn()



// Q3.
function age(){
    const age=25

    return function(){
        console.log(age)
    }
}

const agefn=age()
agefn()



// Q4.
function counter(){
    let count =0

    function increase(){
        count++
        console.log(count)
    }

    return increase
}

const counterfun=counter()
counterfun()
counterfun()
counterfun()



// Question 5: Predict the Output
// function createAdder(x) {
//     return function (y) {
//         console.log(x + y);
//     };
// }

// const add5 = createAdder(5);
// const add10 = createAdder(10);

// add5(3);
// add10(3);
// add5(10);

// A)

// 8
// 13
// 15

// B)

// 5
// 10
// 15

// C)

// 8
// 8
// 15

// D)

// Error



