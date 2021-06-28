import nav from './nav.js';
import cursor from './cursor.js';
cursor();
nav();

const input_number = document.getElementById("number");
const text = document.getElementById("amount");

number.addEventListener("change" , (e) =>{
    text.innerText = `${+(e.target.value*1000) + +((e.target.value * 0.13) % 1)}`;
})

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
  return new bootstrap.Toast(toastEl, {
      animation:  true , duration : 2000 , autoHide : true
  })
})
window.addEventListener("load" , () => {
    let loader = document.querySelector(".loader");

    setTimeout(() =>{
        gsap.to(loader , {duration:0.3 , opacity:0})
        gsap.to(loader, {duration:0 , display:"none"});

    },1000)
})


document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    toastList[0].show();
    
}


