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

var forward = document.querySelector('.forward');
var backward = document.querySelector('.backward');

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
    
    var textContainer = madeElement(card, 'div')
    textContainer.innerHTML = '<h1><br>' + title + '</h1><h2>' + text + '</h2>'; 
    textContainer.classList.add('text-container');
    
    var howMany = howmanyCards();
    content.style.width = howMany*100 + '%';
    if (howMany > 1){
        var input = document.createElement('input');
        cardContainer.insertBefore(input, cardContainer.childNodes[0]) // ставлю input перед всеми элементами в card-container
        input.type = 'radio';
        input.name = 'toggle';
        input.id = 'btn-' + howMany;
        input.onclick = function(){
            nextHowMany(howMany);
        }
    }
    
    var label = madeElement(footer, 'label');
    label.htmlFor = 'btn-' + howMany;
    label.innerHTML = '-';

    createEditCard(color, title, text, align, howMany);
}

var tryButton = function() {
    var cards = document.querySelectorAll('.card');
    var lastCard = cards[cards.length-1];
    var textContainer = lastCard.querySelector('.text-container');
    var button = madeElement(textContainer, 'button');
    button.classList.add('background');
    button.innerHTML = 'Try it now';
    
}

// buttonNext
var nextHowMany = function(kol){
    //console.log('kol ' + kol);
    var f = kol+1;
    var b = kol-1;
    forward.htmlFor = 'btn-' + f;
    backward.htmlFor = 'btn-' + b;
}


var form = document.querySelector('form');

var createEditCard = function(color, title, text, align, howMany) {
    var cardEdit = madeElement(form, 'div');
    cardEdit.classList.add('card-edit');
    
    var cardName = madeElement(cardEdit, 'p');
    cardName.classList.add('card-name');
    cardName.innerHTML = 'Карточка ' + howMany;

    var part = new Array();
    for (var i=1; i<5; i++){
        part[i] = madeElement(cardEdit, 'div');
        part[i].classList.add('part');
        
        var label = madeElement(part[i], 'label');
        
        if (i==1){
            label.htmlFor = 'h1' + howMany;
            label.innerHTML = 'Заголовок';
            var input = madeElement(part[i], 'input');
            input.type="text";
            input.value = title;
            input.id = 'h1' + howMany;
        }
        if (i==2) {
            label.htmlFor = 'h2' + howMany;
            label.innerHTML = 'Текст';
            var textarea = madeElement(part[i], 'textarea');
            textarea.value = text;
            textarea.id = 'h2' + howMany;
        }
        
        if (i==3) {
            label.htmlFor = 'color' + howMany;
            label.innerHTML = 'цвет';
            var colorSquare = madeElement(label, 'div');
            colorSquare.classList.add('color-square');
            colorSquare.style.backgroundColor = color;
            var input = madeElement(part[i], 'input');
            input.type="text";
            input.value = color;
            input.id = 'color' + howMany;
        }
        
        if (i==4) {
            label.htmlFor = 'text-align' + howMany;
            label.innerHTML = 'Выравнивание текста';
            var select = madeElement(part[i], 'select');
            select.id = 'text-align' + howMany;
            select.innerHTML = '<optgroup>' + 
                                '<option value="left">Лево</option>' +
                                '<option value="right">Право</option>' +
                                '<option value="center">Центр</option>' +
                            '</optgroup>'
        }
    }
    
    var saveBtn = madeElement(cardEdit, 'button');
    saveBtn.id = 'saveBtn';
    saveBtn.innerHTML = 'Сохранить изменения';
}

createCard('#253352', 'Cortana Integration', 'Ask Cortana to start or join live conversation', 'left');

createCard('#208f34', 'Windows lnk', 'Write with your mouse, stylus or finger to translate your handwriting into over 60 languages', 'left');

createCard('#7b4c84', 'Live conversations', 'Have a live, multilingual conversation in your own languag, across multiple devices.', 'center');

createCard('#1484e1', 'Image translation', 'Translate the text on any image by selecting from your saved files', 'left');

createCard('#1c899c', 'Offline Language Packs', 'Download neural network-powered language packs for offline translation', 'left');

createCard('#16ab89', 'Phrasebooks', 'Use our verified translations and pronunciation guides to help you learn important phrases while traveling', 'center');

tryButton();


// card redactor
/*
var text = document.getElementById('text');
console.log(text.value); */

var inputText = document.getElementById('text');
form.addEventListener('submit', function() {
    console.log(inputText.value);
});

var editorOff = function() {
    cardContainer.classList.remove('none');
    editorContainer.classList.add('none');
}