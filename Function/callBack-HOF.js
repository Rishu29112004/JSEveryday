// 1.callback function - a callback function is a function that is passed as an argument to another function and is executed later.

function first(second){
    console.log("Bablu", second)
}

function second (callback){
    const name="kumar"
    callback(name)
}

second(first)




//callback-hell- callback hell is a situation in js where multiple callback functions are nested inside one another,
// making the code difficult to read, understand, and maintain.
// it usually occurs when handling multiple dependenct asynchronous operations.

function setp1(callBack){
    console.log("step1")
    callBack()
}

function step2(callBack){
    console.log("step2")
    callBack()
}

function step3(){
    console.log("step3")
}

setp1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all")
        })
    })
})

setp1()
.then(()=>step2())
.then(()=>step3())




//2.Higher-order function- hoc is a function that accepts another function as an argument or returns a function as output.
function n(rishu){
   const res=rishu()
   console.log(res)
}

function rishu(){
    const name="Rishu"
    return name
}

n(rishu)
