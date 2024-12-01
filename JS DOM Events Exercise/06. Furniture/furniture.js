document.addEventListener('DOMContentLoaded', solve)

function solve() {

 document.querySelector('#input').addEventListener('submit', e=>{
  e.preventDefault();
  const inputEl = e.target.querySelector('textarea');
  const ArrayOfStr = JSON.parse(inputEl.value)
  const ShopEl = document.querySelector('#shop tbody');
 
  ArrayOfStr.forEach(item => {

    const NewTr = document.createElement('tr');
    
    const imageTd = document.createElement('td');
    const img = document.createElement('img');
    img.setAttribute('src',item.img);
    imageTd.appendChild(img); 
    
  
    const nameTd = document.createElement('td');
    nameTd.textContent = item.name;

    const priceTd = document.createElement('td');
    priceTd.textContent = item.price;



    const decFactorTd = document.createElement('td');
    decFactorTd.textContent = item.decFactor;

    const MarkTd = document.createElement('td');
    const MarkP = document.createElement('input');
    MarkP.setAttribute('type','checkbox');
    MarkTd.appendChild(MarkP);

    

    NewTr.append(
      imageTd,
      nameTd,
      priceTd,
      decFactorTd,
      MarkTd
    );
    ShopEl.appendChild(NewTr);

  });
  
 });
   const shopFormEl = document.querySelector('#shop').addEventListener('submit',e =>{
   e.preventDefault();
   
   const outputEl = e.target.querySelector('textarea');

   const data =[... document.querySelectorAll('table tbody tr:has(input:checked)')]
          .map(el => ({
            name: el.children[1].textContent.trim(),
            price: Number(el.children[2].textContent),
            decFactor:Number(el.children[3].textContent)
          }));

          let output = `Bought furniture: ${data.map(el => el.name).join(', ')}\n`
          output += `Total price: ${data.reduce((result, el) => result += el.price,0)}\n`
          output += `Average decoration factor: ${data.reduce((result, el) => result += el.decFactor, 0) / data.length}\n`
 
          outputEl.value = output;
        }); 
}