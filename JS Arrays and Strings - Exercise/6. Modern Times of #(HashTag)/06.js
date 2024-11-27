function ModernTimeOfHashTag(sentence){
    let pattern = /#[A-Za-z]+/g;
    const captures = sentence.match(pattern);
    captures.forEach(function(element){
      console.log(element.substring(1));
    });
}