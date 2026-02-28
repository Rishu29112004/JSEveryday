const products = [
  { id: 1, name: "Laptop", price: 50000, inStock: false },
  { id: 2, name: "Mobile", price: 20000, inStock: true },
  { id: 3, name: "Tablet", price: 30000, inStock: true },
  { id: 4, name: "Camera", price: 40000, inStock: false }
];

// const arr = [1,2,3,4,5,6,7,8]

// const res= products.find(num=> num.price>25000 && num.inStock===true)
// console.log(res)






Array.prototype.myFind= function(callBack){
    for(let i=0; i<this.length ; i++){
      if(callBack(this[i])){
            return  this[i]
      }
    }
}


function greater(obj){
    return obj.price> 25000 && obj.inStock===true
}


console.log(products.myFind(greater))


