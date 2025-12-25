//Write a function to find the second-largest number in an array.
function secLar(arr) {
    let firstLar = -Infinity
    let secondLar = -Infinity
    for (let value of arr) {
        if (value>firstLar){
              secondLar=firstLar
              firstLar=value
        } else if(value = firstLar){
            secondLar=firstLar
        }
   }
   return [firstLar,secondLar]
}

console.log(secLar([45,45,45]))