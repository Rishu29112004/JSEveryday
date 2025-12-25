//Invert an object (keys become values & values become keys)
function reverce(obj){
    let rev={}
    for(let key in obj){
        rev[obj[key]]=key
    }
    return rev
}
let obj={
    name:"Rishu",
    rollno:24,
    work:"Developer"
}
console.log(reverce(obj))