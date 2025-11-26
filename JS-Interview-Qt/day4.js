//1.
const users = [
  { name: "Rishu", age: 21 },
  { name: "Aman", age: 25 },
  { name: "Sneha", age: 19 }
];
let usersRes=users.map((t)=>t.name+" "+(t.age))
console.log(usersRes)

//2.
 const products = [
  { name: "Phone", price: 12000 },
  { name: "Laptop", price: 60000 },
];
let productsres=products.map((item)=>{return{
    ...item,
    discountPrice:item.price*0.9
}})
console.log(productsres)

//3.
const arr = [0, 1, 3, -1, 5];
let arrres=arr.map(item=>Boolean(item))
console.log(arrres)

// 4.
const emails = ["user@gmail.com", "admin@yahoo.com", "test@outlook.com"];
let emailsres=emails.map(item=>item.split("@")[1])
console.log(emailsres)

//5.
const nums = [10, 20, 30];
let numsres=nums.map((item,index)=>item+index)
console.log(numsres)