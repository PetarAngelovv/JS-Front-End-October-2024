function loadingBar(Percent){
    let barLength = 10;
    let barFull = Math.round(Percent / barLength);
    let barEmpty = barLength - barFull;
   
    const before =Percent < 100 ? `${Percent}% ` : '100% Complete!\n';
    const progressBar =`[${'%'.repeat(barFull)}${'.'.repeat(barEmpty)}]\n`;
    const after =  Percent < 100 ? 'Still loading...' : '';
    console.log(before + progressBar + after)
}