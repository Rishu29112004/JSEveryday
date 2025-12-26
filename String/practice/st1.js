// Write a function to reverse a string without using .reverse()
function reverse(string){
    let result =" "
   for(let i=string.length-1; i>=0; i--) {
       result += string[i]
   }
   return result
}
console.log(reverse("Laptop"))