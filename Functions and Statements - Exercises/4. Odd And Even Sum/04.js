function OddAndEvenSum(number){
    const NumArr = Math.abs(number).toString().split('').map(Number);
    let OddSum= 0;
    let EvenSum = 0;
    NumArr.forEach((num) => {
       if(num % 2 == 0) EvenSum+=num;
       else OddSum+=num;
    } ,0)
    console.log(`Odd sum = ${OddSum}, Even sum = ${EvenSum}`)
}