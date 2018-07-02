var buttonExit = document.querySelector('.exit-container');
var cardContainer = document.querySelector('.card-container');
var editorContainer = document.querySelector('.editor-container'); 

buttonExit.addEventListener('click', function(){
    cardContainer.classList.add('none');
    editorContainer.classList.remove('none');
})


var content = document.querySelector('.content');
var footer = document.querySelector('.footer');

var madeElement = function(parents, property){
    var element = document.createElement(property);
    parents.appendChild(element);
    return element;
}

var createCard = function(color, title, text, align) {
    card = madeElement(content, 'div');
    card.classList.add('card');
    card.style.backgroundColor = color;
    card.style.textAlign = align;
    
    var h1 = madeElement(card, 'h1');
    h1.innerHTML = '<br>' + title;
    
    var h2 = madeElement(card, 'h2');
    h2.innerHTML = text;
    
    var label = madeElement(footer, 'label');
    label.htmlFor = 'btn-5';
    label.innerHTML = '-';
}

createCard('#7b4c84', 'Live conversations', 'Have a live, multilingual conversation in your own languag, across multiple devices.', 'center');