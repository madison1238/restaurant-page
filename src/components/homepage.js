import homepageImg from '../images/homepage-food.png';
import loadMenu from './menu';
import { clearContent } from '..';
import './homepage.css'

export default function loadHome(){
    const body = document.querySelector('body');
    body.id = 'homepage-body';

    loadHTML();
    loadListeners()

}

function loadListeners(){
    const menuBtn = document.querySelector('#menu-btn-home')
    menuBtn.addEventListener('click', ()=> {
        clearContent();
        loadMenu();
    })
}

function loadHTML(){


    const content = document.querySelector('#content');

    const textContainer = document.createElement('div');
    textContainer.id = 'text-content';

    const restaurantName = document.createElement('h3');
    restaurantName.id = 'name';
    restaurantName.textContent = 'Yummy';


    const span = document.createElement('span');
    span.textContent = ' Kitchen';
    span.classList.add('logo-color');

    restaurantName.appendChild(span);
    

    const tagLine = document.createElement('h1');
    tagLine.id = 'tag';
    tagLine.textContent = 'Delicious Dishes for Food Lovers';

    const description = document.createElement('p');
    description.id = 'description';
    description.textContent = "At Yummy Kitchen, we use fresh, sustainable ingredients to create meals that are both healthy and delicious. Every dish is made with care to nourish your body and satisfy your cravings."

    const exploreMenuBtn = document.createElement('button');
    exploreMenuBtn.id = 'menu-btn-home';
    exploreMenuBtn.textContent = 'Explore Menu →';

    textContainer.appendChild(restaurantName)
    textContainer.appendChild(tagLine);
    textContainer.appendChild(description);
    textContainer.appendChild(exploreMenuBtn);

    const imageContainer = document.createElement('div');
    imageContainer.id = 'img-content';

    const image = document.createElement('img');
    image.id = 'homepage-img'
    image.src = homepageImg;


    imageContainer.appendChild(image);

    content.appendChild(textContainer);
    content.appendChild(imageContainer);
    return content
}