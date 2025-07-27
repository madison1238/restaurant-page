import '@fontsource/inter';
import './styles/global.css';

/*import loadHome from './components/homepage';
import loadAbout from './components/about.js';
import loadReserve from './components/reserve';*/
import loadMenu from './components/menu';

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

menuBtn.addEventListener('click', () => {
    clearContent();
    loadMenu();
})

reserveBtn.addEventListener('click', () => {
    clearContent();
    loadReserve();
})


function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
}

