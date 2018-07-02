var buttonExit = document.querySelector('.exit-container');
var cardContainer = document.querySelector('.card-container');
var editorContainer = document.querySelector('.editor-container'); 

buttonExit.addEventListener('click', function(){
    cardContainer.classList.add('none');
    editorContainer.classList.remove('none');
})


//create card

var content = document.querySelector('.content');
var footer = document.querySelector('.footer');
var cardContainer = document.querySelector('.card-container');

var madeElement = function(parents, property){
    var element = document.createElement(property);
    parents.appendChild(element);
    return element;
}

var howmanyCards = function() {
    var cards = document.querySelectorAll('.card');
    return cards.length;
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
    
    
    var howMany = howmanyCards();
    
    content.style.width = howMany*100 + '%';
    
    var input = document.createElement('input');
    cardContainer.insertBefore(input, cardContainer.childNodes[0]) // ставлю input перед всеми элементами в card-container
    input.type = 'radio';
    input.name = 'toggle';
    input.id = 'btn-' + howMany;
    
    var label = madeElement(footer, 'label');
    label.htmlFor = 'btn-' + howMany;
    label.innerHTML = '-';
}

createCard('#7b4c84', 'Live conversations', 'Have a live, multilingual conversation in your own languag, across multiple devices.', 'center');

createCard('#16ab89', 'Phrasebooks', 'Use our verified translations and pronunciation guides to help you learn important phrases while traveling', 'center');