let aboutText = document.querySelector(".about-text").textContent;

window.addEventListener("DOMContentLoaded", init());

function init() {
  formAboutText();
}

function formAboutText() {
  let formedText = aboutText.split(" ");
  splittedText = formedText.filter(function(str) {
    return /\S/.test(str);
  });
  showAboutText(splittedText);
}

function showAboutText(splittedText) {
  for (var i = 0; i < splittedText.length; i++) {
    (function(i) {
      setTimeout(function() {
        document.querySelector(".about-text").innerHTML = splittedText[i];
        console.log(splittedText[i]);
      }, 400 * i);
    })(i);
  }
}
