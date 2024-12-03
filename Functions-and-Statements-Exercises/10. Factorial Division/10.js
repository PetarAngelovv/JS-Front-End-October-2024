function FactorialDivision(num1,num2){
    const calcFactorial = (num)=>{
        if(num == 0 || num == 1) return 1;
        else return num * calcFactorial(num - 1)
    }
    const firstFactorial = calcFactorial(num1)
    const secondFactorial = calcFactorial(num2);
    console.log((firstFactorial / secondFactorial).toFixed(2))
}