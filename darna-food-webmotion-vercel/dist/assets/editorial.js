/* Editorial art direction inspired by the supplied Roast Ritual and Noiré layouts.
   Existing copy, catalogue, pricing, language and commerce handlers are retained. */
(()=>{
const $=s=>document.querySelector(s);
const defs=document.createElement('div');defs.setAttribute('aria-hidden','true');defs.innerHTML='<svg width="0" height="0" style="position:absolute"><defs><clipPath id="editorial-curve" clipPathUnits="objectBoundingBox"><path d="M.24 0H1V1H.05C.32 .73,-.07 .33,.24 0Z"/></clipPath></defs></svg>';document.body.append(defs);
const journey=$('#darna-journey');$('#histoire').after(journey);
const intro=document.createElement('div');intro.className='signature-intro';const signature=$('#signature .wrap');[...signature.children].filter(n=>n.id!=='sig').forEach(n=>intro.append(n));signature.prepend(intro);
const storyPhoto=$('.story>img'),collage=document.createElement('div');collage.className='editorial-collage';collage.innerHTML='<figure class="collage-main"></figure><figure class="collage-detail"><img src="assets/photo-0.webp" alt="Une table marocaine à partager" loading="lazy"></figure>';storyPhoto.before(collage);collage.querySelector('.collage-main').append(storyPhoto);
const resaIntro=$('#resa .grid>div');const photo=document.createElement('figure');photo.className='reservation-photo';photo.innerHTML='<img src="assets/photo-1.webp" alt="La lumière et les zelliges du patio" loading="lazy">';resaIntro.append(photo);
const footerWord=document.createElement('div');footerWord.className='footer-wordmark';footerWord.textContent='Darna Food';footerWord.setAttribute('aria-hidden','true');$('footer').prepend(footerWord);
function polish(){const title=$('.hero h1');title.classList.add('editorial-title');const words=title.querySelectorAll('.word-clip');words.forEach((w,i)=>w.classList.toggle('editorial-italic',i===words.length-1));$('.hero-seal').href='#darna-journey';$('.hero-seal b').textContent=L==='ar'?'مرحبا':L==='en'?'Marhba':'Marhba';$('.scroll-cue').href='#signature';}
const prev=setLang;setLang=function(l){prev(l);polish()};polish();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('editorial-visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.editorial-collage,.reservation-photo,.signature-intro,.footer-wordmark').forEach(e=>observer.observe(e));
})();
