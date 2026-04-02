const arr=[ 1,2,3,4]

Array.prototype.customMap=function(callback){
    let res=[]
    for(let i =0; i< this.length; i++){
        res.push(callback(this[i]))
    }
    return res
}

// function add(value){
//     return value + value
// }

console.log( arr.customMap(n=>n+n))



