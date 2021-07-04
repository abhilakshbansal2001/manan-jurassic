import fullPage from './main.js';

import feature from './feature.js';
import nav from '../nav.js';
import testimonial from './testimonial.js';

fullPage();

nav();
feature();
testimonial();

window.addEventListener("load" , () => {
    let loader = document.querySelector(".loader");

    setTimeout(() =>{
        gsap.to(loader , {duration:0.3 , opacity:0})
        gsap.to(loader, {duration:0 , display:"none"});

    },1000)
})


