export function home () {  
  let lines = document.querySelectorAll(".home-line");
  let body = document.querySelectorAll("body");

  const one = lines[0];
  const two = lines[1];
  const three = lines[2];
  const four = lines[3];
  const five = lines[4];
  const six = lines[5];
  const seven = lines[6];
  const eight = lines[7];

  let oneHeight = 760;
  let twoHeight = 760;
  let threeHeight = 760;
  let fourHeight = 760;
  let fiveHeight = 760;
  let sixHeight = 760;
  let sevenHeight = 760;
  let eightHeight = 760;
 
  window.addEventListener("wheel", function(event){
    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPosition);

    if (event.deltaY > 0){
      if (scrollPosition > 0.391){
        one.classList.remove('static-line');
        one.classList.add('line-one');
        one.style.setProperty("--ytra", oneHeight < 1200 ? oneHeight += 10 : oneHeight = 1200);
      }

      if (scrollPosition > 0.450){
        two.classList.remove('static-line');
        two.classList.add('line-two');
        two.style.setProperty("--ytra", twoHeight < 1200 ? twoHeight += 10 : twoHeight = 1200);  
      } 

      if (scrollPosition > 0.528){
        three.classList.remove('static-line');
        three.classList.add('line-three');
        three.style.setProperty("--ytra", threeHeight < 1200 ? threeHeight += 10 : threeHeight = 1200);  
      } 

      if (scrollPosition > 0.605){
        four.classList.remove('static-line');
        four.classList.add('line-four');
        four.style.setProperty("--ytra", fourHeight < 1200 ? fourHeight += 10 : fourHeight = 1200);  
      } 

      if (scrollPosition > 0.683){
        five.classList.remove('static-line');
        five.classList.add('line-five');
        five.style.setProperty("--ytra", fiveHeight < 1200 ? fiveHeight += 10 : fiveHeight = 1200);  
      } 

      if (scrollPosition > 0.762){
        six.classList.remove('static-line');
        six.classList.add('line-six');
        six.style.setProperty("--ytra", sixHeight < 1200 ? sixHeight += 10 : sixHeight = 1200);  
      } 

      if (scrollPosition > 0.842){
        seven.classList.remove('static-line');
        seven.classList.add('line-seven');
        seven.style.setProperty("--ytra", sevenHeight < 1200 ? sevenHeight += 10 : sevenHeight = 1200);  
      } 

      if (scrollPosition > 0.917){
        eight.classList.remove('static-line');
        eight.classList.add('line-eight');
        eight.style.setProperty("--ytra", eightHeight < 1200 ? eightHeight += 10 : eightHeight = 1200);  
      } 

    } else if (event.deltaY < 0){
      one.style.setProperty("--ytra", oneHeight > 760 ? oneHeight -= 10 : oneHeight = 760);
      two.style.setProperty("--ytra", twoHeight > 760 ? twoHeight -= 10 : twoHeight = 760);
      three.style.setProperty("--ytra", threeHeight > 760 ? threeHeight -= 10 : threeHeight = 760);
      four.style.setProperty("--ytra", fourHeight > 760 ? fourHeight -= 10 : fourHeight = 760);
      five.style.setProperty("--ytra", fiveHeight > 760 ? fiveHeight -= 10 : fiveHeight = 760);
      six.style.setProperty("--ytra", sixHeight > 760 ? sixHeight -= 10 : sixHeight = 760);
      seven.style.setProperty("--ytra", sevenHeight > 760 ? sevenHeight -= 10 : sevenHeight = 760);
      eight.style.setProperty("--ytra", eightHeight > 760 ? eightHeight -= 10 : eightHeight = 760);
    }
  });

}
