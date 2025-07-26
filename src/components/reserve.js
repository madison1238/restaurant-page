
import instaSRC from '../images/instagram.png'
import mapSRC from '../images/map.png'
import linkSRC from '../images/linkedin.png'
import phoneSRC from '../images/phone.png'
import tikSRC from '../images/tiktok.png'



import './reserve.css'


export default function loadReserve(){
    const body = document.querySelector('body')
    body.id = 'reserve-body'

    const content = document.querySelector('#content');

    const reserveCont = document.createElement('div')
    reserveCont.id = 'reserve-container'

    const textFormContainer = document.createElement('div')
    textFormContainer.id = 'text-form-container'

    textFormContainer.appendChild(loadText());
    textFormContainer.appendChild(loadForm());

    reserveCont.appendChild(textFormContainer);
    reserveCont.appendChild(loadInfo());

    content.appendChild(reserveCont)

}


function loadText(){
    const textContainer = document.createElement('div');
    textContainer.id = 'text-container';

    const heading = document.createElement('h1');
    heading.id = 'heading';
    heading.textContent = 'Reserve your table now and enjoy an unforgettable dining experience'

    textContainer.appendChild(heading);
    textContainer.appendChild(loadHours());

    return textContainer;;

}

function loadHours(){
    const openHoursContainer = document.createElement('div');
    openHoursContainer.id = 'open-hours-container';

    const openHours = document.createElement('h3');
    openHours.textContent = 'Open Hours'

    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';


    /*TUE - FRI HOURS*/
    const tueFriCont = document.createElement('div');
    tueFriCont.classList.add('hours');

    const tueFriDay = document.createElement('p');
    tueFriDay.textContent = 'Tue - Fri'

    const tueFriHours = document.createElement('p');
    tueFriHours.textContent = '10:00 AM - 9:00 PM'

    tueFriCont.appendChild(tueFriDay);
    tueFriCont.appendChild(tueFriHours);

    /*SAT SUN HOURS*/
    const satSunCont = document.createElement('div');
    satSunCont.classList.add('hours');

    const satSunDay = document.createElement('p');
    satSunDay.textContent = 'Sat - Sun'

    const satSunHours = document.createElement('p');
    satSunHours.textContent = '9:00 AM - 2:00PM'

    satSunCont.appendChild(satSunDay);
    satSunCont.appendChild(satSunHours);

    /*MONDAY HOURS */
    const monCont = document.createElement('div');
    monCont.classList.add('hours');

    const monDay = document.createElement('p');
    monDay.textContent = 'Mon'

    const monHours = document.createElement('p');
    monHours.textContent = 'Closed'

    monCont.appendChild(monDay);
    monCont.appendChild(monHours);

    hoursContainer.appendChild(tueFriCont);
    hoursContainer.appendChild(satSunCont);
    hoursContainer.appendChild(monCont);

    openHoursContainer.appendChild(openHours);
    openHoursContainer.appendChild(hoursContainer);

    return openHoursContainer;

}

