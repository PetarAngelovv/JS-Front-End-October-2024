function AddAndSubtract(num1,num2,num3){
  const sum = (a,b) => a + b;
  const substract =(a,b) => a - b;
  return substract(sum(num1,num2),num3)
}