//Check if an object is empty (has no keys)
function check(obj){
    if (Object.keys(obj).length===0){
        return ("Empty Object")
    }
    else if(Object.keys(obj).length>0) {
       return ("Valid Object")
    }
}
console.log(check({}))
console.log(check({a:5}))
console.log(check({a:5}))