//map()=> It's crates a new array by appling a function to each elements of an existing array.
//syntax-> array.map(function(element, index, array) {//return new value})
let marr=[1,2,3,4,5]
let mres=marr.map(marr=>marr*2)
console.log(mres)

let mstr=["Rishu","aman","binod","subham"]
let mstrret=mstr.map(a=>a.toUpperCase())
console.log(mstrret)

let mData=[
    {name:"Rishu",age:21},
    {name:"Meera",age:20}
]
let mDatares=mData.map(m=>m.name)
console.log(mDatares)

//filter()-> creates a new array containing only the elements that pass a given condition.
let farr=[2,34,34454,6,5,67,56]
let farrret=farr.filter(f=>f>=5)
console.log(farrret)

let farreven=farr.filter(f=>f%2==0)
console.log(farreven)

let fstr=["rishu","mohan","sinam","tom","babbar"]
let fstrres=fstr.filter(f=>f.length>5)
console.log(fstrres)

//reduce()=>It is a method which process the array and return single result.
//syntax: array.reduce((accumalator, currentValue)=>{}, initialValue)
//accumulator-> result jo ban raha hai, currentValue-> arrat ka current element, initialValue-> starting value(optional but imp)
let rnum=[1,2,3,4,5]
let rres=rnum.reduce((acc,num)=>acc+num, 0)
console.log(rres)
let rresmul=rnum.reduce((acc,num)=>acc*num, 1)
console.log(rresmul)
let rresmax=rnum.reduce((acc,num)=>Math.max(acc,num))
console.log(rresmax)



//Array.from() create a new real array from any iterable or array-like object.
//syntax: Array.from(object, mapFunction)
//Set-> Remove dublicates from array
console.log(Array.from("hello"))

let aarray=[2,13,42,4,3,43,3,5,2]
let mySet= new Set(aarray)
console.log(mySet)

let arrr=[1,2,3,4,5]
let resarrr=arrr.filter((item)=>item>3)
console.log(resarrr)