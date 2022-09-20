// Intro
let intro = document.querySelector('.intro');
let logo = document.querySelector('.intro-content');
let logoSpan = document.querySelectorAll('.tag');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{
      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.add('active');
        }, (idx + 1) * 200)
      });

      setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
          setTimeout(()=>{
            span.classList.remove('active');
            span.classList.add('fade');
        }, (idx + 1) * 50)
        })
      }, 2000);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      }, 2300)
  })
})

// Text animated

var typed = new Typed(".auto-type", {
  strings: ["Lenin", "Developer", "Sleeping", "Coding"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true
});

// Navbar

let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// Email Js
function validate() {
  let name = document.querySelector(".name") ;
  let email = document.querySelector(".email") ;
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

sendBtn.addEventListener("click", (e) => {
  e.preventDefault ();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    }else {
      sendmail(name.value, email.value, msg.value) ;
      success();
      name.value = "";
      email.value = "";
      msg.value = "";
    }
  });
}
validate();

function sendmail(name, email, msg) {
  emailjs.send("service_rdh51f2","template_u99uqeb",{
    from_name: name,
    to_name: email,
    message: msg,
    });
}

function emptyerror() {
  swal({
  title: "Oh No. ...",
  text: "Fields cannot be empty!",
  icon: "error",
  });
}

function success() {
  swal({
    title: "Success!!",
    text: "Responderé lo antes posible",
    icon: "success",
  });
}

//Header Background Change On ScroLl
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
header.classList.toggle("header-active", window.scrollY > 0);
});

//Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});

// Light theme 

var theme = document.getElementById("switch");

theme.onclick = function(){
  document.body.classList.toggle("light-theme");
  theme.classList.toggle("bx-sun");
  theme.classList.toggle('bxs-moon');
}

// Swiper

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