function loadForm(){
    const form = document.createElement('form');
    form.action = ""

    /*NAME*/
    const nameCont = document.createElement('div');
    nameCont.classList.add('label-input');

    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'full-name';
    nameLabel.textContent = 'Full Name';

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'full-name';
    nameInput.id = 'full-name';
    nameInput.placeholder = 'e.g. John Smith';
    nameInput.required = true
    
    nameCont.appendChild(nameLabel);
    nameCont.appendChild(nameInput);


    /*EMAIL*/
    const emailCont = document.createElement('div');
    emailCont.classList.add('label-input');

    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'email';
    emailLabel.textContent =  'Email';

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'e.g. johnsmith@gmail.com';
    emailInput.required = true;


    emailCont.appendChild(emailLabel);
    emailCont.appendChild(emailInput);

    /*PHONE NUMBER*/
    const numberCont = document.createElement('div');
    numberCont.classList.add('label-input');


    const numberLabel = document.createElement('div');
    numberLabel.htmlFor = 'number'
    numberLabel.textContent = 'Phone Number';

    const numberInput = document.createElement('input');
    numberInput.type = 'tel';
    numberInput.name = 'number';
    numberInput.id = 'number';
    numberInput.placeholder = '+1(123)-456-7890';
    numberInput.required = true;

    numberCont.appendChild(numberLabel);
    numberCont.appendChild(numberInput);

    /*DATE*/

    const dtgCont = document.createElement('div');
    dtgCont.id = 'date-time-guest';

    const dateCont = document.createElement('div');
    dateCont.classList.add('label-input');

    const dateLabel = document.createElement('label');
    dateLabel.htmlFor = 'date';
    dateLabel.textContent = 'Date';

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.name = 'date';
    dateInput.id = 'date';
    dateInput.required = true;

    dateCont.appendChild(dateLabel);
    dateCont.appendChild(dateInput);

    /*TIME */

    const timeCont = document.createElement('div');
    timeCont.classList.add('label-input');

    const timeLabel = document.createElement('label');
    timeLabel.htmlFor = 'time';
    timeLabel.textContent = 'Time';

    const timeInput = document.createElement('input');
    timeInput.type = 'time';
    timeInput.id = 'time';
    timeInput.name = 'time';
    timeInput.required = true

    timeCont.appendChild(timeLabel);
    timeCont.appendChild(timeInput);

    /*GUESTS*/

    const guestCont = document.createElement('div');
    guestCont.classList.add('label-input');

    const guestsLabel = document.createElement('label');
    guestsLabel.htmlFor = 'guests';
    guestsLabel.textContent = 'Guests'

    const guestSelect = document.createElement('select');
    guestSelect.name = 'guests';
    guestSelect.id = 'guests';

    const option1 = document.createElement('option');
    option1.value = '1'
    option1.textContent = '1 Person'

    const option2 = document.createElement('option');
    option2.value = '2'
    option2.textContent = '2 People'

    const option3 = document.createElement('option');
    option3.value = '3'
    option3.textContent = '3 People'

    const option4 = document.createElement('option');
    option4.value = '4'
    option4.textContent = '4 People'

    const option5 = document.createElement('option');
    option5.value = '5'
    option5.textContent = '5 People'

    const option6 = document.createElement('option');
    option6.value = '6'
    option6.textContent = '6 People'

    const option7 = document.createElement('option');
    option7.value = '7'
    option7.textContent = '7 People'

    const option8 = document.createElement('option');
    option8.value = '8'
    option8.textContent = '8 People'

    const option9 = document.createElement('option');
    option9.value = '9+'
    option9.textContent = '9+ People'


    guestSelect.appendChild(option1);
    guestSelect.appendChild(option2);
    guestSelect.appendChild(option3);
    guestSelect.appendChild(option4);
    guestSelect.appendChild(option5);
    guestSelect.appendChild(option6);
    guestSelect.appendChild(option7);
    guestSelect.appendChild(option8);
    guestSelect.appendChild(option9);

    guestCont.appendChild(guestsLabel);
    guestCont.appendChild(guestSelect);

    dtgCont.appendChild(dateCont);
    dtgCont.appendChild(timeCont);
    dtgCont.appendChild(guestCont);


    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.id = 'submit-form'
    submitBtn.textContent = 'Reserve Now'

    form.appendChild(nameCont);
    form.appendChild(emailCont);
    form.appendChild(numberCont);
    form.appendChild(dtgCont);
    form.appendChild(submitBtn)

    return form;
}



function loadInfo(){
    const infoCont = document.createElement('div');
    infoCont.id = 'info-container'

    const name = document.createElement('h3');
    name.textContent = 'Yummy';

    const span = document.createElement('span');
    span.classList.add('logo-color')
    span.textContent = 'Kitchen'

    name.appendChild(span);

    const location = document.createElement('p');
    location.textContent = '472 Madison Town, West Virginia 23892';

    const iconCont = document.createElement('div');
    iconCont.id = 'icons'

    const instaLink = document.createElement('a');
    instaLink.href = '#';
    instaLink.classList.add('sm-link');

    const instaImg = document.createElement('img');
    instaImg.src = instaSRC;

    instaLink.appendChild(instaImg);


    const tiktokLink = document.createElement('a');
    tiktokLink.href = '#';
    tiktokLink.classList.add('sm-link');

    const tiktokImg = document.createElement('img');
    tiktokImg.src = tikSRC;

    tiktokLink.appendChild(tiktokImg);


    const linkedinLink = document.createElement('a');
    linkedinLink.href = '#';
    linkedinLink.classList.add('sm-link');

    const linkedinImg = document.createElement('img');
    linkedinImg.src = linkSRC;

    linkedinLink.appendChild(linkedinImg);

    const mapLink = document.createElement('a');
    mapLink.href = '#';
    mapLink.classList.add('sm-link');

    const mapImg = document.createElement('img');
    mapImg.src = mapSRC;

    mapLink.appendChild(mapImg);

    const phoneLink = document.createElement('a');
    phoneLink.href = '#';
    phoneLink.classList.add('sm-link');

    const phoneImg = document.createElement('img');
    phoneImg.src = phoneSRC;

    phoneLink.appendChild(phoneImg);

    iconCont.appendChild(instaLink)
    iconCont.appendChild(tiktokLink)
    iconCont.appendChild(linkedinLink);
    iconCont.appendChild(mapLink);
    iconCont.appendChild(phoneLink);

    infoCont.appendChild(name);
    infoCont.appendChild(location);
    infoCont.appendChild(iconCont)

    return infoCont;


}