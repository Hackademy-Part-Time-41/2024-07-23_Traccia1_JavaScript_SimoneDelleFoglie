let inputList= document.getElementById('inputList');
let list= document.getElementById('list');
let formInput= document.getElementById('formInput');
let elimina= document.getElementById('Elimina');

formInput.addEventListener('submit', function (event) {
    event.preventDefault();
    let item=document.createElement('li');
    let button= document.createElement('button');
    button.textContent='ELIMINA'
    item.textContent= inputList.value;
    list.appendChild(item);
    list.appendChild(button);
    inputList.value= '';
    
    button.addEventListener('click', function (event1) {
        event1.preventDefault();
        list.removeChild(item);
        list.removeChild(button);
    })
})


