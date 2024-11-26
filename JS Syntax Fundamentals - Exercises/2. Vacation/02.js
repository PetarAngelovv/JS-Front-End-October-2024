function ageGroups(peopleCount,group,day){
  let result;
  switch(group){
    case'Students':
    switch(day){
      case 'Friday': result = peopleCount * 8.45; break;
      case 'Saturday': result = peopleCount * 9.80; break;
      case 'Sunday': result = peopleCount * 10.46; break;
    }
    break;

    case'Business':
    if(peopleCount >= 100) peopleCount -= 10;
      switch(day){
        case 'Friday': result = peopleCount * 10.90; break;
        case 'Saturday': result = peopleCount * 15.60; break;
        case 'Sunday': result = peopleCount * 16; break;
      }
    break;
   
    case'Regular':
      switch(day){
        case 'Friday': result = peopleCount * 15; break;
        case 'Saturday': result = peopleCount * 20; break;
        case 'Sunday': result = peopleCount * 22.50; break;
      }
    break;
  }
  if(group == 'Students'&&  peopleCount >= 30 ) result *= 0.85;
  else if( group == 'Regular' && peopleCount >= 10 && peopleCount <= 20) result *= 0.95;
  console.log(`Total price: ${result.toFixed(2)}`);
}