
let color = "#EDEDED";

class Utils {

  /**
   * @param {HTMLElement} element
   * @returns {HTMLElement[]}
   */
  toArray(element) {
    return [].slice.call(element);
  }

  /**
   * 
   * @param {String} selector 
   * @returns {HTMLElement}
   */
  get(selector) {
    return document.querySelector(selector);
  }
}


let slider = () => {
  let ready = false;
  let animationTimeout;
  let transitionTimeout;
  const { toArray, get } = new Utils();
  const hideElements = () => {
    // const heading = get('.heading').children;
    // const description = get('.stay-home').children;
    // const content = get('.places .fp-tableCell .center-content').children;
    // const images = get('.images').children;
    // gsap.to([heading, description], { autoAlpha: 0, duration: 0 });
    // gsap.to('.box', {height: 0, duration: 0});
    // gsap.to(content, { autoAlpha: 0, duration: 0});
    // gsap.to(images, {autoAlpha: 0, duration: 0});
  }

  const animateIn = ({ currentIndex }) => {
    // const { get } = new Utils();
    // if (currentIndex === 0) {
    //   const heading = get('.heading').children;
    //   const description = get('.description').children;
    //   const images = get('.images').children;
    //   gsap.to(heading, {
    //     stagger: 0.15,
    //     autoAlpha: 1,
    //     x: 0,
    //     duration: 0.5,
    //   });
    //   gsap.to(description, {
    //     autoAlpha: 1,
    //     delay: 0.5,
    //     duration: 0.3,
    //   });
    //   gsap.to('.box', {
    //     height: '100px',
    //     duration: 0.5
    //   })
    //   gsap.to(images, {
    //     autoAlpha: 1,
    //     stagger: 0.10,
    //     duration: 0.3
    //   })
    // }

    // if (currentIndex === 1) {
    //   const content = get('.places .fp-tableCell .center-content').children;
    //   gsap.to(content, {
    //     stagger: 0.15,
    //     autoAlpha: 1,
    //     duration: 0.5
    //   })
    // }
  }

  const animateOut = ({ currentIndex }) => {
    // const { get } = new Utils();

    // if (currentIndex === 0) {
    //   const heading = get('.heading').children;
    //   const description = get('.description').children;
    //   const images = get('.images').children;
    //   gsap.to(heading, {
    //     stagger: 0.15,
    //     autoAlpha: 0,
    //     x: -30,
    //     duration: 0.5,
    //   });
    //   gsap.to(description, {
    //     autoAlpha: 0,
    //     delay: 0.5,
    //     duration: 0.3,
    //   });
    //   gsap.to('.box', {height: '0px', delay: 0.3, duration: 0.3});
    //   gsap.to(images, {
    //     autoAlpha: 0,
    //     stagger: 0.10,
    //     delay: 0.1,
    //     duration: 0.3
    //   })
    // }

    // if (currentIndex === 1) {
    //   const content = get('.places .fp-tableCell .center-content').children;
    //   gsap.to(content, {
    //     stagger: 0.15,
    //     autoAlpha: 0,
    //     duration: 0.1
    //   })
    // }
  }

  function changeColor(index){

    let dot = document.querySelectorAll("ul li a span");
    let link = document.querySelectorAll(".fp-tooltip.fp-left");
    let c1 = document.querySelector(".counter-1");
    let div = document.querySelector(".divide");
    let c2 = document.querySelector(".counter-2");
    if(index === 1){
      
      c1.style.color = '#000';
      c2.style.color = '#000';
      div.style.color = '#000';
      dot.forEach(d =>{
        
        d.style.backgroundColor = '#171717 !important';
        
      })
      link.forEach(d =>{
        d.style.color = '#171717';
        

      })
      
    }else{
      c1.style.color = color;
      c2.style.color = color;
      div.style.color = color;
      dot.forEach(d =>{
        
        d.style.backgroundColor = color;
        
      })
      link.forEach(d =>{
        d.style.color = color;
      })
    }
  }


  const fullPage = new fullpage("#fullpage", {
    navigation: true,
    navigationPosition: "left",
    navigationTooltips: ["Home" , "Features","Testimonial" ,"More"],
    showActiveTooltip:true,
    scrollOverflow:"true",slidesNavigation:true,
    controlArrows:false,
    // slidesNavPosition:"top",
    afterLoad: function (origin, destination, direction) {
        animateIn({ currentIndex: destination.index });
    },
    onLeave: function (origin, nextIndex, direction) {
      
      if (ready) return;
      
      clearTimeout(animationTimeout);
      clearTimeout(transitionTimeout);

      // animateOut({ currentIndex: origin.index });
      animationTimeout = setTimeout(() => {
        ready = true;
        if (direction === 'down') {
          fullpage_api.moveSectionDown();
          switchIndex();
          changeColor(nextIndex.index);
        } else {
          fullpage_api.moveSectionUp();
          switchIndex();
          changeColor(nextIndex.index);
        }
        transitionTimeout = setTimeout(() => {
          ready = false;
        }, 0);
      }, 0);

      return ready;
    },
  });





  const sections = toArray(get('#fullpage').children).filter(s => s.localName === 'section');
  const length = sections.length;
  const counterContainer = toArray(get('.counter').children);
  

  const switchIndex = () =>  {
    const { index } = fullPage.getActiveSection();
    counterContainer.map((elem) => {
      if (elem.className === 'counter-1') elem.textContent = `${0}${index + 1}`;
      if (elem.className === 'counter-2') elem.textContent = length;
    });
  }

  hideElements();
  switchIndex();
}

export default slider;


