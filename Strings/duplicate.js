// Q1. Find duplicate characters in a string
const str = "hellooooo";
let res={}
for (let i = 0; i<str.length ; i++){
    if(res[str[i]] !== undefined){
        res[str[i]]++
    }else{
        res[str[i]]=1
    }
}

for (let key in res){
    if(res[key]>1){
        console.log(key)
    }
}
// Expected Output:
// l