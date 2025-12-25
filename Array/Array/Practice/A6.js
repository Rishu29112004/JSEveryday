// Program to count the frequency of each value in an array ✅
function frequency(arr){
  let count={}
  for(let value of arr){
    if(count[value]){
        count[value]++
    }
    else{
        count[value]=1
    }
  }
  return count
}
console.log(frequency([2,3,2,4,5,6,4,3,3,2,3,1,1,2,3,4,3,1,2,3,4]))