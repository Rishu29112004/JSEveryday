
//1.Currying is a process in JavaScript where a function with multiple
// Arguments is transformed into a sequence of functions that each take a single argument.

//series of function that each take one argument at a time

//example f(a,b) into f(a)(b)

//normal way
function myFun(a,b,c){
    return a+b+c
}

let result = myFun(1,2,3)
console.log(result)
console.log(myFun(1,2,3))


//curring method
function first(a){
   return function second(b){
      return  function third(c){
            return a+b+c
        }
    }
}

let res=first(1)
let res2=res(2)
let res3=res2(3)
console.log(res3)

let resu=first(1)(2)(3)
console.log(resu)


function Base(value1){
  return function(value2){
    return value1*value2
  }
}

const ref = Base(2);

for(i=1; i<=10; i++){
    console.log(`2 * ${i} = ${ref(i)}`)
}


//real life use 
//if i own a cafe and i want to preset the discount rate and can reuse it for any product.

function discount(rate){
    return function (amount){
        return amount-amount*rate
    }
}

const fixDiscount = discount(0.1) //10%
console.log(fixDiscount(200))