function PrintAndSum(num1,num2){
  let combined = '';
  let result = 0; 
    for(let i = num1; i <= num2;i++){
      combined += i  + " ";
      result += i;
    }
    console.log(combined.trim())
    console.log(`Sum: ${result}`)
}