/* ===== CAMBIO DE IDIOMA ===== */

let lang = 'es';

window.toggleLang = function(){

    lang = lang === 'es' ? 'en' : 'es';

    const btn = document.getElementById('lang-btn');

    if(btn){
        btn.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    document.documentElement.lang = lang;

    document
      .querySelectorAll('[data-es][data-en]')
      .forEach(el => {

          el.innerHTML =
            el.getAttribute(`data-${lang}`);

      });

};

/* ===== CURSOR ===== */

const cursor = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if(cursor && cursorRing){

    document.addEventListener('mousemove', e => {

        cursor.style.transform =
            `translate(${e.clientX}px, ${e.clientY}px)`;

        cursorRing.style.transform =
            `translate(${e.clientX}px, ${e.clientY}px)`;

    });

}

/* ===== MENU ===== */

const navDrawer = document.getElementById('nav-drawer');
const navOverlay = document.getElementById('nav-overlay');
const navItems = document.querySelectorAll('.nav-item');

window.toggleNav = function(){

    if(navDrawer){
        navDrawer.classList.toggle('active');
    }

    if(navOverlay){
        navOverlay.classList.toggle('active');
    }

};

window.closeNav = function(){

    if(navDrawer){
        navDrawer.classList.remove('active');
    }

    if(navOverlay){
        navOverlay.classList.remove('active');
    }

};

const sections = [
    'hero',
    'definicion',
    'historia',
    'newton',
    'circulo',
    'quote',
    'importancia',
    'autora',
    'momentos'
];

window.navIr = function(index){

    const target = document.getElementById(sections[index]);

    if(target){
        target.scrollIntoView({ behavior: 'smooth' });
    }

    navItems.forEach(item => item.classList.remove('active'));

    if(navItems[index]){
        navItems[index].classList.add('active');
    }

    closeNav();

};

/* ===== ANIMACIONES DE SCROLL ===== */     

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add('visible');

        } else {

            entry.target.classList.remove('visible');
        }

    }
    );

}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
    
});