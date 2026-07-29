const promise1=()=>{
   return new Promise((res,rej)=>{
        setTimeout(()=>{
            const user={name:"Rishu", class:"C"}
            res(user)
        },1000)
    })
}

const promise2=(user)=>{
   return new Promise((res,rej)=>{
        setTimeout(()=>{
           const name=user?.name
           res(name)
        },1000)
    })
}

promise1()
.then((user)=>promise2(user))
.then((name)=>{
    console.log(name)
})
.catch((err)=>{
    console.log(error)
})
