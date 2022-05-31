export function home_that() {
  const scroller = document.querySelector(".scrollThat");
  const output = document.querySelector(".fuckyou");

  scroller.addEventListener("scroll", _event => {
    output.innerHTML = `scrollTop: ${scroller.scrollTop}`;
  }, {passive: true});

}
