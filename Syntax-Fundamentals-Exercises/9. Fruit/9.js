function Fruit(fruit, weightInGrams ,pricePerkilo){
  let  money = pricePerkilo * weightInGrams /1000;
  let weight= weightInGrams / 1000;
  console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`)
}