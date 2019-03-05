//About text array
let aboutText = document
  .querySelector(".about-text")
  .textContent.split(" ")
  .filter(function(str) {
    return /\S/.test(str);
  });

window.addEventListener("DOMContentLoaded", init());

//Starting functions
function init() {
  document
    .querySelector(".about-restart-button")
    .addEventListener("click", () => {
      console.log("click");
      showAboutText();
    });

  showAboutText();
}
//About section text animation
function showAboutText() {
  document.querySelector(".about-restart-button").style.opacity = "0";

  for (var i = 0; i < aboutText.length; i++) {
    (function(i) {
      setTimeout(function() {
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
