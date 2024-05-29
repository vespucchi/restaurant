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
const burgerBtn = document.querySelector(".burger-button");
const closeBtn = document.querySelector(".close-btn");
const nav = document.getElementById("items");

const toggleNavbar = () => {
    nav.classList.toggle('show');
    burgerBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
};

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
            toggleNavbar();

            body.append(loadMenuContent());
        }
        else if (item.dataset.index === '3') {
            main.classList.add('about');
            toggleNavbar();

            body.append(loadAboutContent());
        }
        else if (item.dataset.index === '4') {
            main.classList.add('contact');
            toggleNavbar();

            body.append(loadContactContent());
        };
    })
})

burgerBtn.addEventListener('click', () => {
    toggleNavbar();
});

closeBtn.addEventListener('click', () => {
    toggleNavbar();
});

main.addEventListener('click', () => {
    if(nav.classList.contains('show')) {
        toggleNavbar();
    }
});