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
    card = document.createElement('div');
    content.appendChild(card);
    card.classList.add('card');
    card.style.backgroundColor = color;
    card.style.textAlign = align;
    
    var h1 = document.createElement('h1');
    card.appendChild(h1);
    h1.innerHTML = '<br>' + title;
    
    var h2 = document.createElement('h2');
    h2.innerHTML = text;
    card.appendChild(h2);
    
    var label = document.createElement('label');
    label.htmlFor = 'btn-5';
    footer.appendChild(label);
    label.innerHTML = '-';
}

/*
var createElement = function(name, parents, property){
    name = document.createElement(property);
    parents.appendChild(name);
} */

createCard('#7b4c84', 'Live conversations', 'Have a live, multilingual conversation in your own languag, across multiple devices.', 'center');