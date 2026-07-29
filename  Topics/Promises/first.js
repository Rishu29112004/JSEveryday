const promise1= ()=>{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            const user={name: "rishu", email: "rishu@gmail.com"}
               res(user)
        },1000)
    })
}

promise1().then((data)=>{
    console.log(data)
})
