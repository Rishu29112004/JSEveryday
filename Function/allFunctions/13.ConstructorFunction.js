//Constructor Function is used to create multiple similar objects in js.
// it acts like a blueprint to create objects.

// syntax
function FunctionName(parameters) {
  this.property = value;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Rishu", 22);
const p2 = new Person("Rahul", 25);

console.log(p1.name);
console.log(p2.name);
