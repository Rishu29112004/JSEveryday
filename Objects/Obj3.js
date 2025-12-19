// Q1️⃣ Count number of keys in an object
const obj = { a: 1, b: 2, c: 3 };
const objres=Object.keys(obj).length
console.log(objres)

// Q2️⃣ Get all values of an object
const user = { name: "Rahul", age: 22, city: "Delhi" };
const userVal=Object.values(user)
console.log(userVal)

// Q3️⃣ Check if a key exists in an object
const product = { id: 1, name: "Laptop", price: 50000 };
// check if "price" exists
const productres="price" in product
console.log(productres)

// Q4️⃣ Update the value of a key
const user4 = { name: "Amit", age: 20 };
// update age to 25
user4.age=25
console.log(user4)

// Q5️⃣ Convert object keys into an array
const obj5 = { x: 10, y: 20, z: 30 };
let obj5Res=Object.keys(obj5)
console.log(obj5Res)

// Q6️⃣ Convert object values into an array
const marks = { math: 80, science: 90, english: 70 };
const marksRes=Object.values(marks)
console.log(marksRes)

// Q7️⃣ Print only active users
const users = {
  u1: { name: "A", active: true },
  u2: { name: "B", active: false },
  u3: { name: "C", active: true }
};
// print only names
const userRes=Object.values(users).filter((t)=>t.active).map((t)=>t.name)
console.log(userRes)

// Q8️⃣ Count how many values are numbers
const data = { a: 1, b: "hello", c: 10, d: true };
const dataRes=Object.values(data).filter((t)=>typeof t === "number")
console.log(dataRes)
console.log(dataRes.length)

// Q9️⃣ Find the total price
const cart = {
  item1: { price: 100, qty: 2 },
  item2: { price: 200, qty: 1 }
};
let cartRes=Object.values(cart).filter((t)=>t.price).map(t=>t.price)
console.log(cartRes)
let sum=cartRes.reduce((a,b)=>a+b,0)
console.log(sum)


// Q🔟 Convert object to array of objects
const users10 = {
  1: "Ram",
  2: "Shyam",
  3: "Hari"
};
const arr=[]
for (let key in users10){
    arr.push({id:Number(key), name:users10[key]})
}
console.log(arr)
console.log(arr)
