function lockedProfile() {
  const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

  fetch(baseUrl)
  .then(response => response.json())
  .then(result =>{
    Object.values(result).forEach((element, index) => {

      const MainContainer = document.querySelector('#main');
      const profileContainer = document.createElement('div');
 
      profileContainer.classList.add('profile');
 
      profileContainer.innerHTML = `
         <img src="./iconProfile2.png" class="userIcon" />
         <label>Lock</label>
         <input type="radio" name="user${index + 1}Locked" value="lock" checked>
         <label>Unlock</label>
         <input type="radio" name="user${index + 1}Locked" value="unlock"><br>
         <hr>
         <label>Username</label>
         <input type="text" name="user${index + 1}Username" value="${element.username}"  disabled readonly/>
           <div id="user${index + 1}HiddenFields" style="display: none;">
           <hr>
           <label>Email:</label>
           <input type="email" name="user${index + 1}Email" value="${element.email}" disabled readonly />
           <label>Age:</label>
           <input type="number" name="user${index + 1}Age" value="${element.age}" disabled readonly />
            </div>
             <button>Show more</button>
           `
           MainContainer.appendChild(profileContainer);

        const lockRadio = profileContainer.querySelectorAll(`input[name="user${index + 1}Locked"]`);
        const btnShowMore = profileContainer.querySelector('button');

        btnShowMore.addEventListener('click', function() {
          toggleArticleContent(lockRadio, profileContainer, btnShowMore);
       });
     });
  })
  .catch(error => console.error("Error: ", error));

  function toggleArticleContent(lockRadio, profileContainer, btnShowMore) {

    lockRadio.forEach(radio =>{
    
      if ( ! radio.checked || radio.checked && ! radio.value.includes('un') ) return;

      const HiddenFields = profileContainer.querySelector('#user' + radio.name[4] + 'HiddenFields');

      if(btnShowMore.textContent =='Show more'){
        HiddenFields.style.display = 'block';
          btnShowMore.textContent = 'Hide It'
        }
        else{
          HiddenFields.style.display = 'none';
          btnShowMore.textContent = 'Show more'
        }
    });
   };
}

 


