//1.Write a program to find the largest and smallest elements in an array.
function num(arr) {
    let max = -Infinity
    let min = Infinity
    for (let num of arr) {
        if (num > max) {   //2
            max = num
        }
        if (num < min) {
            min = num
        }
    }
    return {max:max, min:min}
}

// let a=[2,3,4,5,]
console.log(num([4, 5, 6, 6, 6, 54, 34,-5]))