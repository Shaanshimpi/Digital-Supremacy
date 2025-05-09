const loadingText = document.querySelector(`.loading-text`);


const logo = document.querySelector('.logo h1');
const contactText = document.querySelector('.pg5-child4 > h3 > a');
const aboutText = document.querySelector('.pg4-content-div > h3 > a');

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('brand');

const brandName = "Digital Supremacy";
const fontSize = Math.min(14/brandName.length + 2.5, 6);
loadingText.style.fontSize = `${fontSize}vw` 

logo.innerHTML = brandName.toUpperCase().split("").map(ele=>`<span>${ele}</span>`).join("");
contactText.innerHTML = `CONTACT ${brandName ? brandName.toUpperCase() :"FIREFIST SOLUTIONS"} <i class="ri-arrow-right-line"></i>`;
document.title = brandName.toUpperCase();
// help text
const helpBrand = document.querySelector(`.ff-page3-help-brand h2`);
helpBrand.innerHTML = brandName.toUpperCase()
// Select the elements
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page5 = document.querySelector('.page5');
const h1 = document.querySelector('.page1 h1');
const hzScrollDiv = document.querySelector(`.hz-scroll-div`)
const video1 = document.querySelector(`#video1`);
const video2 = document.querySelector(`#video2`);
const header = document.querySelector('header');
const page3ContentDiv = document.querySelector('.page3 .page3-content-div')
const page3LContent = document.querySelector('.page3 .l-content');
const page3RContent = document.querySelector('.page3 .r-content');
const page3RContentIn1 = document.querySelector('.page3 .r-content .r-content-in-1');
const page3RContentIn2 = document.querySelector('.page3 .r-content .r-content-in-2');
const strechDivs = document.querySelectorAll('.page3 .strech-divs');
const strechChild = document.querySelectorAll('.page3 .strech-child');
const strechTextH3 = document.querySelectorAll('.page3 .strech-child .text h3');
const textDivs = document.querySelector('.page3 .text');
const headerSpans = document.querySelectorAll('header h1 span');


// // Code for Changing Color
// function changeColor (item){
//   if(item.style.backgroundColor === `black`){
//     header.style.color = `white`;
//   }
//   else{
//     header.style.color = `black`;
//   }
// }

// //Code for Checking page Color and adjusting header content color according to it

// function checkColor(){
//     changeColor(page1)
//     changeColor(page2)
//     changeColor(page3)
//     changeColor(page4)
//     changeColor(page5)
//     changeColor(page6)
// }
// checkColor()



const tl = gsap.timeline();
// H1 Animation Code
tl.to(h1, {
    x: '-54%', // Translate the h1 to the left
    fontWeight: '300',
    ease: 'ease', // Linear animation
    scrollTrigger: {
        trigger: page1, // Trigger when page1 is in view
        scroller: 'body', // Use the body as the scroll container
        start: 'top top', // Start the animation at the top of the page1
        end: 'bottom top', // End the animation when page1 is at the top of the viewport
        scrub: 2, // Smooth scrubbing effect
    },
});

// Animation Code For video1
tl.to(video1, {
    transform: 'scale(1.2)',
    ease: 'ease',
    scrollTrigger: {
        trigger: page2, 
        scroller: 'body', 
        start: 'top top', 
        end: 'bottom top',
        pin: true, 
        scrub: 3,
        // markers:true, 
    },
});

gsap.to(h1, {
    opacity:0,
    scrollTrigger: {
        trigger: page3, 
        scroller: 'body', 
        start: 'top bottom', 
        end: 'center bottom', 
        scrub: 0, 
    },
});

// Page3 Content Animation
tl.from(page3LContent, {
    opacity:0,
    ease:`ease`,
    y:`100px`,
    scrollTrigger: {
        trigger: page3, 
        scroller: 'body', 
        start: 'top 12%', 
        end: 'top 10%',
        scrub: 3, 
        // markers:true,
    },
});

