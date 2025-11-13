 let arr=[1,2,4,45,22,32,12]

 //1.for loop-> it is not an array method- it's a looping/iteration construct in js.
 for(let index=0;index<arr.length;index++){
    // let element=arr[index]
    console.log(arr[index])
 }

 //2.forEach-> it is an array method used to run a function once for each element in the array.
 //element-> current value, index->position(optional), array-> full array(optional)
 arr.forEach((value,index,arr)=>{
    console.log(value,index,arr)
 })

 //3.for in-> It is a loop used to iterate over object keys(properties)
 let obj={
    roll:1,
    name:"Rishu",
    word:"Developer"
 }
 for (let key in obj){
    console.log(obj,obj[key])
 }

 //4.for of-> It is used to iterate over values of an iterable.
 //good for->arrays,strings,maps,sets. notgood->objects
 let farr=[12,43,55]
 for ( let value of farr){
    console.log(value)
 }