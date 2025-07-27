

import './menu.css'

export default function loadMenu(){

    loadHTML();
    loadListeners();
    selectBtn('app-btn')
    
}

function loadHTML(){
    const body = document.querySelector('body');
    body.id = 'menu-body'

    const content = document.querySelector('#content');

    const menuPageCont = document.createElement('div');
    menuPageCont.id = 'menu-page-container';

    const textCont = document.createElement('div');
    textCont.id = 'text-cont';

    const header = document.createElement('h1');

    const text1 = document.createTextNode('Our menu is a carefully curated');
    const br = document.createElement('br');
    const text2 = document.createTextNode('selection of chef-crafted specialties');

    header.appendChild(text1);
    header.appendChild(br);
    header.appendChild(text2);

    textCont.appendChild(header);

    const buttonCont = document.createElement('div');
    buttonCont.id = 'button-cont';

    const appBtn = document.createElement('button');
    appBtn.id = 'app-btn';
    appBtn.textContent = 'Appetizers';

    const mainBtn = document.createElement('button');
    mainBtn.id = 'main-btn';
    mainBtn.textContent = 'Main Course';

    const desertBtn = document.createElement('button');
    desertBtn.id = 'desert-btn';
    desertBtn.textContent = 'Deserts';

    const drinkBtn = document.createElement('button');
    drinkBtn.id = 'drink-btn';
    drinkBtn.textContent = 'Drinks';

    const specialsBtn = document.createElement('button');
    specialsBtn.id = 'specials-btn';
    specialsBtn.textContent = 'Specials'

    buttonCont.appendChild(appBtn);
    buttonCont.appendChild(mainBtn);
    buttonCont.appendChild(desertBtn);
    buttonCont.appendChild(drinkBtn);
    buttonCont.appendChild(specialsBtn);

    const menuDisplayCont = document.createElement('div');
    menuDisplayCont.id = 'menu-display-cont';

    const glass = document.createElement('div');
    glass.id = 'glass';

    const menuItems = document.createElement('div');
    menuItems.id = 'menu-items';

    glass.appendChild(menuItems);
    menuDisplayCont.appendChild(glass)

    menuPageCont.appendChild(textCont);
    menuPageCont.appendChild(buttonCont);
    menuPageCont.appendChild(menuDisplayCont);

    content.appendChild(menuPageCont);
    return content;
}

function selectBtn(btn){

}

function loadListeners(){

}

function loadAppetizers(){

}

function loadMainCourse(){

}

function loadDeserts(){

}

function loadDrinks(){

}

function loadSpecials(){

}