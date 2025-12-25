// print all keys and their corresponding values of an object
function keyValues(object){
    let res=[]
        for( let key in object){
            res.push(`${key}, ${object[key]}`)
        }
        return res
}
let obj={
    name:"Rishu",
    age:21,
    work:"Developer",
    Experience:"5yr"
}
console.log(keyValues(obj))

