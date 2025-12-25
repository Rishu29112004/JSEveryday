// find the intersection of two arrays
function intersection(arr1, arr2) {
    let result = []
    for (let value of arr1) {
        if (arr2.includes(value) && !result.includes(value)) {
            result.push(value)
        }
    }
    return result
}
console.log(intersection([2, 3, 2, 1, 4, 4, 4], [2, 4, 5, 6, 3, 2, 1]).sort())