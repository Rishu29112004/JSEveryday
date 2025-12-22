//access object
let studentObj={
    name:"Rohit",
    role:"student",
    rollNo:42
}
console.log(studentObj)

//2.// Write a function to count the number of keys in an object.
let student = {
  name: "Rohit",
  role: "student",
  rollNo: 42,
};

let studentCount=Object.keys(student).length
console.log(studentCount)

// // Given an object, write a program to find the key with the highest value
let scores = { John: 85, Rohit: 95, Emma: 90 }
let scoresRes=Object.keys(scores).reduce((a,b)=>a>b?a:b)
console.log(scoresRes)

//Merge object
let objA = { name: "Rohit", age: 20 };
let objB = { role: "student", city: "Delhi" };

function merge(obj1,obj2){
    return {...obj1, ...obj2}
}

console.log(merge(objA,objB))

//// 3️⃣ Delete a property from an object
let obj = { name: "Rohit", age: 20 };
delete obj.age
console.log(obj)

// 4️⃣ Check if an object is empty (has no keys)
let obj4 = { name: "Rohit", age: 20 };
let obj5 ={}
function emptyObj(obj){
        if(Object.keys(obj).length===0){
            console.log("Empty Object")
        }
        else {
            console.log("valid Obj")
        }
}
emptyObj(obj5)

//print key value
let obj7 = { name: "Rohit", age: 20 };

Object.keys(obj7).forEach(key => {
  console.log(key, obj7[key]);
});

// 6️⃣ Invert an object (keys become values & values become keys)
function reverse(obj){
    let revObj={}
    for(let i in obj){
            revObj[obj[i]]=i
    }
    return revObj
}
console.log(reverse(obj7))


// 7️⃣ Find all keys that have a specific value
function findKeysWithValue(obj, targetValue) {
  let keys = [];
  for (let key in obj) {
    if (obj[key] === targetValue) {
      keys.push(key);
    }
  }
  return keys;
}

let data = { a: 1, b: 2, c: 1, d: 3 };
console.log(findKeysWithValue(data, 1));
console.log(findKeysWithValue(data, 1));

