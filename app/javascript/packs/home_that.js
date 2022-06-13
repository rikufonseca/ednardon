export function home_that() {

  const all = document.querySelector("body");
  const vgOne = document.querySelector("#layer_1");

  window.addEventListener("wheel", function (event) {
    let scrollPosition =
      (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

    console.log(scrollPosition);

      if (event.deltaY > 0) {
        if (scrollPosition >= 0.3905) {
          vgOne.classList.add("takeoff");
        }
      };

//       if(event.deltaY > 0){
//        if (scrollPosition > 0.310) {
//          all.classList.add("col");
//        }
//      };
  });
//
  //   let screenHeight = document.documentElement.clientHeight;

  //   console.log(screenHeight);

  // });


}
