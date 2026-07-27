//1.Promise ka real purpose kya hai?
// 1.API call
// 2.Database request
// 3.File upload
// 4.Payment gateway
// 5.setTimeOut / setInterval jaisa async kaam

// jaha result future mai ata hai 


//2.Promise vs callback (imp)-----------------------------------

// Callback hell kya hota hai?
// callback hell tab hota hai jab
// ----- ek async kaam ke ander doosra callback, uske andar teesra... aur code zyada deprecationHandler, zig-zag(pyramid shape)ho jata hai 

// problem--- 
// .padhna muskil
// .samajhna muskil
// .debug karna muskil
// .maintain karna muskil


// doA(()=>{
//     doB(()=>{
//         doC(()=>{
//             console.log("Done")
//         })
//     })
// })

// isko pyramid of doom bhi bolte hai 

/// promise sai kare to

// doA()
// .then(doB)
// .then(doC)
// .then(()=>{
//     console.log("Done")
// })
// .catch((err)=>{
//     console.log(err)
// })

// prons--
// .straight line.
// .readable.
// .error handling simple.


// callback- callback hell wo situation hota hai jahan multiple nested callbacks ki wajah se code unreadable aur ummanagebale ho jata hai 



// 3..then() ka magic(value passing)

// Promise.resolve(10)
// .then((val)=>{
//     return val*2
// })
// .then((val)=>{
//     return val+5
// })
// .then((final)=>{
//     console.log(final)
// })


// 4..catch()ka flow (sirf last me kyu hota hai?)-------------------------
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length === 0) {
      reject("Cart empty hai");
    } else {
      resolve("Order created successfully");
    }
  });
}


createOrder (["pant"])
.then((order)=>{
    throw new Error("Network error")
})
.then(()=>{
    console.log("ye run nai hoga")
})
.catch((err)=>{
    console.log("Error caught:", err.message)
})


// 5️⃣ .finally() – cleanup king -----------------------------------------------

createOrder(["pant"])
.then(proceedToPayment)
.then(console.log)
.catch(console.log)
.finally(()=>{
    console.log("Loader stop / cleanup")
})


// 6️⃣ Multiple Promises – REAL LIFE SCENARIOS-------------------------------

// Promise.all(sab chahiye)
Promise.all([
    createOrder(["pant"]),
    proceedToPayment(true)
])
.then((res)=>console.log(res))
.catch((res)=>console.log(err))
// ak bhi fail- sab fail


// 🔹 Promise.allSettled (sab ka status chahiye)
Promise.allSettled([
    Promise.resolve("ok"),
    Promise.reject("fail")
])
.then((res)=>console.log(res))

hai

// 🔹 Promise.race (jo pehle aaye)
Promise.race([
    fetchData1(),
    fetchData2()
])
.then(console.log)




// 7️⃣ async / await (Industry standard)------------------------------
async function chackout(){
    try{
        const order = await createOrder(["pant"])
        const payment = await proceedToPayment(order)
        console.log(payment)
    }
    catch(err){
        console.log("Error", err)
    }
}



// 8️⃣ Common mistakes (INTERVIEW GOLD)--------------------------
// 1.promise ko console.log karna
// console.log(createOrder(["pant"])); // Promise {pending}
// 2..then() me return bhool jana
// 3.multiple .catch() without reason
// 4.promise inside promise(nesting)



// 9️⃣ Event Loop + Promise (short & powerful)-----------------------

// Promise → Microtask Queue

// setTimeout → Callback Queue

// Microtask hamesha pehle execute hota hai

setTimeout(()=>console.log("timeout"),0);
Promise.resolve().then(()=>console.log("promise"))



// output---- promise 
//            timeout




// short notes--------------------------------------------
// 1.Promise = future value
// 2.resolve - success
// 3.reject - error
// 4..then()- success handle 
// 5..catch()-error handle
// 6..finally()-cleanup
// 7.async/await- cleaner Promise
// 8.Promise = modern async JS backbone