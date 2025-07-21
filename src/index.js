import '@fontsource/inter';
import './styles/global.css';

import loadHome from './components/homepage';

console.log('hiiiiii')


clearContent();
loadHome();

function clearContent(){
    const content = document.querySelector('#content');
    content.innerHTML = '';
}