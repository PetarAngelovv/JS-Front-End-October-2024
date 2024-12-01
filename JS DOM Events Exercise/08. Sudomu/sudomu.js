document.addEventListener('DOMContentLoaded', solve);

function solve() {

const formEl = document.querySelector('#solutionCheck');
const outputEl = document.querySelector('#check');
let status = '';
formEl.addEventListener('submit', e=>{
    e.preventDefault();

    const rows = e.target.querySelectorAll('tbody tr');
    rows.forEach(row => {
       const values = [...row.children].map(el => el.children[0].value);
       const duplicates = values.filter((item,index) => values.indexOf(item) !== index)
       if(duplicates.length > 0) status += '0';
       else status += '1';
    });
    status += 'x'
    for(let i = 1; i <= 3; i++){
        const column = [...e.target.querySelectorAll(`tbody tr td:nth-child(${i})`)].map(el => el.children[0].value)
      const duplicates = column.filter((item,index) => column.indexOf(item) !== index);
      if(duplicates.length > 0) status += '0';
      else status += '1';
    
    }
       if(status === '111x111'){
        outputEl.classList.remove('fail');
        outputEl.classList.add('success')
        outputEl.textContent = 'Success!'
       }
       else{
        outputEl.classList.add('fail');
        outputEl.classList.remove('success')
        outputEl.textContent = 'Keep trying ...!'
       }
   
});
    const inputs = document.querySelectorAll('table input');
    inputs[0].value = 1 
    inputs[1].value = 2 
    inputs[2].value = 3 
    inputs[3].value = 2 
    inputs[4].value = 3 
    inputs[5].value = 1
    inputs[6].value = 3 
    inputs[7].value = 1 
    inputs[8].value = 2 
}