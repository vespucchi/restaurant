import './about-style.css';

export default function loadAboutContent() {
    const main = document.querySelector('main');
    const section = document.createElement('section');
    const text = document.createElement('div');
    const pic = document.createElement('div');
    const title = document.createElement('h2');
    const p = document.createElement('p');
    const img = document.createElement('img');

    main.classList.add('about');
    section.classList.add('about');
    text.classList.add('text-about');
    pic.classList.add('picture-about');

    title.classList.add('title-about');
    title.textContent = 'Our story';
    p.innerHTML = 'What started as shared hobby small talk, the team at COCO quickly grew obsessed perfecting the various ways we brewed coffee and decided to go all in. Over the years, we’ve developed, mass produced and sold our own blends to share with the world, and that’s how COCO came to be. <br><br>';
    p.innerHTML += 'With more than 200 shops across US as of 2023, we’re constantly working hard and innovating to bring the next chapter of COCO to all coffee lovers. In fact, we’re excited to share a few large developments as early as this year! <br> <br>';
    p.innerHTML += 'Using always fresh, 100% organic ingredients sourced from sustainable vendors, we stand behind our coffee, our ingredients and our technique - that’s COCO.';

    img.classList.add('pic-about');
    img.src = '../src/about/our-story.png';
    img.alt = 'Picture of a person pouring coffee';

    text.append(title, p);
    pic.append(img);
    section.append(text, pic);
    main.append(section);

    return main;
}