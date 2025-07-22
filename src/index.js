import '@fontsource/inter';
import './styles/global.css';

import loadHome from './components/homepage';
import loadAbout from './components/about.js'

const homeBtn = document.querySelector('#home-btn')
const menuBtn = document.querySelector('#menu-btn');
const abtBtn = document.querySelector('#abt-btn');
const reserveBtn = document.querySelector('#reserve-btn')

homeBtn.addEventListener('click', () => {
    clearContent();
    loadHome();
})

abtBtn.addEventListener('click', () => {
    clearContent();
    loadAbout();
})


function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

loadHome();