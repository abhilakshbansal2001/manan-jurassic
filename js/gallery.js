import nav from './nav.js';
import modal from './modal.js';
import cursor from './cursor.js';
cursor();
nav();
modal();

window.addEventListener("load" , () => {
    let loader = document.querySelector(".loader");

    setTimeout(() =>{
        gsap.to(loader , {duration:0.3 , opacity:0})
        gsap.to(loader, {duration:0 , display:"none"});

    },1000)
})
