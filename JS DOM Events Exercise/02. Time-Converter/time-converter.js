document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const timeConverter = {days:86400, hours: 3600, minutes:60, seconds:1 };

    const daysEl = document.querySelector('#days-input');
    const hoursEl =  document.querySelector('#hours-input');
    const minutesEl = document.querySelector('#minutes-input');
    const secondsEl = document.querySelector('#seconds-input'); 
 
       document.querySelectorAll('form').forEach(form =>{
        form.addEventListener('submit', handleSubmitEvent);
       });

       function handleSubmitEvent(e) {
       e.preventDefault();

       const currentInput = e.target.querySelector('input[type="number"]');
       const currentvalue = Number(currentInput.value);

       if(currentvalue < 1 ) return;

       const key = currentInput.getAttribute('id').split('-input')[0];

       const multiplier = timeConverter[key];
    
        updatevalues(currentvalue * multiplier);
        }
    function updatevalues(secondsAmount){
        daysEl.value = Number(secondsAmount/timeConverter.days).toFixed(2)
        hoursEl.value = Number(secondsAmount/timeConverter.hours).toFixed(2)
        minutesEl.value = Number(secondsAmount/timeConverter.minutes).toFixed(2)
        secondsEl.value = Number(secondsAmount/timeConverter.seconds).toFixed(2)
    }
 
}