const btn = document.querySelector('#toggle');
const aside = document.querySelector('aside');
const main = document.querySelector('main');

// btn.addEventListener('click', toggleStyles);
btn.onclick=  toggleStyles

function toggleStyles() {
    aside.classList.toggle('close');
    main.classList.toggle('open');
    btn.classList.toggle('active');

}
