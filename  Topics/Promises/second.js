// async function fetchData(){
//     try{
//         const response=await fetch("https:/dummyjs.com/users")

//         if(!response.ok){
//             throw new Error("Failed to fetch Data")
//         }

//             const data=await response.json();
//             console.log("Data", data)
//     }
//     catch(error){
//         console.log("Error", error.message)
//     }
// }

// fetchData()


async function fetchData() {
    try{
        const response= await fetch("https://dummyjson.com/users")

        const data=await response.json()
        console.log(data)
    }
    catch(error){
      console.log(error)
    }
}
// adfasdf
fetchData()