// How do you remove duplicates from an array (without using Set)?
function dublicate(arr) {  //a
    let newArray = []
    for (let value of arr) {
        if (!newArray.includes(value)) {
            newArray.push(value)
        }
    }
    return newArray
}
let a = [2, 3, 4, 5, 4, 3, 1, 2]
console.log(dublicate(a))