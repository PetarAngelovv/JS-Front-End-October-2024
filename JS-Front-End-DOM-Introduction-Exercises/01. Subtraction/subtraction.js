
function subtract() {
    const FirstNum = Number(document.querySelector('#firstNumber').value);
    const secondNum = Number(document.querySelector('#secondNumber').value);
    document.querySelector('#result').textContent = (FirstNum - secondNum);
}
