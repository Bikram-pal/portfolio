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
