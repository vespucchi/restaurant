import './menu-style.css';

export default function loadMenuContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');

    main.classList.add('menu');
    section.classList.add('menu');

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
        const div1 = document.createElement('div');
        const image = document.createElement('image');

        div1.classList.add('first-col');
        div1.append(image);

        const div2 = document.createElement('div');
        const titleBox = document.createElement('div');
        const title = document.createElement('h3');
        const price = document.createElement('h3');
        const descBox = document.createElement('div');
        const desc = document.createElement('p');

        div2.classList.add('second-col');

        titleBox.classList.add('title-box');
        title.textContent = titleArray[i];
        price.textContent = priceArray[i];
        titleBox.append(title, price);

        descBox.classList.add('desc-box');
        desc.textContent = descArray[i];
        descBox.append(desc);

        div2.append(titleBox, descBox);
        section.append(div1, div2);
        main.append(section);
    }


    return main;
}