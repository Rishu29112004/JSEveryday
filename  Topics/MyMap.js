const arr= [1,2,3,4,5]

Array.prototype.myMap=function(cb){
   let newArr = []
   for (let i=0; i<this.length; i++){
    newArr.push(cb(this[i]))
   }
   return newArr
}

function cb(value){
    return value*10
}

// console.log(arr.myMap(cb))


Array.prototype.myMappp=function(cbb){
    const newArray=[]
    for(let i =0; i<this.length; i++){
        newArray.push(cbb(this[i]))
    }
    return newArray
}

function cbb(value){
    return value*58
}

console.log(arr.myMappp(cbb))