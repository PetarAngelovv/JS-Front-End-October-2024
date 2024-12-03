function Movies(input){

    const movies= {};
  
    input.forEach((element) => {
     if(element.includes('addMovie'))
      {
      const [_,name] = element.split('addMovie ');
     movies[name]= { name }
      }
  
     else if(element.includes('directedBy'))
      {
      const [name,director] = element.split(' directedBy ');
      if( ! movies.hasOwnProperty(name)) movies[name]= {};
      movies[name].director= director;
      }
     else if(element.includes('onDate'))
      {
           const [name,date] = element.split(' onDate ');
           if( ! movies.hasOwnProperty(name)) movies[name] = {};
           movies[name].date = date;
      }
    });
  
    for (const movie in movies) {
      if(Object.keys(movies[movie]).length > 2) console.log(JSON.stringify(movies[movie]))
    }
   
  }