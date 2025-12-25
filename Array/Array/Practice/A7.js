// Write a program to find the missing number in a sequence of numbers from 1 to n.
function missingNum(arr,n){
    let expectedSum=(n*(n+1))/2
    let actualSum=0
    for(let value of arr){
       actualSum+=value
    }
    return expectedSum-actualSum
}
let n=5
let a=[1,2,4,5]
console.log(missingNum(a,n))