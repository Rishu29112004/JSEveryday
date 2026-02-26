//Callback Function is a function that is passed as an argument to another function and is executed later inside that function.
//in simple call me back later when you need me.

// syntax
function mainFunction(callback){
    callback
}

// example
function greet(name, callback){
        console.log(name,"ji")
        callback()
}

function message(){
      console.log("you are the best")
}

greet("rishu", message)