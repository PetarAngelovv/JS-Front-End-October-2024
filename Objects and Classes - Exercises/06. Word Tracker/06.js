function WordTracker(input){

  let searchedWords = input.shift().split(' ');

  const matched = searchedWords.reduce((matched,word) =>{
       matched[word] = 0;
       return matched;
  },{})

   input.forEach(word => {
      if(matched.hasOwnProperty(word)) matched[word]++;
    })

   Object
   .entries(matched)
   .sort((a, b) => b[1] - a[1])
   .forEach(([word,count]) => console.log(`${word} - ${count}`))
}