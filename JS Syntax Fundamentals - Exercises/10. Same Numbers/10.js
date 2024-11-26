function SameNumbers(digit){
  let char = 0;
  let stringNum = digit.toString(); 
let check = true;


   for(let i = 0; i < stringNum.length;i++){
    if(stringNum[i] != stringNum[i+1] && i < stringNum.length - 1) check=false;
      char += parseInt(stringNum[i])
 }
  console.log(check);
 console.log(char);
}