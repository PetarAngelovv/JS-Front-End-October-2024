function Piccolo(input){ 
    const carsList = {};
    
    input.forEach(element => {
     const [direction, carNumber] = element.split(', ')
      if(direction == 'OUT' )  delete carsList[carNumber]
      else carsList[carNumber] = true;

    });
    const carNumbers = Object.keys(carsList);
    if(carNumbers.length == 0) console.log('Parking Lot is Empty');
    else console.log(carNumbers.sort().join('\n'))
} 