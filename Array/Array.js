//An array is a special type of variable that can store multiple values in a single place.

//Declare an array
let arr=[1,5,6,57]

//Print array
console.log(arr)

//To find the length
console.log(arr.length)

//To Reinitialize it
arr[3]=543
console.log(arr)

//Type of array->object
console.log(typeof(arr))

//---------------------------------------------------------------------
//Array methods

//1.Print arr as a string
console.log(arr.toString())

//2.Join array elements
console.log(arr.join(" and "))

//3.Pop-> extract the last element of an array and return rest of the element.
console.log(arr.pop())  //543
console.log(arr)        //[1,5,6]

//4.push-> add element at the last of an array and return the full array.
console.log(arr.push("rishu")) //4
console.log(arr)               //[1,5,6,'rishu]

//5.shift-> remove the first element of an array and return the rest of the array.
console.log(arr.shift())
console.log(arr)

//6.unshift-> add element at the starting of an array and return the rest of the array.
console.log(arr.unshift("Ritik"))
console.log(arr)

//7.delete-> delete the last element of an array and return rest of the array with empty(place of last deleted element.)
//delete is not a function-> delete is a js operator, not a function attached to arrays.
delete arr[1]                   //['ritik',<1 empty item>,6, 'rishu']
console.log(arr.length)         //4 (location is allocated but undefined)
console.log(arr)                //undefined
// console.log(arr.delete)      //undefined

//8.concat-> use to join the array and give the new array.
let arr1=[1,2,3,4]
let arr2=[5,6,7,8]
let newarr=arr1.concat(arr2)
console.log(newarr)

//9.sort-> sort the element of an array.
let mixString=["aman","rahul","vinay","rishu"]
console.log(mixString.sort())
let mixNumber=[2,3423,45,34534,3]
console.log(mixNumber.sort((a,b)=>a-b))
console.log(mixNumber.sort((a,b)=>b-a))

//10.splice()-> it is used to add, remove, or replace elements in an array.
//syntax-> array.splice(startIndex, deleteCount, addItem1, addItem2,...)
let num=[10,20,30,40]
num.splice(1,2)    //1st index sai 2 elements delete kar do
console.log(num)
num.splice(1,0,20)   //1st index sai kuch delete mat karo or waha 20 add kar do
console.log(num)
num.splice(1,1,25)   //1st element sai 1 element replace karo 25 ke sath
console.log(num) 

//11.slice()-> it does not change the original array.
//It return the new array.
//syntax: array.slice(startIndex, endIndex)  
//startIndex-> from where to start (included)
//endIndex-> where to stop (not included)
let sli=[10,20,30,40,50]
let sliRes=sli.slice(1,2)  //start karo 1st index sai to return karo array brfore the 2nd index tak
console.log(sliRes)
console.log(sli.slice(2)) //2nd index sai sab print kar do 
console.log(sli.slice())   //copy the full array 
console.log(sli.slice(-2))  //last kha 2 index return karo 
console.log(sli.slice(2))  //starting sai 2 element kata ke print karo

//12.reverse()-> it reverse the original array.
let revArr=[1,2,3,4,5]
console.log(revArr.reverse())
let revArrStr="rishu"
let revStr=revArrStr.split("").reverse().join("")
console.log(revStr)