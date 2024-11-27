function PascalOrCamelCase() {
  const textEl = document.querySelector('#text').value.toLowerCase().split(' ');
  const conventionEl =  document.querySelector('#naming-convention').value;
  const resultEl = document.querySelector('#result');

  if(textEl == '' || conventionEl == '') return

    switch(conventionEl){
    case 'Camel Case':
      resultEl.textContent = textEl[0] + textEl.slice(1)
      .map((word)=> word[0].toUpperCase() +  word.slice(1))
      .join('')
    break;
    case 'Pascal Case':
      resultEl.textContent = textEl.map( (word)=> word[0].toUpperCase() +  word.slice(1)).join('')

    break;
   
    default:
    resultEl.textContent = 'Error!';
    break;
    }
}