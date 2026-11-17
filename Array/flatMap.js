// Q1. Double each number and flatten the result
// const numbers = [1, 2, 3, 4, 5];
// const numRes=numbers.flatMap(t=>[t*2])
// console.log(numRes)
// Expected Output:
// [2, 4, 6, 8, 10]


// Q2. Split each sentence into individual words
// const sentences = [
//   "I love JavaScript",
//   "I love React",
//   "I love Node"
// ];
// const sentenceRes=sentences.flatMap(t=>t.split(" "))
// console.log(sentenceRes)
// Expected Output:
// ["I", "love", "JavaScript", "I", "love", "React", "I", "love", "Node"]


// // Q3. Extract all hobbies from users
// const users = [
//   { name: "Rahul", hobbies: ["Cricket", "Football"] },
//   { name: "Aman", hobbies: ["Coding", "Gaming"] },
//   { name: "Rishu", hobbies: ["Music", "Travel"] }
// ];

// const useRes=users.flatMap(t=>[t.hobbies])
// console.log(useRes)
// Expected Output:
// ["Cricket", "Football", "Coding", "Gaming", "Music", "Travel"]


// const categories = [
//   {
//     category: "Electronics",
//     products: ["Laptop", "Mobile", "Tablet"]
//   },
//   {
//     category: "Clothing",
//     products: ["Shirt", "Jeans", "Shoes"]
//   },
//   {
//     category: "Food",
//     products: ["Pizza", "Burger"]
//   }
// ];
// const Res=categories.flatMap(t=>t.products)
// console.log(Res)
// Expected Output:
// ["Laptop", "Mobile", "Tablet", "Shirt", "Jeans", "Shoes", "Pizza", "Burger"]