//1.filter the falsy value from an array.

const falsyValues = [false, 0, -0, 0n, "", null, undefined, NaN, 1, 2, 3, 3, 4];
function result(arr){
   return arr.filter(Boolean)
}

console.log(result(falsyValues))

