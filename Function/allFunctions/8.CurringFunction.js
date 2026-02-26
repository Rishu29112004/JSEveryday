// Curring is a technique in js where a function takes arguments one at a time instead of taking all agruments at once.

// in simple curring -> converting a function with multiple parameters into multile nested functions.

// noraml function
function addNum(a, b, c) {
  return a + b + c;
}

console.log(addNum(4, 5, 6));

// curring function
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(4)(5)(6));

// arrrw function curring
const ad = (a) => (b) => (c) => a + b + c;
console.log(ad(2)(3)(4));
