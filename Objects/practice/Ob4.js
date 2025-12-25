// merge two objects into one object
function merge(obj1,obj2){
      let res={...obj1,...obj2}
     return res
}
let obj1={a:1,b:2,c:3,d:4}
let obj2={e:5,f:6,e:7}
console.log(merge(obj1,obj2))