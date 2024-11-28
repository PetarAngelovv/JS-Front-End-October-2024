function NumberConvertor() {
    const input = Number(document.querySelector('#input').value);
    const toEl = document.querySelector('#selectMenuTo').value.toLowerCase();
    const result = document.querySelector('#result');
    if (input == '') return;

    if (toEl == "binary") {
        result.value = input.toString(2);
    }
    else if (toEl == "hexadecimal") {
        result.value = input.toString(16).toUpperCase();
    }

}