tl.to(page3ContentDiv,{
    top:`0`,
    ease:`ease`,
    scrollTrigger:{
        trigger: page3, 
        scroller: 'body', 
        start: 'top top', 
        // markers:true,
        end: '83.5% bottom', 
        scrub: 1, 
    }
})

tl.from(page3RContent, {
    opacity:0,
    ease:`ease`,
    y:`100px`,
    scrollTrigger: {
        trigger: page3ContentDiv, 
        scroller: 'body', 
        start: '-1% top', 
        // markers:true,
        end: '-0.5% top', 
        scrub: 1, 
    },
});

tl.to(page3RContentIn2,{
    delay:5,
    y:`-63%`,
    ease:`ease`,
    scrollTrigger:{
        trigger:page3ContentDiv,
        scroller:`body`,
        start:`top top`,
        end:`90% 85%`,
        // markers:true,
        scrub:2,
        pin:true
    }
})

// StrechChilds Animation Code 

function addStrechAnimation() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 600) {  // Changed from "600px" to 600
        strechChild.forEach((item) => {
            gsap.to(item, {
                minHeight: '31vw',  // Changed from `31vw` to '31vw'
                translateY: '-70%',  // Changed from `-70%` to '-70%'
                ease: 'ease',
                scrollTrigger: {
                    trigger: item,
                    scroller: 'body',
                    start: 'top 70%',
                    end: 'top 70%',
                    scrub: 2,
                    yoyo: true,
                    pin: true,
                    // markers:true,
                }
            });
        });

        strechTextH3.forEach((item) => {
            gsap.to(item, {
                opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    scroller: 'body',
                    start: 'bottom 80%',
                    end: 'top 55%',
                    scrub: 1,
                }
            });
        });
    }
}

// Call the addStrechAnimation function initially and on window resize
addStrechAnimation();

// Animation Code For video2
tl.to(video2, {
    translateY:`-90%`,
    transform: 'scale(1.1)',
    duration:1,
    ease: 'ease',
    scrollTrigger: {
        trigger: `.ff-our-work`, 
        scroller: 'body', 
        start: 'top bottom',
        endTrigger:`.page5`,
        end: 'bottom top',
        // markers:true,
        pin: true, 
        scrub: 2, 
    },
});
gsap.to([page3,`.more-cases a`, `h3 a`,`.page3 .text`], {
    backgroundColor:`black`,
    color:`white`,
    // duration:`0.1`,
    scrollTrigger: {
        trigger: page5, 
        scroller: 'body', 
        start: 'top 40%', 
        end: 'top 39.5%',
        // markers:true,
        scrub: 2, 
    },
});
gsap.to([`.more-cases a`, `h3 a`, `h4`], {
    backgroundColor:`transparent`,
    color:`white`,
    scrollTrigger: {
        trigger: page5, 
        scroller: 'body', 
        start: 'top 40%', 
        end: 'top 39.5%',
        // markers:true,
        scrub: true, 
    },
});
gsap.to(page5, {
    backgroundColor:`black`,
    color:`white`,
    scrollTrigger: {
        trigger: page5, 
        scroller: 'body', 
        start: '55% 50%', 
        end: '55% 49.5%',
        // markers:true,
        scrub: 2, 
    },
});
gsap.to(`.pg5-child3 a`, {
    backgroundColor:`transparent`,
    color:`white`,
    scrollTrigger: {
        trigger: page5, 
        scroller: 'body', 
        start: '55% 50%', 
        end: '55% 49.5%',
        // markers:true,
        scrub: true, 
    },
});


// header Logo Animation
// function logoSpanIncrease(span) {
//     gsap.to(span, {
//         scaleX: 2,  // Increase scaleX to make the text wider
//         ease: 'ease',
//         duration: 0.3,
//     });
// }

// // Call the function for each span in the header
// headerSpans.forEach((span) => {
//     logoSpanIncrease(span);
// });


