document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const Measurements = {
        km:1000,
        m:1,
        cm:0.01,
        mm:0.001,
        mi: 1609.34,
        yrd:0.9144,
        ft:0.3048,
        in:0.0254};

   document.querySelector('#convert').addEventListener('click', e=>{
    e.preventDefault();

  
    const inputDistance  = Number(document.querySelector('#inputDistance').value);
    const inputUnit = document.querySelector('#inputUnits').value;
    const outputUnit = document.querySelector('#outputUnits').value;
    
    if (inputDistance == 0) return;
    

    const distanceInMeters = inputDistance * Measurements[inputUnit];
   const convertedDistance = distanceInMeters / Measurements[outputUnit];

   document.querySelector('#outputDistance').value = convertedDistance.toFixed(4);
   });
}