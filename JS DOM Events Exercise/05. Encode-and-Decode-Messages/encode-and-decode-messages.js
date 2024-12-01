document.addEventListener('DOMContentLoaded', solve);

function solve() {
document.querySelector('#encode').addEventListener('submit', e=>{
   e.preventDefault();
    
   const inputEl = e.target.querySelector('textarea');
   const message = inputEl.value;

   const encodeMessage = [...message].reduce((result,char) => {
    result += String.fromCharCode(char.charCodeAt(0) + 1);
    return result;
   },'');

   const outputEl = document.querySelector('#decode textarea')
   outputEl.textContent = encodeMessage;
   inputEl.value = '';
   });


 document.querySelector('#decode').addEventListener('submit', e=>{
   e.preventDefault();
       const inputEl = e.target.querySelector('textarea');
       const decodeMessage = [...inputEl.value].reduce((result,char) =>{
       result += String.fromCharCode(char.charCodeAt(0) - 1);
       return result;
       },'')
       inputEl.textContent = decodeMessage;
       const decodeButton = document.querySelector('#decode button');
       decodeButton.disabled = true; 
  });
    
}