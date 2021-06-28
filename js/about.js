import nav from './nav.js';
import cursor from './cursor.js';
cursor();
nav();

const text = document.getElementById("text");
const bird1 = document.getElementById("bird1");
const bird2 = document.getElementById("bird2");
const btn = document.getElementById("btn");
const rocks = document.getElementById("rocks");
const forest = document.getElementById("forest");
const water = document.getElementById("water");
const d1 = document.getElementById("d1");
const d2 = document.getElementById("water");

window.addEventListener("load" , () => {
    let loader = document.querySelector(".loader");

    setTimeout(() =>{
        gsap.to(loader , {duration:0.3 , opacity:0})
        gsap.to(loader, {duration:0 , display:"none"});

    },1000)
})

window.addEventListener("scroll", (e) =>{
    let value = window.scrollY;


    text.style.top = 35 + value*-0.4+'%';
    bird1.style.top = value*-1.5 + 'px';
    bird1.style.left = value*2 + 'px';
    bird2.style.top = value*-1.5 + 'px';
    bird2.style.left = value*-5 + 'px';
    btn.style.marginTop = value*1.5 + 'px';
    rocks.style.top = value * -0.12 + 'px';
    forest.style.top = value *0.25 + 'px';
    // d1.style.top = value *-2.25 + 'px';
    // d2.style.left = value *-2.25 + 'px';
})

