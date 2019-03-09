//About text array
let aboutText = document
  .querySelector(".about-text")
  .textContent.split(" ")
  .filter(function(str) {
    return /\S/.test(str);
  });

let viewWidth = window.matchMedia("(max-width: 700px)");

//Work image arrays
let intermediaArray = ["1.png", "2.png", "3.png"];

window.addEventListener("DOMContentLoaded", init());

//Starting functions
function init() {
  document
    .querySelector(".about-restart-button")
    .addEventListener("click", () => {
      console.log("click");
      showAboutText();
    });

  window.addEventListener("resize", checkViewWidth());

  if (viewWidth.matches) {
    // If media query matches
    showAboutText();
  } else {
    console.log("media query");
  }
}

function checkViewWidth() {
  if (viewWidth.matches) {
    // If media query matches
    showAboutText();
  } else {
    console.log("media query");
  }
}

//About section text animation
function showAboutText() {
  document.querySelector(".about-restart-button").style.opacity = "0";

  for (var i = 0; i < aboutText.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.querySelector(".about-text").style.opacity = "1";
        document.querySelector(".about-text").innerHTML = aboutText[i];
        if (i == aboutText.length - 1) {
          showRestartButton();
        }
      }, 300 * i);
    })(i);
  }
}
//About section restart button
function showRestartButton() {
  document.querySelector(".about-restart-button").style.opacity = "1";
}

//Work image script
document.querySelector("#intermedia").addEventListener("mouseover", () => {
  console.log(event);
  loopThroughImages();
});
document.querySelector("#intermedia").addEventListener("mouseleave", () => {
  console.log(event);
  hideWorkImage();
});

function loopThroughImages() {
  document.querySelector(".work-image").style.display = "block";
  for (let i = 0; i < intermediaArray.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.querySelector(
          ".work-image"
        ).src = `assets/project-pictures/intermedia/${intermediaArray[i]}`;
      }, 300 * i);
    })(i);
  }

  if (i == intermediaArray.length - 1) {
    i = 0;
  }
}

function hideWorkImage() {
  document.querySelector(".work-image").style.display = "none";
}
