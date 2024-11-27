function HellsKitchen() {
   const arrOfStr = document.querySelector('#inputs textarea');
   const bestRestaurant = document.querySelector('#bestRestaurant p');
   const bestworkers = document.querySelector('#workers p');

   if(! arrOfStr) return;
   
   const restorants = JSON.parse(arrOfStr.value)
      .reduce((result,restorant) =>{
       const [restorantName,workersData] = restorant.split(' - ');

       const workers = workersData.split(', ')
       .map( worker => {

        const [name,salary] = worker.split(' ');

        return {name,salary: Number(salary)};
       });

       if( ! result.hasOwnProperty(restorantName)){
           result[restorantName] = {
               workers: [],
           };
       }
       result[restorantName].workers.push(...workers);

       return result;

   },{});

      //Average salary
      function getAvgSalary(allRestorantsData){
         const allSalaries = allRestorantsData.workers.reduce((salaries,w)=> {
         return salaries + Number(w.salary)
       },0)
         return allSalaries / allRestorantsData.workers.length;
      }   

      //order with highest average salary
      const [restauranbestKey] = Object.keys(restorants)
      .sort((a,b) => getAvgSalary(restorants[b]) - getAvgSalary(restorants[a]))

      const bestWorkers = restorants[restauranbestKey].workers.toSorted((a,b) => b.salary - a.salary)
     
      bestRestaurant.textContent += `Name: ${restauranbestKey} `;
      bestRestaurant.textContent += `Average Salary: ${getAvgSalary(restorants[restauranbestKey]).toFixed(2)} `; 
      bestRestaurant.textContent += `Best Salary: ${bestWorkers[0].salary.toFixed(2)}`;
   
      bestworkers.textContent = bestWorkers.map(w => `Name: ${w.name} With Salary: ${w.salary}`).join(' ')
} 