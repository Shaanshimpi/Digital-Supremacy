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

document.title = brandName.toUpperCase();
// help text
const helpBrand = document.querySelector(`.ff-page3-help-brand h2`);
helpBrand.innerHTML = brandName.toUpperCase()
// Select the elements
const page1 = document.querySelector('.page1');
const page2 = document.querySelector('.page2');
const page3 = document.querySelector('.page3');
const page4 = document.querySelector('.page4');
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
    fontWeight: '100',
    ease: 'ease', // Linear animation
    scrollTrigger: {
        trigger: page1, // Trigger when page1 is in view
        scroller: 'body', // Use the body as the scroll container
        start: 'top top', // Start the animation at the top of the page1
        end: 'bottom-=400 top', // End the animation when page1 is at the top of the viewport
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
        end:`90% 55%`,
        // markers:true,
        scrub:2,
        pin:true
    }
})

// StrechChilds Animation Code 

function addStrechAnimation() {
    const screenWidth = window.innerWidth;

    const minH = screenWidth > 600 ? `40vh`: `85vh`;
    // Changed from "600px" to 600
    strechChild.forEach((item) => {
        gsap.to(item, {
            minHeight: `40vh`,  // Changed from `31vw` to '31vw'
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

// Call the addStrechAnimation function initially and on window resize
addStrechAnimation();

// Animation Code For video2
tl.to(video2, {
    translateY:`-90%`,
    transform: 'scale(1.1)',
    duration:1,
    ease: 'ease',
    scrollTrigger: {
        trigger: page4, 
        scroller: 'body', 
        start: '15% top', 
        end: 'bottom top',
        endTrigger:video2,
        // markers:true,
        pin: true, 
        scrub: 2, 
    },
});
gsap.to([page4,page3,`.more-cases a`, `h3 a`,`.page3 .text`], {
    backgroundColor:`black`,
    color:`white`,
    // duration:`0.1`,
    scrollTrigger: {
        trigger: page4, 
        scroller: 'body', 
        start: 'top 40%', 
        end: 'top 39.5%',
        // markers:true,
        scrub: 2, 
    },
});
gsap.to([`.more-cases a`, `h3 a`], {
    backgroundColor:`transparent`,
    color:`white`,
    scrollTrigger: {
        trigger: page4, 
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
// gsap.to(`.pg5-child3 a`, {
//     backgroundColor:`transparent`,
//     color:`white`,
//     scrollTrigger: {
//         trigger: page5, 
//         scroller: 'body', 
//         start: '55% 50%', 
//         end: '55% 49.5%',
//         // markers:true,
//         scrub: true, 
//     },
// });


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
        endTrigger: `.strech-container`,
        end:`top bottom`,
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
    gsap.to(`.logo span`,{
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

mm.add("(max-width:500px)",()=>{
    
    
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
    "Driving Growth",
    `Building Legacies`,
    "Digital Supremacy",
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

  },7000);
// },50);
  function loadScramble(txt) {
    const interval=setInterval(() => {
        setText(randomSymbols(txt.length))
    }, 50);
    setTimeout(() => {
      clearInterval(interval);
      setText(txt)
    },1500)
  }

 

 

  const cursor = document.querySelector('.post-cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

// Set initial cursor styles with opacity 0
gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 1,
    borderRadius: '50%',
    pointerEvents: 'none',
    opacity: 0
});

// Update mouse position with scroll consideration
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY + window.scrollY;
});

// Handle scroll events
document.addEventListener('scroll', () => {
    mouseY = mouseY + (window.scrollY - previousScrollY);
    previousScrollY = window.scrollY;
});

// Keep track of previous scroll position
let previousScrollY = window.scrollY;

// Smooth follow animation
gsap.ticker.add(() => {
    const deltaX = mouseX - cursorX;
    const deltaY = mouseY - cursorY;
    
    cursorX += deltaX * 0.15;
    cursorY += deltaY * 0.15;
    
    gsap.set(cursor, {
        x: cursorX,
        y: cursorY
    });
});

// Add event listeners to all <a> tags
const links = document.querySelectorAll('a');
links.forEach(link => {
    // Mouse enter (hover) effect
    link.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
            scale: 1.5,
            opacity: 1,
            duration: 0.2,
            display:`grid`,
        });
    });

    // Mouse leave effect
    link.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 0,
            duration: 0.2,
            display:`none`,
        });
    });

    
});
const footerLinks = document.querySelectorAll('.btm-left a');
footerLinks.forEach(link => {
    // Mouse enter (hover) effect
    link.addEventListener('mouseenter', () => {
        const h3 = link.querySelector('h3');
        gsap.to(h3,{
            scaleY: 1.8,
            duration: 0.2,
            ease: 'ease'
        })
        gsap.to(cursor, {
            scale: 0.5,
            opacity: 1,
            duration: 0.2
        });
    });

    // Mouse leave effect
    link.addEventListener('mouseleave', () => {
        const h3 = link.querySelector('h3');
        gsap.to(h3,{
            scaleY: 1,
            duration: 0.2,
            ease: 'ease'
        })
        gsap.to(cursor, {
            scale: 1,
            opacity: 0,
            duration: 0.2,
        });
    });

    
});

