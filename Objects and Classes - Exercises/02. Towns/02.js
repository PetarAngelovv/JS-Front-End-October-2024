function Towns(input){
  input.forEach(element => {
    let [town,latitude,longitude] = element.split(' | ')
    latitude = Number(latitude).toFixed(2);
    longitude = Number(longitude).toFixed(2);
    console.log(`{ town: '${town}', latitude: '${latitude}', longitude: '${longitude}' }` )
  });
 }