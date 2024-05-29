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
    p_1.innerHTML = '113 Michigan Avenue<br>Chicago, IL 60661';
    hq.append(h5_1, p_1);

    const sp = document.createElement('div');
    sp.classList.add('info-contact');
    const h5_2 = document.createElement('h5');
    const p_2 = document.createElement('p');
    h5_2.textContent = 'support';
    p_2.innerHTML = 'help@cafe.com<br>+1 777 222 1234';
    sp.append(h5_2, p_2);

    const icons = document.createElement('div');
    icons.classList.add('social-contact');

    const a1 = document.createElement('a');
    const icn1 = document.createElement('img');

    icn1.alt = 'Facebook icon';
    icn1.src = '../src/contact/facebook.svg';
    icn1.height = '26';

    a1.appendChild(icn1);

    const a2 = document.createElement('a');
    const icn2 = document.createElement('img');

    icn2.alt = 'Instagram icon';
    icn2.src = '../src/contact/instagram.svg';
    icn2.height = '26';

    a2.appendChild(icn2);
    icons.append(a1, a2);

    left.append(hq, sp, icons);

    // right side
    const title = document.createElement('h3');
    title.classList.add('title-contact');
    title.textContent = 'Lets chat.';

    const form = document.createElement('form');
    const name = document.createElement('div');
    name.classList.add('name-div');
    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    label1.for = 'name';
    label1.textContent = 'name'
    input1.type = 'text';
    input1.placeholder = 'John Diaz';
    input1.name = 'name';
    name.append(label1, input1);

    const email = document.createElement('div');
    email.classList.add('email-div');
    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    label2.for = 'email';
    label2.textContent = 'email';
    input2.type = 'email';
    input2.placeholder = 'john@email.com';
    input2.name = 'email';
    email.append(label2, input2);

    const comment = document.createElement('div');
    comment.classList.add('comment-div');
    const label3 = document.createElement('label');
    const input3 = document.createElement('textarea');
    label3.for = 'comment';
    label3.textContent = 'comment';
    input3.placeholder = 'Type here...';
    input3.name = 'comment';
    comment.append(label3, input3);

    form.append(name, email, comment);

    const btn = document.createElement('button');
    btn.classList.add('submit-form');
    btn.textContent = 'Submit';

    right.append(title, form, btn);
    section.append(left, right);
    main.append(section);

    return main;
}