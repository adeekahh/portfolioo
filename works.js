//adding new elements to marquee
window.onload = () => {
  const marquee = document.querySelector(".marquee");
  if (marquee) {
    const marquees = new Array(40).fill(null);
    marquees.forEach(el => {
      marquee.parentNode.append(marquee.cloneNode(true));
    });
  }
};

//recording scrolltop
document.addEventListener("scroll", () => {
  let offset = (pageYOffset / 100) * -1;

  let val = document.querySelector(".single-work-title-container-inner").style
    .transform;

  console.log(val);

  document.querySelector(
    ".single-work-title-container-inner"
  ).style.transform = `translateX(${offset}%)`;
});
