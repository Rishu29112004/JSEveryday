const arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// const res= arr2.filter((a)=>a>5)
// console.log(res)

Array.prototype.myFilter = function (callBack) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if(callBack(this[i])){
             result.push(this[i]);
    }
  }
  return result;
};

function greater(value) {
  return value > 5;
}

console.log(arr2.myFilter(greater));


