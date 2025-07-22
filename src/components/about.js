import foodImgSRC from '../images/food-abt-page.jpg'
import chefImgSRC from '../images/chef-abt-page.jpg'
import restaurantImgSRC from '../images/restaurant-abt-page.jpg'

import './about.css';

export default function loadAbout(){
    const body = document.querySelector('body')
    body.id = 'about-body'

    const content = document.querySelector('#content');

    const abtContainer = document.createElement('div');
    abtContainer.id = 'abt-container'

    const abtTextContent = document.createElement('div');
    abtTextContent.id = 'abt-text-content';

    const name = document.createElement('h3');
    name.textContent = 'About Yummy Kitchen';
    name.id = 'name'

    const tag = document.createElement('h1');
    tag.textContent = 'Feel-Good Flavors Made From the Best'
    tag.id = 'tag';

    const description = document.createElement('p');
    description.textContent = "At Yummy Kitchen, we are devoted to creating wholesome, luxurious cuisine that balances nourishment with refined flavor.";
    description.id = 'description';

    const listContainer = document.createElement('div');
    listContainer.id = 'list-container';

    const ul = document.createElement('ul');

    const list1 = document.createElement('li');
    list1.textContent = 'Online Order';
    list1.classList.add('point');

    const list2 = document.createElement('li');
    list2.textContent = 'Pre-Booking';
    list2.classList.add('point');

    const list3 = document.createElement('li');
    list3.textContent = 'Hygenic';
    list3.classList.add('point');

    const list4 = document.createElement('li');
    list4.textContent = '2 Michelin Stars';
    list4.classList.add('point');

    ul.appendChild(list1);
    ul.appendChild(list2);
    ul.appendChild(list3);
    ul.appendChild(list4);

    listContainer.appendChild(ul);

    const tableBtn = document.createElement('button');
    tableBtn.textContent = 'Reserve Table';
    tableBtn.id = 'reserve-table-btn';

    abtTextContent.appendChild(name);
    abtTextContent.appendChild(tag);
    abtTextContent.appendChild(description);
    abtTextContent.appendChild(listContainer);
    abtTextContent.appendChild(tableBtn);


    const foodImg = document.createElement('img');
    foodImg.src = foodImgSRC;
    foodImg.id = 'food-img';

    const chefImg = document.createElement('img');
    chefImg.src = chefImgSRC;
    chefImg.id = 'chef-img';

    const restaurantImg = document.createElement('img');
    restaurantImg.src = restaurantImgSRC;
    restaurantImg.id = 'restaurant-img';

    abtContainer.appendChild(foodImg);
    abtContainer.appendChild(abtTextContent);
    abtContainer.appendChild(chefImg);
    abtContainer.appendChild(restaurantImg);

    content.appendChild(abtContainer);
}