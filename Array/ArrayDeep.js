// Q1. Convert numbers to their squares
let nums = [2, 4, 6];
const numsSquare=nums.map((t)=>t*t)
console.log(numsSquare)

//Q2. Convert names to uppercase
let names = ["rahul", "aman", "neha"];
const namesUppercase=names.map(t=>t.toUpperCase())
console.log(namesUppercase)

//Q3. Get numbers greater than 50
let nums3 = [10, 60, 30, 80];
let nums3Res=nums3.filter((t)=>t>50)
console.log(nums3Res)

//Q4. Get only active users
let users = [
  { name: "A", active: true },
  { name: "B", active: false },
];
const usersRes=users.filter(t=>t.active).map(t=>t.active)
console.log(usersRes)

//Q5. Find total price
let cart = [
  { price: 100 },
  { price: 250 },
  { price: 150 }
];
const cartPrice=cart.reduce((sum,item)=>sum+item.price,0)
console.log(cartPrice)

//Q6. Find maximum number
let nums6 = [3, 9, 2, 8];
let nums6Res=nums6.reduce((max,nums)=>max>nums?max:nums)
console.log(nums6Res)

//Q7. Get names of users older than 18
let users7 = [
  { name: "Ravi", age: 17 },
  { name: "Amit", age: 21 },
];
let users7Res=users7.filter((t)=>t.age>18).map(t=>t.name)
console.log(users7Res)

//Q8. Remove duplicate numbers
let nums8 = [1, 2, 2, 3, 3, 4];
const nums8Res=nums8.reduce((acc,n)=>{
    if(!acc.includes(n)) acc.push(n)
        return acc
},[])
console.log(nums8Res)

//Q9. Check if value exists
let nums9 = [10, 20, 30];
let nums9Res=nums9.includes(20)
console.log(nums9Res)

//Q10. Remove element without mutating array
let nums10 = [10, 20, 30, 40];
let nums10Res=nums10.map(t=>t !==30)
console.log(nums10Res)
