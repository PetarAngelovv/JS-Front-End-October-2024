document.addEventListener('DOMContentLoaded', solve);

function solve() {
   const formEl = document.querySelector('#task-input');
   const contentEl = document.querySelector('#content');

   formEl.addEventListener('submit', e=>{
    e.preventDefault();

    const StringsEl = formEl.querySelector('input[type="text"]').value.split(', ');
       
    StringsEl.forEach(element => {
             const newDivEl = document.createElement('div');
             const newParEl = document.createElement('p');
            
             newParEl.textContent = element;
             newParEl.style.display = 'none'

             newDivEl.appendChild(newParEl);
             newDivEl.addEventListener('click', e=>{

                e.target.querySelector('p').style.display = 'block';

             });
             contentEl.appendChild(newDivEl)
       });
    });  
}