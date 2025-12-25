// Write a function that takes an array of numbers and returns the sum of even numbers.
function evenSum(arr){
     let sum=0
     for(let value of arr){
        if(value%2===0){
            sum+=value
        }
     }
     return sum
}
console.log(evenSum([1,2,3,4,5,6,7,8,9,10]))