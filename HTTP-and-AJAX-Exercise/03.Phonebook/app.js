function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const btnLoad = document.querySelector('#btnLoad');
    const btnCreate = document.querySelector('#btnCreate');
    const ListOfNumbers = document.querySelector('#phonebook');
    const inputs = document.querySelectorAll('input[type="text"]');

   
    function loadPhonebook() {
        ListOfNumbers.textContent = ''; 
        fetch(baseUrl)
            .then(response => response.json())
            .then(results => {
                Object.values(results).forEach( result => {
                    const newLi = document.createElement('li');
                    const btnDelete = document.createElement('button');
                    newLi.textContent = `${result.person}: ${result.phone}`;
                    btnDelete.textContent = 'Delete';

                    btnDelete.addEventListener('click', () => {
                        fetch(baseUrl + '/' + result._id, {
                            method: 'DELETE'
                        })
                        .then(result => newLi.remove())
                        .catch(error => console.error('Error: ', error));
                    });

                    newLi.append(btnDelete);
                    ListOfNumbers.append(newLi);
                });
            })
            .catch(error => console.error('Error: ', error));
    }

    btnLoad.addEventListener('click', loadPhonebook);
    
    btnCreate.addEventListener('click', () => {
        const [person, phone] = [...inputs].map(el => el.value);

        if (!person || !phone) return;

        const body = { person, phone };

        fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(() => {
                loadPhonebook();
            })
            .catch(error => console.error('Error: ', error));
    });

    loadPhonebook();
}

attachEvents();
