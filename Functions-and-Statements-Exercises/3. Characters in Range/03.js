function CharactersInRange(firstLetter,secondLetter){
    const start = Math.min(firstLetter.charCodeAt(0),secondLetter.charCodeAt(0)) + 1;
    const end = Math.max(firstLetter.charCodeAt(0),secondLetter.charCodeAt(0));
    let result= '';
    for(let i = start; i< end;i++){
         result += String.fromCharCode(i) + ' ';
    }
    console.log(result)
}