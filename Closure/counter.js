// Q1. Basic Counter
// - Create a function named createCounter.
// - It should maintain a private variable count initialized to 0.
// - Return an inner function that increments the count by 1.
// - Call the returned function 3 times.
// Expected Output:
// 1
// 2
// 3

// function createCounter(){
//     let count=0
//     return function inner(){
//        count++
//        return count
//     }
// }
// const res=createCounter()
// console.log(res())
// console.log(res())
// console.log(res())




// Q2. Decrement Counter
// - Create a function named createCounter.
// - Initialize count to 10.
// - Return an inner function that decreases count by 1.
// - Call it 3 times.
// Expected Output:
// 9
// 8
// 7

// function createCounter(){
//     let count=10
//     return function inner(){
//         count--
//         return count
//     }
// }
// const res=createCounter()
// console.log(res())
// console.log(res())
// console.log(res())



// Q3. Counter with Increment Value
// - Create a function named createCounter.
// - It should accept an initial value as an argument.
// - Return an inner function that increments the counter by 5 each time.
// - Call the returned function 3 times.
// Expected Output:
// 5
// 10
// 15

// function createCounter(initialCount){
//     let count=initialCount
//     return function inner(){
//         count +=5
//         return count
//     }
// }
// const res=createCounter(0)
// console.log(res())
// console.log(res())
// console.log(res())




// Q4. Private Counter
// - Create a function named createCounter.
// - Initialize a private variable count = 0.
// - Return an object containing two methods:
//   - increment() – Increase count by 1.
//   - getCount() – Return the current count.
// - Try accessing count directly outside the function.
// Expected Output:
// 1
// 2
// 2
// undefined


// function createCounter() {
//     let count = 0;

//     return {
//         increment() {
//             count++;
//             return count;
//         },

//         getCount() {
//             return count;
//         }
//     };
// }

// const counter = createCounter();

// counter.increment();
// console.log(counter.getCount()); // 1

// counter.increment();
// console.log(counter.getCount()); // 2

// console.log(counter.getCount()); // 2

// console.log(counter.count); // undefined

// console.log(counter.getCounter())




// Q5. Independent Counters (Important)
// - Create a function named createCounter.
// - Initialize a private variable count = 0.
// - Return an inner function that increments count by 1.
// - Create two separate counters: counter1 and counter2.
// - Increment counter1 three times and counter2 two times.
// Expected Output:
// 1
// 2
// 3
// 1
// 2

// function createCounter(){
//     let count=0
//   return function inner() {
//         count++;
//         return count;
//     };
// }
// const counter1 = createCounter();
// const counter2 = createCounter();
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter2())
// console.log(counter2())









