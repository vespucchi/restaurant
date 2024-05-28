import './menu-style.css';

export default function loadMenuContent() {
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const left = document.createElement('div');
    const right = document.createElement('div');

    body.classList.add('menu');
    main.classList.add('menu');
    section.classList.add('menu');
    left.classList.add('left');
    right.classList.add('right');

    const titleArray = [
        'Mocha',
        'Latte',
        'Cappuccino',
        'Americano'
    ]

    const priceArray = ['$9', '$8', '$8', '$7'];

    const descArray = [
        'Brewed for cozy atmospheres, our hearty and rustic blend is reminiscent of a cabin fireplace.',
        'Crafted with precision using a balanced blend of coffee and milk, a feast for the senses.',
        'Perfect balance of espresso, milk and a cinnamon twist, just enough to wake the taste buds.',
        'Sophisticated take on a classic coffee experience, made with the finest 100% organic beans.'
    ]
    
    for(let i = 0; i < 4; i++) {
        const infoDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const title = document.createElement('h3');
        const price = document.createElement('h3');
        const desc = document.createElement('p');
        const image = document.createElement('img');

        infoDiv.classList.add('coffee-info');
        titleDiv.classList.add('coffee-title');
        image.classList.add('mugs');

        title.textContent = titleArray[i];
        price.textContent = priceArray[i];
        desc.textContent = descArray[i];
        image.src = `../src/coffe-mugs (${i + 1}).png`;

        titleDiv.append(title, price);
        infoDiv.append(titleDiv, desc);
        right.append(infoDiv);
        left.append(image);
        section.append(left, right);
        main.append(section);
    }

    return main;
}