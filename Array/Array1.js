function longestcount(num){
    
    num.sort((a,b)=>a-b)         //order kar dega array

    let maxCount=1
    let count=1
    let longestArray=[]

    let temp=[num[0]]

    for(let i=1; i<num.length; i++){
         if(num[i]===num[i-1]) continue;  //dublicate

         if(num[i]===num[i-1]+1){
            count++
            temp.push(num[i])
         }
         else{
             
            if(temp.length>longestArray.length){
                longestArray=temp
            }

            temp=[num[i]]
            count=1

         }
          maxCount=Math.max(maxCount,count)
    }
    return {maxCount,longestArray}
}
console.log(longestcount([23,34,2,1,4,3,7,5]))