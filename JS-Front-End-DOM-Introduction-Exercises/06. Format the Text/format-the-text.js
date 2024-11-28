function TextFormating() {
    const text = document.querySelector('#input').value.split('. ');
    const outputEl = document.querySelector('#output')
    const sentencePerPar = 3;

    const numberOfPar = Math.ceil(text.length / sentencePerPar);
    let output = '';
    for (let i = 0; i < numberOfPar; i++) {
        const p = i * numberOfPar;
        output += '<p>'
        output += `${text.slice(p, p + sentencePerPar).join('. ')}`
        output += '</p>'
    }
    outputEl.innerHTML = output

}