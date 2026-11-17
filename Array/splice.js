// Q1. Remove 2 elements starting from index 1
// const numbers = [10, 20, 30, 40, 50, 60];
// const numRes=numbers.splice(1,2)
// console.log(numbers)
// Expected Output:
// [10, 40, 50, 60]



// Q2. Remove the first element from an array
// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// const fruRes=fruits.splice(0,1)
// console.log(fruits)
// Expected Output:
// ["Banana", "Mango", "Orange"]


// Q3. Add an element at index 2 without removing anything
// const names = ["Rahul", "Aman", "Ayush", "Karan"];
// const nameRes=names.splice(2,0,"Rishu")
// console.log(names)
// Add "Rishu" at index 2

// Expected Output:
// ["Rahul", "Aman", "Rishu", "Ayush", "Karan"]


// Q4. Replace an element at index 1 with another element
// const colors = ["Red", "Blue", "Green", "Yellow"];
// const colRes=colors.splice(1,1,"Black")
// console.log(colors)
// Replace "Blue" with "Black"

// Expected Output:
// ["Red", "Black", "Green", "Yellow"]



// Q5. Remove 2 elements and insert 2 new elements at index 2
// const students = ["Aman", "Rahul", "Karan", "Ayush", "Rohit"];
// const stRes=students.splice(2,2,"Rishu","Vikas")
// console.log(students)
// Remove "Karan" and "Ayush"
// Insert "Rishu" and "Vikas" at the same position

// Expected Output:
// ["Aman", "Rahul", "Rishu", "Vikas", "Rohit"]