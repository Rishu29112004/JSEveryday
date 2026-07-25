// A promise in js is a way to handle async task like fetching data or reading File
// in a clear and managable way.

// A promise is either resolve and reject.

const promise = new Promise((res,rej)=>{
    let success = true
    if(success){
        res("Task completed")
    }
    else{
        rej("Something went wrong")
    }
})

promise.then((message)=>{
    console.log("Success", message)
}).catch((message)=>{
    console.log("Error", message)
})


// Q1.
const Name=new Promise((res,rej)=>{
    let success=true
    if(success){
        res("Rishu")
    }else{
        rej("Error")
    }
})

Name.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log("Error", message)
})