let modal = () => {
    const btns = document.querySelectorAll(".btn");
    
    // console.log("nfjak" , btns)
    btns.forEach((btn,index) => {
        // console.log(btn, "na");
        btn.addEventListener("click", function(e) {
            openModal();currentSlide(index+1);
        })
    })
    

    const images  = [];

    let imgs = document.querySelectorAll(".slides img");
    imgs.forEach(img => {
        images.push({link : img.src , title : img.getAttribute("alt") ?img.getAttribute("alt") : "Title" });
    })

    // console.log(images);

    const model_content = document.getElementById("modal-content");
    const thumbnail = document.getElementById("thumbnail");
    images.forEach(({link, title},idx) => {
        let div1 = document.createElement("div")
        div1.classList.add("mySlides");
        div1.innerHTML +=`
        
        <div class="numbertext">${idx+1}/${images.length}</div>
        <div class="slides">

            <img src="${link}" style="width:100%">
        </div>
      
        `

        let div = document.createElement("div");

        div.classList.add("column");
        div.innerHTML +=`
            <img class="demo" src="${link}" alt="${title}">
        `;

        model_content.insertBefore(div1, model_content.firstChild);
        thumbnail.appendChild(div);
    })
    const column = document.querySelectorAll("img.demo");

    column.forEach((col,index) => {
        col.addEventListener("click", function(e) {
            currentSlide(index);
        })
    })
    
    // console.log(model_content)
    document.querySelector(".close.close-cursor").addEventListener("click", closeModal)
    document.querySelector("a.prev").addEventListener("click", () => {
        plusSlides(1);
    })
    document.querySelector("a.next").addEventListener("click", () => {
        plusSlides(-1);
    })

    
    function openModal() {
        document.getElementById("myModal").style.display = "block";
      }
      
      // Close the Modal
      function closeModal() {
        document.getElementById("myModal").style.display = "none";
      }
      
      let slideIndex = 1;
      showSlides(slideIndex);
      
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }
      
      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }
      
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
        captionText.innerHTML = dots[slideIndex-1].alt;
      }
};
export default modal;
