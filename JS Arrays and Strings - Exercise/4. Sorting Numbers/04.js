function SortingNumbers(arr){
    const ZippedArr= [];
    const initialLength= arr.length;
    arr.sort((a,b) => a-b)
         for(let i = 0; i < initialLength;i++){
             if(i % 2 == 0) ZippedArr.push(arr.shift())
                 else ZippedArr.push(arr.pop())
         }
         return ZippedArr;
    }