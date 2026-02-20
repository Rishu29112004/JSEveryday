//fetch() API + Promise (REAL USE)
// fetch() ka use server/ api se data lane ke liye hota hai aur fetch khud ek promise return karta hai 

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();   // JSON bhi Promise hota hai
  })
  .then((data) => {
    console.log(data);        // actual data
  })
  .catch((error) => {
    console.log("Error:", error);
  });
