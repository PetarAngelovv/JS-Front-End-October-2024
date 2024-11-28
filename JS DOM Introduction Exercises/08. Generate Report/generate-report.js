function GenerateReport() {
    const checkBoxes = document.querySelectorAll(' thead tr input[type="checkbox"]')
    const rows = document.querySelectorAll('tbody tr')
    const result = document.querySelector('#output')

    const selectedData = Array.from(rows)
        .map(row => {
            const cells = row.querySelectorAll('td')
            const rowData = {};

            checkBoxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                    const columnName = checkBoxes[index].name;
                    rowData[columnName] = cells[index].textContent.trim()
                }
            });
            return rowData;
        })
    result.textContent = JSON.stringify(selectedData)
}