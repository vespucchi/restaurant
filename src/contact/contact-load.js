import './contact-style.css';

export default function loadContactContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const left = document.createElement('div');
    const right = document.createElement('div');

    main.classList.add('contact');
    section.classList.add('contact');
    left.classList.add('left-contact');
    right.classList.add('right-contact');

    const hq = document.createElement('div');
    hq.classList.add('info-contact');
    const h5_1 = document.createElement('h5');
    const p_1 = document.createElement('p');
    h5_1.textContent = 'headquarters';
    p_1.textContent = '113 Michigan Avenue Chicago, IL 60661';
    hq.append(h5_1, p_1);

    const sp = document.createElement('div');
    sp.classList.add('info-contact');
    const h5_2 = document.createElement('h5');
    const p_2 = document.createElement('p');
    h5_2.textContent = 'headquarters';
    p_2.textContent = 'help@cafe.com<br>+1 777 222 1234';
    sp.append(h5_2, p_2);

    const icons = document.createElement('div');
    icons.classList.add('social-contact');

    const a1 = document.createElement('a');
    const icn1 = document.createElement('i');

    icn1.alt = 'Facebook icon';
    icn1.src = './facebook.svg';

    a1.appendChild(icn1);

    const a2 = document.createElement('a');
    const icn2 = document.createElement('i');

    icn2.alt = 'Instagram icon';
    icn2.src = './instagram.svg';

    a2.appendChild(icn2);
    icons.append(a1, a2);

    left.append(hq, sp, icons);

    // right side
    const title = document.createElement('h2');
    title.classList.add('title-contact');

    const form = document.createElement('form');
    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    label1.value = 'name';
    input1.type = 'text';
    input1.placeholder = 'John Diaz';
    input1.name = 'name';

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    label2.value = 'email';
    input2.type = 'email';
    input2.placeholder = 'john@email.com';
    input2.name = 'email';

    const label3 = document.createElement('label');
    const input3 = document.createElement('input');
    label3.value = 'comment';
    input3.type = 'text';
    input3.placeholder = 'Type here...';
    input3.name = 'comment';

    form.append(label1, input1, label2, input2, label3, input3);

    const btn = document.createElement('button');
    btn.classList.add('submit');
    btn.textContent = 'Submit';

    right.append(title, form, btn);
    section.append(left, right);
    main.append(section);

    return main;
}