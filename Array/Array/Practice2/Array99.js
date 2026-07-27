function max(arr){
    let max=0   // max ka value 6 
    for (let i=0;i<arr.length;i++){
        if(arr[i]>max){   // 4 > 3
            max=arr[i]   // max=4
        }
    }
    return max
}

let ar=[2,3,4,5,6]
console.log(max(ar))

// max fucntion jo hai 1 value return   - i dont need an array - it should be varible which is to be returned intialize=0

// loop chalna chahye  bar bar check karega kise to max varible ke ye jo chalne ke baadh jo value mujhe mil raha hai array se vo max se bada hai kya
// agar hai to max me usko replace kar do



function secondLargest(arr){ 
    let largest=-Infinity;
    let secondLargest=-Infinity;

    for(let i=0;i<arr.length;i++){  // 5 ,3
          if(arr[i] > largest){
             secondLargest=largest; // - infinity
             largest=arr[i];       // 1
          }else if(arr[i] > secondLargest && arr[i] !==largest){
             secondLargest=arr[i]
          }
    }
    return  secondLargest === -Infinity ? "no second larghest " : secondLargest
}