// How do you remove duplicates from an array (without using Set)?
let arr=[1,2,3,4,5,5,5,5];
let res=[]
for(let i of arr){
    if(!res.includes(i)){
        res.push(i)
    }
}
console.log(res)