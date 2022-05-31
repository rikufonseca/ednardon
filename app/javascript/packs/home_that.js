export function home_that() {

  const all = document.querySelector("body")

  window.addEventListener("wheel", function (event) {
    let scrollPosition =
      (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    console.log(scrollPosition);

    if(event.deltaY > 0){
      if (scrollPosition > 0.300) {
        all.classList.add("col");
      }
    }
  });


}
