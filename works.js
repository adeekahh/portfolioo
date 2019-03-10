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
  let y = (pageYOffset / 100) * -1;
  console.log(y);
  document.querySelector(
    ".single-work-title-container-inner"
  ).style.transform = `translateX(${y}%)`;
  console.log(
    document.querySelector(".single-work-title-container-inner").style.transform
  );
});
