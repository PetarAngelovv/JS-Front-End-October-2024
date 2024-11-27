function OddOccurrences(input){ 
    input = input.toLowerCase().split(' ')
        const matched = input.reduce((matched,word) => ({...matched,[word]: 0}),{});

     input.forEach(word => {
        if(matched.hasOwnProperty(word)) matched[word]++;
     });
     let result = '';
      Object.entries(matched)
     .sort((a,b) => b[1]-a[1])
     .filter(element => element[1] % 2 != 0)
     .forEach((key)=>result += key[0] + ' ')
      console.log(result)
}
