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