function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/messenger';

    const textAreaEl = document.querySelector('#messages');
    const inputsEl = document.querySelectorAll('#controls input[name]');

    const buttonSubmitEl = document.querySelector('#submit');
    const buttonRefreshEl = document.querySelector('#refresh');

    buttonSubmitEl.addEventListener('click', e =>{

    const [author, content] = [...inputsEl].map(el => el.value) 

     if( ! author || ! content) return

    const body = {author, content}

    fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(result =>{     
        buttonRefreshEl.click();
    })
    .catch(error => console.error('Error: ', error))
  });

   buttonRefreshEl.addEventListener('click',e =>{

    textAreaEl.textContent = '';
    
    fetch(baseUrl)
    .then(response => response.json())
    .then(messages =>{
        Object.values(messages).forEach(message=>{
        textAreaEl.textContent += `${message.author}: ${message.content}\n`
        });
        textAreaEl.textContent = textAreaEl.textContent.trimEnd();
    })
    .catch(error => console.error('Error: ', error));
  });

  buttonRefreshEl.click();
    
}

attachEvents();

