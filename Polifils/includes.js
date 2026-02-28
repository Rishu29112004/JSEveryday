const arr=[1,2,3,4,5]

// const res=arr.includes(4)
// console.log(res)


Array.prototype.myIncludes= function(callBack){
    for(let i=0; i<this.length; i++){
      if(callBack(this[i])){
        return true
      }
    }return false
}

function isInclude(value){
       return value === 9
}

console.log(arr.myIncludes(isInclude))