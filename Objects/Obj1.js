//Q1️⃣ Print only values from object
const user = { name: "A", age: 20, city: "Delhi" };
let userValue=Object.values(user)
console.log(userValue)
console.log(Object.values(user))

//Q2️⃣ Count number of keys in object
const obj = { a: 1, b: 2, c: 3 };
const ObjLen=Object.keys(obj).length
console.log(ObjLen)
let keyNum=0
for(let key in obj){
   keyNum++
}
console.log(keyNum)

// Q3️⃣ Print only active users
const users = [
  { name: "A", active: true },
  { name: "B", active: false },
  { name: "C", active: true }
];
const ActUsers=users.filter(user=>user.active)
console.log(ActUsers)

// Q4️⃣ Print names of active users only
const ActUsersName=users.filter(user=>user.active).map(user=>user.name)
console.log(ActUsersName)

// Q5️⃣ Check if key exists
const userr = { name: "A", age: 22 };
console.log("age" in userr)

// Q6️⃣ Convert object to array
const objj = { a: 1, b: 2 };
const result=Object.entries(objj)
console.log(result)

//Q7️⃣ Add new key only if not exists
const user7 = { name: "A" };
user7.age=20
console.log(user7)

//Q8️⃣ Access deeply nested value
const data = {
  user: {
    profile: {
      city: "Bangalore"
    }
  }
};
console.log(data.user.profile.city)

//Q9️⃣ Print key-value pairs
const obj9 = { x: 10, y: 20 };

for (let key in obj9){
    console.log(key,obj9[key])
}

//Q🔟 Remove a key from object
const user10 = { name: "A", age: 22, active: true };
delete user10.active
console.log(user10)