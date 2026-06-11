document.addEventListener('DOMContentLoaded', () => {

  /* ===== GALAXY BACKGROUND OPTIMIZADO ===== */

  const canvas = document.getElementById('galaxy');

  if(canvas){

    const ctx = canvas.getContext('2d');

    let w,h;
    let stars=[];

    function resize(){
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createStars(){

      stars=[];

      const total = window.innerWidth < 768 ? 40 : 100;

      for(let i=0;i<total;i++){

        stars.push({
          x:Math.random()*w,
          y:Math.random()*h,
          size:Math.random()*2+1,
          speed:Math.random()*0.2+0.05
        });

      }

    }

    function animate(){

      ctx.clearRect(0,0,w,h);

      ctx.fillStyle="#05050F";
      ctx.fillRect(0,0,w,h);

      stars.forEach(star=>{

        star.y += star.speed;

        if(star.y > h){
          star.y = 0;
          star.x = Math.random()*w;
        }

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
        ctx.fillStyle="white";
        ctx.fill();

      });

      requestAnimationFrame(animate);

    }

    resize();
    createStars();
    animate();

    window.addEventListener('resize',()=>{
      resize();
      createStars();
    });

  }

  /* ===== SCROLL REVEAL ===== */

  const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

      if(entry.isIntersecting){

        entry.target.classList.add('visible');

      }

    });

  });

  document.querySelectorAll('.reveal').forEach(item=>{
    observer.observe(item);
  });

  /* ===== PARALLAX SUAVE ===== */

  const heroText = document.querySelector('.hero-bg-text');

  if(heroText){

    window.addEventListener('scroll',()=>{

      heroText.style.transform =
      `translateY(${window.scrollY*0.15}px)`;

    });

  }

  /* ===== CAMBIO DE IDIOMA ===== */

  let lang='es';

  window.toggleLang=function(){

    lang = lang === 'es' ? 'en' : 'es';

    const btn=document.getElementById('lang-btn');

    if(btn){
      btn.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    document.documentElement.lang = lang;

    document
      .querySelectorAll('[data-es][data-en]')
      .forEach(el=>{

        el.innerHTML =
          el.getAttribute(`data-${lang}`);

      });
      /* ===== CURSOR ===== */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => {
    cursor.style.transform     = `translate(${e.clientX}px, ${e.clientY}px)`;
    cursorRing.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });
}

  }
  
}
);