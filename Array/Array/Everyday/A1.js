// Given an array of numbers, return a new array where every number is doubled.
const numbers = [2, 4, 6, 8];

const numDou= numbers.map((num)=>num*2)
console.log(numDou)



// 2. filter()
// Return only even numbers.

const numbers2 = [10, 15, 20, 25, 30, 35];

const evenNum= numbers2.filter((num)=>num%2==0)
console.log(evenNum)


// 3. reduce()

// Find the sum of all numbers.

const numbers3 = [5, 10, 15, 20];
const sumNum= numbers3.reduce((a,b)=>a+b)
console.log(sumNum)


// 4. find()

// Find the first number greater than 25.

const numbers4 = [10, 18, 22, 30, 40];
const gnum=numbers4.find((val)=>val>25)
console.log(gnum)


// 5. some()

// Check if at least one student has marks greater than 90.

const marks = [45, 67, 89, 95, 72];
const marksres= marks.some((val)=>val>90)
console.log(marksres)


// 6. every()

// Check if all numbers are positive.

const numbers6 = [5, 10, 15, 20];
const posNum=numbers6.every((val)=>val>0)
console.log(posNum)


// 7. sort()

// Sort the array in ascending order.

const numbers7 = [50, 10, 80, 20, 5];
const sortNum= numbers7.sort((a,b)=>a-b)
console.log(sortNum)


// 8. slice()

// Extract the middle three elements.

const numbers8 = [1, 2, 3, 4, 5, 6, 7];
const numSli= numbers8.slice(2,5)
console.log(numSli)


// 9. splice()

// Remove 30 and 40 from the array.

const numbers9 = [10, 20, 30, 40, 50];
const slNum= numbers9.splice(2,2)
console.log(slNum)
console.log(numbers9)


// 10. forEach()

// Print every fruit with its index.

const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruits,index)=>{
    console.log(index,fruits)
})
