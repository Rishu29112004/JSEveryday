let original={
    name:"Rishu",
    age:22,
    work:"Developer"
}

let copy=structuredClone(original)
let c=structuredClone(copy)
copy.name="mohan"
c.name="Ankit"
console.log(copy)
console.log(c)
console.log(original)