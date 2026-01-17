//Promise- funtion mai ane wala result.

//Three state of promise
// 1.Pending- abhi result nai aya 
// 2.Fulfilled(Resolved)- kaam successful
// 3.Rejected - error aa gaya

// basic syntax and simple use -----------------------------
const promise = new Promise((resolve,reject)=> {
    let success = false

    if(success){
        resolve("Kaam ho gaya")
    }
    else{
        reject("Error aa gaya")
    }
})

// console.log(promise)

promise
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log(error)
})



//example ------------------------------------------------
function createOrder (cart){
    return new Promise((resolve , reject)=>{
        if(cart.length === 0){
            reject("Cart empty hai")
        }
        else{
            resolve("Order create successfully")
        }
    })
}

createOrder(["jeans","shirt"])
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))


//promise chaining(multiple async kaam)------------------
function proceedToPayment(order){
    return new Promise ((resolve,reject)=>{
        if(order){
            resolve("Paymnet successful")
        }
        else{
            reject("Payment failed")
        }
    })
}


createOrder(["pant"])
.then((order)=>{
    return proceedToPayment(order)
})
.then((paymentInfo)=>console.log(paymentInfo))
.catch((err)=>console.log("Error:",err))

