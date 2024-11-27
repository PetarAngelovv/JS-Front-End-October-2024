function PrintEveryElement(arr,steps){
    const newArr=[];
      for(let i = 0; i<arr.length;i++){
       if(i % steps == 0)newArr.push(arr[i]);
      }
 
     return newArr;
 
}