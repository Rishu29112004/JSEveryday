//1.Convert an array of temperatures from Celsius to Fahrenheit.
let celsious = [0,10,25]
let fahrenheit = celsious.map(temp=>(temp*9/5)+32)
console.log(fahrenheit)

//2.Extract usernames from an array of user objects.
let data=[
  {name: "Rohan", username: "rohan123"},
  {name: "Aisha", username: "aisha_k"}
]

let res=data.map((data)=>data.name)
console.log(res)

//3.Convert an array of numbers into their squares.
let square=(n)=>{
  return n.map((n)=>n*2)
}
console.log(square([2,3,5,7]))

//4.Convert an array of words into uppercase.
let arr=["apple", "mango", "banana"]
let arrUpperCase= arr.map((m)=>m.toUpperCase())
console.log(arrUpperCase)

//5.Transform an array of objects to only contain {id, priceWithGST}
let arrData=[
  {id: 1, price: 100},
  {id: 2, price: 200}
]
let arrDataRes=arrData.map((m)=>m.price + m.price*0.18)
console.log(arrDataRes)