// Q1️⃣ Count keys
const user = { name: "Alex", age: 25, city: "Delhi" };
const userRes=Object.keys(user).length
console.log(userRes)

// Q2️⃣ Access nested value
const data = {
  user: {
    profile: {
      email: "test@gmail.com"
    }
  }
};

const dataRes=data.user.profile.email
console.log(dataRes)

// 3.Q3️⃣ Convert object to array
const obj = { a: 1, b: 2, c: 3 };
const objRes=Object.entries(obj)
console.log(objRes)

// Q4️⃣ Check if key exists
const product = { id: 1, name: "Mobile", price: 15000 };
const productRes="price" in product
console.log(productRes)

// Q5️⃣ Loop through object
const scores = { math: 80, english: 70, science: 90 };
for (let marks in scores){
    console.log(marks,":",scores[marks])
}

// Q6️⃣ Sum of object values
const marks = { a: 10, b: 20, c: 30 };
let markstotal=Object.values(marks).map((t)=>t).reduce((a,b)=>a+b)
console.log(markstotal)

// Q7️⃣ Get only active users
const users = {
  u1: { name: "A", active: true },
  u2: { name: "B", active: false },
  u3: { name: "C", active: true }
};

const usersRes=Object.values(users).filter(t=>t.active)
console.log(usersRes)

// Q8️⃣ Convert object to array of keys
const car = { brand: "BMW", model: "X5", year: 2023 };
const carRes=Object.keys(car)
console.log(carRes)

// Q9️⃣ Update object value
const userr = { name: "Rahul", age: 22 };
userr.age=25
console.log(userr)

// Q🔟 Remove a property
const objj = { a: 1, b: 2, c: 3 };
delete objj.b
console.log(objj)
