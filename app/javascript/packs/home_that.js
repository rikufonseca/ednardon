export function home_that() {

  const all = document.querySelector("body")

  window.addEventListener("wheel", function (event) {
    let scrollPosition =
      (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    if(event.deltaY > 0){
      if (scrollPosition > 0.310) {
        all.classList.add("col");
      }
    }

    let screenHeight = document.documentElement.clientHeight;

    console.log(screenHeight);

  });


}
