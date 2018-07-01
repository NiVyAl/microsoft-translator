var buttonExit = document.querySelector('.exit-container');
var cardContainer = document.querySelector('.card-container');
var editorContainer = document.querySelector('.editor-container'); 

buttonExit.addEventListener('click', function(){
    cardContainer.classList.add('none');
    editorContainer.classList.remove('none');
})


var content = document.querySelector('.content');
var footer = document.querySelector('.footer');

var createCard = function(color, title, text, align) {
    var card = document.createElement('div');
    content.appendChild(card);
    card.classList.add('card');
   // card.classList.add(name);
    card.backgroundColor = color;
    
    var h1 = document.createElement('h1');
    card.appendChild(h1);
    
    h1.innerHTNL = title;
    
    var h2 = card.appendChild('h2');
    h2.innerHTML = text;
    
    
    var label = footer.appendChild('label');
    label.for = 'btn-5';
    label.innerHTML = '-';
}

var createElement = function(name, parents, property){
    name = document.createElement(property);
    parents.appendChild(name);
}

createCard('#7b4c84', 'hi', 'gfjdkd', 'center');