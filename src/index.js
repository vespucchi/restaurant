import loadMainContent from './home-load.js';
import loadMenuContent from './menu-load.js';
import './index-style.css';

const body = document.querySelector('body');

body.appendChild(loadMenuContent());

const navItems = document.querySelectorAll('.nav-item');
const main = document.querySelector('main');

navItems.forEach(item => {
    item.addEventListener('click', e => {
        main.classList.remove('home', 'menu', 'about', 'contact');
        main.textContent = '';

        if (item.textContent === 'Home') {
            main.classList.add('home');
            body.append(loadMainContent());
        }
        else if(item.textContent === 'Menu') {
            main.classList.add('menu');
            body.append(loadMenuContent());
        };
    })
})