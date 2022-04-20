export function home () {
  
    let one = document.querySelector(".test");
  //  const two = document.querySelector(".img-two");
  //  const three = document.querySelector(".img-three");
  //  const four = document.querySelector(".img-four");
  //  const five = document.querySelector(".img-five");
  //  const six = document.querySelector(".img-six");
  //  const seven = document.querySelector(".img-seven");
  //  const eight = document.querySelector(".mail");
  window.addEventListener("scroll", function(){
    const maxHeight = 1200;
    const minHeight = 0;

    const posTop = 0;
    const posBottom = 25;

    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    const percent = scrollPosition / 0.99;
    const heightScale = percent * maxHeight - minHeight;
    const posScale = percent * posBottom + posTop;

    const newHeightValue = scrollPosition > 0.99 ? maxHeight : heightScale;

    if (scrollPosition >= 0.99) {
      one.style.setProperty("--ytra", minHeight);
      one.style.setProperty("--pos", posBottom + '%');
    } else {
      one.style.setProperty("--ytra", newHeightValue);
      one.style.setProperty("--pos", posScale + '%');
    }

  });
}
