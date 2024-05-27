import './home-style.css';

export default function loadMainContent() {
    const main = document.querySelector('main');
    const header = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const button = document.createElement('div');
    const btn = document.createElement('button');

    main.classList.add('home');

    header.classList.add('header');
    button.classList.add('button');
    btn.setAttribute('id', 'order');

    h1.textContent = 'Brewed to perfection.';
    h2.textContent = 'Every time.';
    btn.textContent = 'Order now';

    header.append(h1, h2);

    button.appendChild(btn);

    main.append(header, button);

    return main; 
}