function CookingbyNumbers(num,operation1,operation2,operation3,operation4,operation5){
    
  for(let i = 1; i <=5;i++){
      switch( eval('operation' + i)){
          case 'chop':
              num /= 2;
          break;
          case 'dice':
              num= Math.sqrt(num);
          break;
          case 'spice':
              num+=1
          break;
          case 'bake':
              num*=3;
          break;
          case 'fillet':
              num -= num*0.2; 
          break;
    
      }
      console.log(num)
  }
}