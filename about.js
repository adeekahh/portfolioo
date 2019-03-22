window.onload = () => {
  document.querySelector(".nav-button").addEventListener("click", () => {
    event.preventDefault();
    openNav();
    document.querySelector(".nav-button").removeEventListener;
    console.log("clicked");
  });
};

//Navigation show / hide

window.addEventListener("load", () => {});

let navWidth = null;
var desktopWidth = window.matchMedia("(min-width: 60em)");

function checkViewWidth() {
  if (desktopWidth.matches) {
    navWidth = 45;
  } else {
    navWidth = 100;
  }
}

//set css propeties based on the width of viewport
function styleNav() {
  let nav = document.querySelector("nav");
  let mainNavContent = document.querySelector(".main-nav-content");

  if (desktopWidth.matches) {
    mainNavContent.style.position = "absolute";
    mainNavContent.style.right = "0";
    mainNavContent.style.height = "60%";
    mainNavContent.style.bottom = "3.2em";
  } else {
    navWidth = 100;
  }
}

//open burger menu navigation
function openNav() {
  //check how much space should the navigation take depending on viewwidth
  styleNav();
  checkViewWidth();

  document.querySelector(".nav-button").style.color = "wheat";
  document.querySelector("nav").style.display = "initial";
  document.querySelector("nav").style.width = "100%";
  document.querySelector(".main-nav-content").style.width = `${navWidth}%`;
  document.querySelector(".main-nav-content").style.opacity = 1;
  document.querySelector(".main-nav-content").style.display = "flex";

  //add eventlistener to close menu
  setTimeout(() => {
    document.querySelector(".nav-button").addEventListener("click", () => {
      event.preventDefault();
      closeNav();
      document.querySelector(".nav-button").removeEventListener;
    });
    document
      .querySelector(".main-nav-close-button")
      .addEventListener("click", () => {
        closeNav();
      });
  }, 100);
}

function closeNav() {
  document.querySelector("nav").style.width = "0";
  document.querySelector(".main-nav-content").style.width = `0`;
  document.querySelector(".main-nav-content").style.opacity = 0;

  document.querySelector(".nav-button").style.color = "black";

  document.querySelector("nav").addEventListener("animationend", () => {
    document.querySelector("nav").style.display = "none";
  });

  setTimeout(() => {
    document.querySelector(".nav-button").addEventListener("click", () => {
      event.preventDefault();
      openNav();
      document.querySelector(".nav-button").removeEventListener;
    });
  }, 100);
}
