import 'normalize.css';
import './index-style.css';
import loadMainContent from '../home/home-load.js';
import loadMenuContent from '../menu/menu-load.js';
import loadContactContent from '../contact/contact-load.js';
import loadAboutContent from '../about/about-load.js';



const body = document.querySelector('body');

body.appendChild(loadMainContent());

const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

navItems.forEach(item => {
    item.addEventListener('click', e => {
        main.classList.remove('home', 'menu', 'about', 'contact');
        main.textContent = '';

        if (item.dataset.index === '1') {
            main.classList.add('home');
            body.append(loadMainContent());
        }
        else if (item.dataset.index === '2') {
            main.classList.add('menu');
            body.append(loadMenuContent());
        }
        else if (item.dataset.index === '3') {
            main.classList.add('about');
            body.append(loadAboutContent());
        }
        else if (item.dataset.index === '4') {
            main.classList.add('contact');
            body.append(loadContactContent());
        };
        

    })
})