const spans = document.querySelectorAll(".pg5-child1-p1 h1");

// Create a timeline
const tl2 = gsap.timeline({ repeat: -1,delay:4 }); // Repeat the entire timeline infinitely

tl2.to(spans, {
  scaleX: 1.2, // Scale up
  duration: 0.5, // Duration for scaling up
  ease: "power2.inOut",
  stagger: 0.2, // Stagger the animations
})
.to(spans, {
  scaleX: 1, // Scale back to original
  duration: 0.5, // Duration for scaling down
  ease: "power2.inOut",
  stagger: 0.2, // Stagger the animations
})
.to({},{duration:3});

setInterval(() => {
    const tl3 = gsap.timeline({delay:0.1});
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: 0,
        scale:1,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: -100,
        scale:1.8,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: 0,
        scale:1,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: -100,
        scale:1.8,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: 0,
        scale:1,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: -100,
        scale:1.8,
        ease:'ease',
    })
    tl3.to(`.floating-btn`,{
        duration:0.1,
        y: 0,
        scale:1,
        ease:'ease',
    })
},2000)

gsap.from([`footer h3`, `footer h2`],{
    scaleY: 0,
    duration: 0.3,
    ease: 'power3.inOut',
    stagger: 0.3,
    scrollTrigger: {
        trigger:`footer`,
        start: `top 80%`,
        end: `top 80%`,
        // markers:true,
    }
})

//newly added testemonials
 document.addEventListener('DOMContentLoaded', function() {
            const track = document.getElementById('testimonials-track');
            const cards = document.querySelectorAll('.testimonial-card');
            
            // Calculate total width needed for animation
            const cardWidth = 370; // Width of each card
            const gap = 30; // Gap between cards
            const totalCards = cards.length / 2; // We have duplicates, so divide by 2
            const totalWidth = (cardWidth + gap) * totalCards;
            
            // Set initial position
            gsap.set(track, { x: 0 });
            
            // Create infinite scroll animation
            const tl = gsap.timeline({ repeat: -1 });
            
            tl.to(track, {
                x: -totalWidth,
                duration: totalCards * 3, // 3 seconds per card
                ease: "none"
            });
            
            // Pause animation on hover
            track.addEventListener('mouseenter', function() {
                tl.pause();
            });
            
            // Resume animation when mouse leaves
            track.addEventListener('mouseleave', function() {
                tl.play();
            });
            
            // Responsive adjustments
            function updateAnimation() {
                const isMobile = window.innerWidth <= 768;
                const isTablet = window.innerWidth <= 1024;
                const isSmallMobile = window.innerWidth <= 480;
                
                let newCardWidth, newGap;
                
                if (isSmallMobile) {
                    newCardWidth = 250;
                    newGap = 15;
                } else if (isMobile) {
                    newCardWidth = 280;
                    newGap = 20;
                } else if (isTablet) {
                    newCardWidth = 300;
                    newGap = 25;
                } else {
                    newCardWidth = 370;
                    newGap = 30;
                }
                
                const newTotalWidth = (newCardWidth + newGap) * totalCards;
                
                // Update the animation with new dimensions
                tl.clear();
                tl.to(track, {
                    x: -newTotalWidth,
                    duration: totalCards * 3,
                    ease: "none",
                    repeat: -1
                });
            }
            
            // Update animation on window resize
            window.addEventListener('resize', updateAnimation);
        });

        //pageX

function pageXAnimation() {
    const pageX = document.querySelector("#pageX");
    const elems = document.querySelectorAll(".pageX");
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    // Desktop behavior - set first background
    if (!isTouchDevice && elems.length > 0) {
        const firstBg = elems[0].getAttribute("data-img");
        if (firstBg) {
            pageX.style.backgroundImage = `url(${firstBg})`;
        }
        
        // Desktop hover effects
        elems.forEach(ele => {
            ele.addEventListener("mouseenter", function() {
                const bgImg = ele.getAttribute("data-img");
                if (bgImg) {
                    pageX.style.backgroundImage = `url(${bgImg})`;
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(pageXAnimation, 100);
});