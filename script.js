// const menuBtn = document.getElementById("menuBtn");
// const navList = document.getElementById("nav-list");
// const navLinks = document.querySelectorAll(".nav-list a");

// menuBtn.addEventListener("click", () => {
//   navList.classList.toggle("open");
//   menuBtn.classList.toggle("open")
// });
// navLinks.forEach(link => {
//   link.addEventListener("click", () => {
//     navList.classList.remove("open");
//     menuBtn.classList.remove("open");
//   });
// });
const menuBtn = document.getElementById("menuBtn");
const navList = document.getElementById("nav-list");
const navLinks = document.querySelectorAll(".nav-list a");
const sections = document.querySelectorAll("div[id]");

// toggle menu (mobile)
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
  gsap.from(navList,{
    opacity:0,
    y:20,
    duration:1,
  })
  gsap.from(menuBtn,{
      scale:0,
      duration:1,
      y:0,
      // yoyo:true,
    })
    

  menuBtn.classList.toggle("open");
});

// click nav item → close menu + highlight
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
    navList.classList.remove("open");

    menuBtn.classList.remove("open");
  });
});

// scroll spy (auto highlight while scrolling)
window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // navbar height
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});
tl=gsap.timeline()
tl.from(".logo",{
  opacity:0,
  x:"-20px",
  duration:0.4,
  delay:0.5,
})
tl.from(".nav-element",{
  opacity:0,
  y:"20px",
  stagger:0.2,
  duration:1,
  // delay:1,
})
tl.from(".home-about div h1",{
  opacity:0,
  y:"-20px",
  stagger:0.2,
  duration:0.4,
  delay:-0.5,
})
 
const textEl = document.querySelector(".home-about>h2")
const text = textEl.textContent;

textEl.textContent = ""; // clear text first

tl.to({}, {
  duration: text.length * 0.08, // typing speed
  ease: "none",
  onUpdate: function () {
    const progress = Math.floor(this.progress() * text.length);
    textEl.textContent = text.substring(0, progress);
  }
});
tl.from(".home-about>h4",{
  duration:1,
  opacity:0,
  x:0,
  delay:0.2,
  scaleX:0.9,
})
gsap.from(".home-img",{
  opacity:0,
  
  x:"80px",
  scale:1.2,
  duration:0.5,
  delay:1,
})
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".about",
  start: "top 70%",
  // markers: true,

  onEnter: () => {
    gsap.to(".home-about", {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(".home-img", {
      opacity: 0,
      x: 40,
      duration: 0.5,
      ease: "power2.out"
    });
    
  },

  

  onLeaveBack: () => {
    gsap.to(".home-about", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
     gsap.to(".home-img", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }
});

const aboutTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about",
    start: "top 50%",
    // once: true,
    // markers:true,
  }
});

aboutTl
  .from(".about h2", {
    opacity: 0,
    y: 50,
    duration: 0.6
  })
  .from(".my-img", {
    opacity: 0,
    scale: 0.8,
    duration: 0.6
  }, "-=0.3")
  .from(".content-about .content", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.3");
gsap.registerPlugin(ScrollTrigger);



ScrollTrigger.create({
  trigger: ".contact",
  start: "top 70%",
  // markers: true,

  onEnter: () => {
    gsap.to(".content-about", {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: "power2.out"
    });
    gsap.to(".my-img", {
      opacity: 0,
      x: 40,
      duration: 0.5,
      ease: "power2.out"
    });
    
  },

  

  onLeaveBack: () => {
    gsap.to(".content-about", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
     gsap.to(".my-img", {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  }
});

const contactt1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact",
    start: "top 30%",
    // once: true,
    // markers:true,
  }
});

aboutTl
  .from(".contact h2", {
    opacity: 0,
    y: 50,
    duration: 0.6
  })
  .from(".contect-img", {
    opacity: 0,
    x:50,
    duration: 1
  })
  .from(".contact-content", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.3");


