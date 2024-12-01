document.addEventListener('DOMContentLoaded', solve);

function solve() {

       const ToAppend = document.querySelector('#menu')

       document.querySelector('form').addEventListener('submit', e=>{
        e.preventDefault();

         const textEl = e.target.querySelector('#newItemText').value;
         const valueEl = e.target.querySelector('#newItemValue').value;

         if(textEl.value == '' || valueEl.value == '') return;

         const optionEl = document.createElement('option');
        
         optionEl.textContent = textEl;

         optionEl.setAttribute('value', valueEl);

         ToAppend.append(optionEl);

         e.target.reset();
        })
}