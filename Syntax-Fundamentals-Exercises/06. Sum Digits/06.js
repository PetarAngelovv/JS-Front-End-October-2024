function SumDigits(num1){
  let char =0;
  num1 = num1.toString(); 
   for( let i=0; i < num1.length;i++){
  char += parseInt(num1[i]);
   }
   console.log(char)
}