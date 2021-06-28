const nav = () => {
    var t1 = gsap.timeline({paused: true});

    t1.to(".one", 0.8, {
        y: 6,
        rotation: 45,
        ease: Expo.easeInOut
    });
    t1.to(".two", 0.8, {
        y: -6,
        rotation: -45,
        ease: Expo.easeInOut,
        delay: -0.8
    });

    t1.to(".menu", 2, {
        transform: "translateY(0vh)",
        opacity:1,
        ease: Expo.easeInOut,
        delay: -2
    });


    t1.staggerFrom(".menu ul li", 2, {x: -200, opacity: 0, ease:Expo.easeOut}, 0.2);

    t1.reverse();
    document.querySelector(".toggle-btn").addEventListener("click", function(){
        t1.reversed(!t1.reversed());
        document.querySelectorAll(".toggle-btn span").forEach((e) => {
            e.setAttribute("color" , "#EDEDED")
        })
    })

    const links = document.querySelectorAll(".menu .data ul li a");
    links.forEach((a)=>{
        a.addEventListener("click", function(){
            t1.reversed(!t1.reversed());
            setTimeout(function(){
                if(a.innerText === "Home")

                window.location.replace(`/GitHubEventWeb/index.html`);
                else
                window.location.replace(`/GitHubEventWeb/${a.innerText.toLowerCase()}.html`);

            } , 3800);
        })
    })

}

export default nav;