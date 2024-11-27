function ListOfNames(arr){
    arr
    .sort((a,b) => a.localeCompare(b))
    .forEach(function(word,index){
        console.log(`${index+1}.${word}`)
    });

}