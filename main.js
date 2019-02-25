let contact = document.getElementById("contact");
let works = document.getElementById("works");
let education = document.getElementById("education");
let about = document.getElementById("about");

function overlapping() {
  window.addEventListener("scroll", function() {
    console.log(contact.scrollTop);
    /*if (contact.getBoundingClientRect().top == 216) {
      works.style.zIndex = "2";
      education.style.zIndex = "2";
      about.style.zIndex = "2";
      contact.style.top = "6em";
      requestAnimationFrame(overlapping());
    } else {
      contact.style.position = "sticky";
    }*/
  });
}

overlapping();