// function logoSpanIncrease(span1,span2,fontStrech){
//     gsap.to([span1,span2],{
//         fontStrech:fontStrech,
//         ease:`ease`,
//         duration:`0.3`,
//     })
// }
// function logoSpanDecrease(span1,span2,fontStrech){
//     gsap.to([span1,span2],{
//         fontStrech:fontStrech,
//         ease:`ease`,
//         duration:`0.3`,
//     })
// }



// -------------------------------------------
gsap.to(`.ff-page3-help-brand`,{
    ease: `ease`,
    scrollTrigger: {
        trigger: `.ff-page3-help-brand-cont`,
        start:`top top`,
        end:`bottom bottom`,
        // markers:true,
        pin:true,
        scrub:2,
    }
})
gsap.from(`.ff-page3-help-brand h4`,{
    opacity:0,
    y:`100px`,
    ease:`ease`,
    scrollTrigger:{
        trigger: `.ff-page3-help-brand-cont`,
        start:`top 30%`,
        end:`top 30%`,
        // markers:true,
        scrub:2,
    }
})
gsap.from(`.ff-page3-help-brand h2`,{
    opacity:0,
    y:`200px`,
    ease:`ease`,
    scrollTrigger:{
        trigger: `.ff-page3-help-brand-cont`,
        start:`top 0%`,
        end:`top 0%`,
        // markers:true,
        scrub:1,
    }
})
const mm = gsap.matchMedia();
mm.add("(min-width:420px)",()=>{
    gsap.from(`.logo`,{
        fontSize: `30px`,
        duration:1,
        ease:'power3.inOut',
        scrollTrigger:{
            trigger: `.page3`,
            start:`top 0%`,
            end:`top 0%`,
            // markers:true,
            scrub:2,
        }
    })
    
    gsap.from(`.hr`,{
        opacity: 0,
        duration:1,
        ease:'ease',
        scrollTrigger:{
            trigger: `.page3`,
            start:`top 0%`,
            end:`top 0%`,
            // markers:true,
            scrub:2,
        }
    })

})

mm.add("(max-width:420px)",()=>{
    
    
    // H1 Animation Code
    tl.to(h1, {
        x: '-80%', // Translate the h1 to the left
        fontWeight: '300',
        ease: 'ease', // Linear animation
        scrollTrigger: {
            trigger: page1, // Trigger when page1 is in view
            scroller: 'body', // Use the body as the scroll container
            start: 'top top', // Start the animation at the top of the page1
            end: 'bottom top', // End the animation when page1 is at the top of the viewport
            scrub: 2, // Smooth scrubbing effect
        },
    });
})

// -------------------------------------------

const textArray = [
    "Forged by FireFist",
    `Showcasing ${brandName}`,
    "Redefining excellence",
  ]
function setText(text){
    if(loadingText) loadingText.innerText=text;
}
function randomSymbols(length) {
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>/?";
    let result = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        result += symbols[randomIndex];
    }

    return result;
  }
textArray.forEach((ele,i)=>{
    setTimeout(()=>{
      loadScramble(ele)
    },i*2500)
  });
  setTimeout(()=>{
    window.scroll(0,0)
    const tl = gsap.timeline();
    tl.to(`.loadingScreen`,{
        opacity:0,
        duration:1.5,
        ease:'ease',
        height:0,
    })
    tl.to(`main, header`,{
        opacity:1,
        // display:`flex`,
        duration:0.5,
        ease:'ease',
    })

//   },7000);
},50);
  function loadScramble(txt) {
    const interval=setInterval(() => {
        setText(randomSymbols(txt.length))
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
      setText(txt)
    },1500)
  }

  setInterval(()=>{
    const tl2 = gsap.timeline();
    tl2.to(`.b1 h1`,{
        scaleX:1.2,
        duration:0.4,
        stagger:1,
    })
    tl2.to(`.b1 h1`,{
        delay:0.5,
        scaleX:1,
        duration:0.4,
        stagger:1,
    })
  },5000)

  

// ----------------------------------------------------------------
// fetch posts



