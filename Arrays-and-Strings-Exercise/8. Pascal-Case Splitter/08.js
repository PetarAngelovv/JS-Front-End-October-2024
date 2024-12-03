function PascalCaseSplitter(singleString){
    console.log(singleString.match(/[A-Z][a-z]*/g).join(', '));
}