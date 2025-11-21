//1.Write a function that returns all names that start with the letter "Ri".
let names = ["Rishu", "Ritik", "Rishi", "Rohan", "Raj"];
let namesres=names.filter((n)=>n.startsWith("Ri"))
console.log(namesres)

//2.Use map() to return a new array containing final price with 18% GST.
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

let productsres=products.map((p)=>p.price+p.price*0.18)
console.log(productsres)

//3.Use reduce() to return the sum of only even numbers.
let nums = [10, 15, 22, 40, 7];
let numsres= nums.reduce((acc,curr)=>{
    if(curr%2===0){
      return  acc + curr
    }
    return acc   
},0)
console.log("check for the ",numsres) // 10 + 22 +40

const arr5=[1,2,3,4,5]

const res=arr5.reduce((acc,curr)=>{
    return acc=acc+curr
},0)

console.log("rsult",res)

//4.Return names of students who scored above 50, converted into uppercase.
let students = [
  { name: "Ravi", marks: 45 },
  { name: "Kumar", marks: 80 },
  { name: "Aman", marks: 30 },
  { name: "Ritu", marks: 90 }
];
 let studentsres=students.filter((a)=>a.marks>50)
 let resName=studentsres.map((a)=>a.name.toUpperCase())
console.log(resName)

//5.Return the longest word
function findLongestWord(strArr) {
   return strArr.reduce((acc,curr)=>{
        return curr.length>acc.length? curr :acc
    })
}
console.log(findLongestWord(["ram", "krishna", "raju", "alexander"]))