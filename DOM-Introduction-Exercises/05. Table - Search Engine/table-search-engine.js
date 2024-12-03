function SearchEngine() {
    const AllStudents = document.querySelectorAll('tbody tr');
    const searchStr = document.querySelector('#searchField').value.toLowerCase().trim();

    if (searchStr == '') return;

    AllStudents.forEach(student => {
        student.classList.remove('select');

        if (student.textContent.toLowerCase().includes(searchStr)) {
            student.classList.add('select');

        }

    });
}
