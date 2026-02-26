//Method Function is a function that is stored inside an object.

// in simple - if a function is a property of an object -> it is called a method

// using this inside method is important.
// this refers to the object calling the method.

// example
const person = {
    name : "Rishu",
    greet(){
      console.log("hello " + this.name)
    }
}

person.greet()

//example
const men = {
    name : "rihsu",
    greet: ()=>{
        console.log(this.name)
    }
}            //undefined because arrow function do not have their own this.

men.greet()