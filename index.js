// header
const header = document.querySelector(".nav-container");
const hamburger = document.querySelector(".nav-mobile-btn");
const mobileNav = document.querySelector("#mobile-nav");
const toOpen = document.querySelector(".toOpen");
const toClose = document.querySelector(".toClose");

function toggleMenu() {
  if (hamburger.classList.contains("showMenu")) {
    hamburger.classList.remove("showMenu");
    header.style.height = "64px";
    mobileNav.style.display = "none";
    toOpen.style.display = "block";
    toClose.style.display = "none";
  } else {
    hamburger.classList.add("showMenu");
    header.style.height = "441px";
    mobileNav.style.display = "block";
    toOpen.style.display = "none";
    toClose.style.display = "block";
  }
}

hamburger.addEventListener("click", toggleMenu);
// CAROUSEL
const imageElement = document.querySelectorAll(".image");
const backElement = document.querySelector(".back");
const forwardElement= document.querySelector(".forward")
const imgElementId = document.querySelector('img');

var itemClassName = "image";
    totalImageCount = imageElement.length;

function toggleForward(){
    if(imageElement[0].id === 'active'){
        imageElement[0].id = 'not-active';
        imageElement[1].id = 'active';
    } else if (imageElement[1].id === 'active'){
        imageElement[1].id = 'not-active';
        imageElement[2].id = 'active';
    } else if (imageElement[2].id === 'active'){
        imageElement[2].id = 'not-active';
        imageElement[3].id = 'active';
    } else if(imageElement[3].id === 'active'){
        imageElement[3].id = 'not-active';
        imageElement[4].id = 'active';
    } else if(imageElement[4].id === 'active'){
        imageElement[4].id = 'not-active';
        imageElement[5].id = 'active';
    } else if(imageElement[5].id === 'active'){
        imageElement[5].id = 'not-active';
        imageElement[0].id = 'active';
    }
}

function toggleBack(){
    if (imageElement[5].id === 'active'){
        imageElement[5].id = 'not-active';
        imageElement[4].id = 'active';
    } else if (imageElement[4].id === 'active'){
        imageElement[4].id = 'not-active';
        imageElement[3].id = 'active';
    } else if(imageElement[3].id === 'active'){
        imageElement[3].id = 'not-active';
        imageElement[2].id = 'active';
    } else if(imageElement[2].id === 'active'){
        imageElement[2].id = 'not-active';
        imageElement[1].id = 'active';
    } else if(imageElement[1].id === 'active'){
        imageElement[1].id = 'not-active';
        imageElement[0].id = 'active';
    } else if(imageElement[0].id === 'active'){
        imageElement[0].id = 'not-active';
        imageElement[5].id = 'active';
    }
}

backElement.addEventListener('click', toggleBack);
forwardElement.addEventListener('click', toggleForward);
