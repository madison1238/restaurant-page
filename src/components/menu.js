

import './menu.css'

export default function loadMenu(){

    loadHTML();
    loadListeners();
    selectBtn('app-btn')
    loadAppetizers()
    
}



function selectBtn(btn){
 
}

function loadListeners(){
    const appetizerBtn = document.querySelector('#app-btn');
    appetizerBtn.addEventListener('click', ()=> {
        loadAppetizers();
        selectBtn()
    })

    const mainCourseBtn = document.querySelector('#main-btn');
    mainCourseBtn.addEventListener('click', ()=> {
        loadMainCourse();
        selectBtn()
    })

    const desertBtn = document.querySelector('#desert-btn');
    desertBtn.addEventListener('click', ()=> {
        loadDeserts();
        selectBtn();
    })

    const drinkBtn = document.querySelector('#drink-btn')
    drinkBtn.addEventListener('click', ()=> {
        loadDrinks();
        selectBtn();
    })

    const specialsBtn = document.querySelector('#specials-btn');
    specialsBtn.addEventListener('click', ()=> {
        loadSpecials();
        selectBtn();
    })

}



function makeItem( name, price, descriptionText){
    const itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');

    const item = document.createElement('h3')
    item.classList.add('item');
    item.textContent = `${name} . . . . . $${price}`;

    const description = document.createElement('p');
    description.classList.add('description');
    description.textContent = descriptionText;

    itemDescription.appendChild(item);
    itemDescription.appendChild(description);

    return itemDescription;

}



function loadAppetizers(){
    const menu = document.querySelector('#menu-items');
    menu.innerHTML = '';

    menu.appendChild(makeItem('Truffle-Infused Burrata & Heirloom Tomato Stack', 24, 'Creamy burrata layered with heirloom tomatoes, micro basil, and a black truffle balsamic glaze.' ))
    menu.appendChild(makeItem('Lobster Tempura Bites', 29, 'Crispy tempura-fried lobster medallions served with citrus aioli and yuzu ponzu drizzle.' ))
    menu.appendChild(makeItem('Duck Confit Spring Rolls', 21,'Slow-cooked duck wrapped in rice paper with julienned vegetables and served with hoisin-plum dipping sauce.' ))
    menu.appendChild(makeItem('Charred Octopus with Lemon-Garlic Emulsion', 26, 'Spanish octopus tentacle charred to perfection, served over white bean purée with pickled shallots.'))
    menu.appendChild(makeItem('Caviar & Chive Potato Pillows', 34, 'Crispy mini potato puffs topped with crème fraîche, sturgeon caviar, and fresh chives.'))


}


function loadMainCourse(){
    const menu = document.querySelector('#menu-items');
    menu.innerHTML = '';

    menu.appendChild(makeItem('Seared Ahi Tuna with Citrus Fennel Salad', 42,'Line-caught ahi tuna, flash-seared and served atop a fresh shaved fennel and blood orange salad, finished with a yuzu vinaigrette.' ))
    menu.appendChild(makeItem('Herb-Crusted Rack of Lamb', 54, 'Locally sourced lamb crusted in rosemary, thyme, and Dijon, served with a garlic-infused potato purée and charred seasonal vegetables. ' ))
    menu.appendChild(makeItem('Pan-Roasted Duck Breast with Cherry Reduction', 48, 'Free-range duck breast with a crisp skin, glazed in a tart cherry and red wine reduction, served over a bed of roasted root vegetables.'))
    menu.appendChild(makeItem('Grilled Branzino with Herb Couscou', 45,'Whole Mediterranean branzino, grilled and deboned, plated with lemon-herb couscous and a drizzle of fresh basil oil.' ))
}

function loadDeserts(){
    const menu = document.querySelector('#menu-items');
    menu.innerHTML = '';

    menu.appendChild(makeItem('Vanilla Bean Panna Cotta with Fresh Berry Compote', 16, 'Silky house-made panna cotta infused with Madagascar vanilla beans, topped with a seasonal compote of hand-picked blackberries, blueberries, and strawberries.' ))
    menu.appendChild(makeItem('Dark Chocolate Lava Cake with Tahitian Vanilla Ice Cream', 18, 'Warm, rich chocolate cake with a gooey molten center, paired with slow-churned vanilla bean ice cream and garnished with micro mint and edible gold leaf.'))
    menu.appendChild(makeItem('Pistachio & Olive Oil Cake with Rose Water Syrup', 17,'Moist pistachio sponge cake made with cold-pressed olive oil, lightly soaked in rose water syrup and served with fresh whipped cream and crushed pistachios.' ))
    menu.appendChild(makeItem('Caramelized Fig Pavlova with Local Honey Drizzle', 19, 'Crispy-on-the-outside, marshmallow-soft meringue topped with whipped mascarpone, roasted fresh figs, and a generous drizzle of organic wildflower honey.'))
}

function loadDrinks(){
    const menu = document.querySelector('#menu-items');
    menu.innerHTML = '';

    menu.appendChild(makeItem('Charred Pineapple & Ginger Fizz', 16, 'House-roasted pineapple puree blended with fresh ginger syrup, lime juice, and tonic, topped with a pineapple leaf and smoked salt rim.' ))
    menu.appendChild(makeItem('Blackberry Sage Elixir', 15, 'Locally sourced blackberries shaken with hand-picked sage, raw honey, and lemon, topped with a splash of soda for a vibrant botanical twist.' ))
    menu.appendChild(makeItem('Blood Orange Sparkling Tea', 17, 'Fresh-squeezed blood orange juice combined with chilled jasmine green tea, a hint of agave, and champagne-style bubbles. Garnished with a dehydrated citrus wheel.' ))
    menu.appendChild(makeItem('Lavender Lemonade Spritz', 13, 'Cold-pressed lemon juice sweetened with house-made lavender syrup and topped with sparkling mineral water. Served over crushed ice with edible flowers.'))

}

function loadSpecials(){
    const menu = document.querySelector('#menu-items');
    menu.innerHTML = '';

    menu.appendChild(makeItem('Truffle-Infused Wagyu Medallions', 72, 'Tender A5-grade Wagyu beef medallions pan-seared in white truffle butter, topped with microgreens and shaved black truffle. Served over a bed of rosemary-garlic mashed heirloom potatoes and a red wine reduction made with fresh shallots.' ))
    menu.appendChild(makeItem('Lobster & Saffron Risotto', 64, 'Fresh-caught Atlantic lobster tail, gently poached and nestled in a creamy risotto infused with hand-harvested saffron, white wine, and Parmigiano-Reggiano. Finished with lemon zest, garden peas, and a drizzle of herb oil.'))
    menu.appendChild(makeItem('Wild Mushroom & Burrata Tartlet', 58,'A delicate puff pastry tart filled with foraged wild mushrooms, caramelized leeks, and fresh thyme, topped with a creamy burrata and a balsamic fig glaze. Served with a petite salad of arugula, shaved fennel, and citrus vinaigrette.' ))
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