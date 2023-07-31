// Sticky Navigation Menu Js

// let theme = localStorage.getItem('theme')
// if(theme==null){
//     setTheme('blue')
// }else{
//     setTheme(theme)
// }

let slides = document.getElementsByClassName("slide");
let slideIndex = 0;

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function openLink(link) {
  window.location.href = link;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide();
}

showSlide();


let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

let val;

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
        scrollBtn.style.display = "block";
    }else{
        nav.classList.remove("sticky");
        scrollBtn.style.display = "none";
    }
}

// Side Navigation Menu Js
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = function(){
    navBar.classList.add("active");
    menuBtn.style.opacity ="0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflowX = "hidden";
    scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
    navBar.classList.remove("active");
    menuBtn.style.opacity ="1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflowX = "auto";
    scrollBtn.style.pointerEvents = "auto";
}

//Typing animation script
var typed = new Typed(".typing",{
    strings: ["Web Developer","Graphic Designer","App Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true,
});

// Side Navifation Bar close while we click on navigation links

let navLinks = document.querySelectorAll(".menu li a");
for(var i = 0; i< navLinks.length; i++){
    navLinks[i].addEventListener("click", function(){
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents ="auto";
    });
}

// let themeDots = document.getElementsByClassName('theme-dot')

// for(var i=0;themeDots.length>i;i++){
//     themeDots[i].addEventListener('click',function(){
//         let mode = this.dataset.mode
//         console.log('Option clicked',mode)
//         setTheme(mode)
//     })
// }
// function setTheme(mode){
//     if(mode =="light"){
//         document.getElementById('theme-style').href ="style3.css"
//     }
//     if(mode =="dark"){
//         document.getElementById('theme-style').href ="pink.css"
//     }
//     localStorage.setItem('theme',mode)
// }

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el)=> observer.observe(el));
  
  let intro = document.querySelector('.intro1');
  let logo = document.querySelector('.logo-header1');
  let logoSpan = document.querySelectorAll('.logo1');
  
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.add('active');
        }, (idx + 1) * 400);
      });
  
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
          }, (idx + 1) * 50);
        });
      }, 2000);
  
      setTimeout(() => {
        intro.style.top = '-100vh';
      }, 2300);
    });
  });
  

  