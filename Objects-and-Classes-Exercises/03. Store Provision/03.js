function StoreProvision(stock,ordered){
    const allProducts = {};
    
    for(let i = 0; i < stock.length;i+= 2){
        allProducts[stock[i]] = Number(stock[i + 1])
    }
    for(let i = 0; i < ordered.length;i+= 2){
      
      if(allProducts.hasOwnProperty(ordered[i])){
        allProducts[ordered[i]] += Number(ordered[i + 1]);
      }
      else{
        allProducts[ordered[i]] = Number(ordered[i + 1]);
      }
      
   }
   for (const element in allProducts) {
    console.log(`${element} -> ${allProducts[element]}`)
   }
  
  }