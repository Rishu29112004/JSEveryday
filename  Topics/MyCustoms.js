// 1.
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

console.log(arr.myMap(cb))


// 2.Includes map fun.
const arrr=[1,2,3,4,5,6]

Array.prototype.myIncludes=function(value){
    for (let i=0; i<this.length; i++){
        if(this[i]===value){
            return true
        }
    }
    return false 
}

console.log(arrr.myIncludes(30))


// 3.myFilter fun
const arr3=[1,2,3,4,5]
// const res3=arr3.filter((value)=>value%2==0)
// console.log(res3)

Array.prototype.myFilter=function(value){
    const arr3res=[]
    for (let i=0; i<this.length; i++){
        if(i%2==0){
            arr3res.push(this[i])
        }
    }
    return arr3res
}

console.log(arr3.myFilter())



// 4.myFind fun
const arr4 = [1, 2, 3, 4, 5];

Array.prototype.myFind = function(value) {
    for (let i = 0; i < this.length; i++) {
        if (value(this[i])) {
            return this[i];
        }
    }
};

function value(num) {
    return num === 3;
}

console.log(arr4.myFind(value)); // 3