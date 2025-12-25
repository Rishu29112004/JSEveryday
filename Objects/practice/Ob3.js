// Given an object, write a program to find the key with the highest value
let marks={
    aman:40,
    arun:43,
    mohan:87,
    rahul:44,
    mohit:67
}

let max=-Infinity
let name=""
for (let key in marks){
    if(marks[key]>max){
        max=marks[key]
        name=key
    }
}
console.log(name,max)
