// Q1️⃣ Count number of keys in an object
const obj = { a: 1, b: 2, c: 3 };
const objCount=Object.values(obj).length
console.log(objCount)
let count=0
for (let key in obj){
    count++
}
console.log(count)

//Q2️⃣ Get all keys of an object
const user = { name: "Rishu", age: 22, city: "Bangalore" };
let userKEys=Object.keys(user)
console.log(userKEys)

//Q3️⃣ Get all values of an object
const marks = { math: 80, english: 70, science: 90 };
let marksValues=Object.values(marks)
console.log(marksValues)

//Q4️⃣ Convert object into array of key–value pairs
const obj4 = { a: 1, b: 2 };
let Objarr=Object.entries(obj4)
console.log(Objarr)

//Q5️⃣ Check if a key exists in object
const user5 = { name: "Aman", age: 25 };
console.log("age" in user5)

// Q6️⃣ Sum all values in an object
const prices = { apple: 100, banana: 50, mango: 70 };
let pricesSum=Object.values(prices).reduce((a,b)=>a+b,0)
console.log(pricesSum)

// Q7️⃣ Print only active users
const users = {
  u1: { name: "A", active: true },
  u2: { name: "B", active: false },
  u3: { name: "C", active: true }
};
let usersActive=Object.values(users).filter((t)=>t.active).map((t)=>t.name)
console.log(usersActive)

// Q8️⃣ Convert object values to uppercase
const data = { a: "hello", b: "world" };
const dataUppercase=Object.values(data).map((t)=>t.toUpperCase())
console.log(dataUppercase)
const datares={}
for (let key in data){
    datares[key]=data[key].toUpperCase()
}
console.log(datares)

// Q9️⃣ Find key with highest value
const scores = { math: 80, science: 95, english: 70 };
const scoresMax=Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b)
console.log(scoresMax)