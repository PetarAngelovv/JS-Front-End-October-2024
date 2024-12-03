function Inventory(input){
    const heroes = [];
    input.forEach(line => {
        const [name, level, ...items] = line.split(' / ') 
        Number(level);
        const hero = {name,level,items};
        heroes.push(hero);
    });
        heroes
       .sort((a,b) => a.level - b.level)
       .forEach(hero =>{
           console.log(`Hero: ${hero.name}`);
           console.log(`level => ${hero.level}`);  
           console.log(`items => ${hero.items}`);
       })
    }