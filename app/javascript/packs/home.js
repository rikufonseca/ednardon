export function home () {
  
  let lines = document.querySelectorAll(".home-line");
  // lines = Array.prototype.slice.call(lines);

  const one = lines[0];
  const two = lines[1];
  const three = lines[2];
  const four = lines[3];
  const five = lines[4];
  const six = lines[5];
  const seven = lines[6];
  const eight = lines[7];
  const nine = lines[8];
  const ten = lines[9];

  let oneMinHeight = 900;
  let twoMinHeight = 900;
  let threeMinHeight = 900;
  let fourMinHeight = 900;
  let fiveMinHeight = 900;
  let sixMinHeight = 900;
  let sevenMinHeight = 900;
  let eightMinHeight = 900;
  let nineMinHeight = 900;
  let tenMinHeight = 900;
  
  window.addEventListener("scroll", function(){
    // const maxHeight = 1200;
    const posTop = 0;
    const posBottom = 25;
    const scrollPositionLimit = 0.23;

    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPosition);

    const percent = scrollPosition / 0.99;
    // const heightScale = percent * maxHeight - MinHeight;
    const posScale = percent * posBottom + posTop;
    // console.log(posScale);

    // const newHeightValue = scrollPosition > scrollPositionLimit ? maxHeight : heightScale;

    if (scrollPosition >= 0.63) {
      tenMinHeight = 900;
      ten.classList.add('line-grow')
      ten.style.setProperty("--ytra", tenMinHeight +=4);
    }
    
    if (scrollPosition >= 0.50) {
      nine.classList.add('line-grow')
      nine.style.setProperty("--ytra", nineMinHeight +=4);
    }

    if (scrollPosition >= 0.53) {
      eight.classList.add('line-grow')
      eight.style.setProperty("--ytra", eightMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.50) {
      seven.classList.add('line-grow')
      seven.style.setProperty("--ytra", sevenMinHeight +=4);
    } 

    if (scrollPosition >= 0.45) {
      six.classList.add('line-grow')
      six.style.setProperty("--ytra", sixMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.41) {
      five.classList.add('line-grow')
      five.style.setProperty("--ytra", fiveMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.36) {
      four.classList.add('line-grow')
      four.style.setProperty("--ytra", fourMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.31) {
      three.classList.add('line-grow')
      three.style.setProperty("--ytra", threeMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.27) {
      two.classList.add('line-grow')
      two.style.setProperty("--ytra", twoMinHeight +=4);
    } 
    
    if (scrollPosition >= 0.220) {
      one.classList.add('line-grow')
      one.style.setProperty("--ytra", oneMinHeight +=4);
    }

    // switch (scrollPosition) {
    //   case scrollPosition >= 0.23 :
    //     console.log("gogogo");
    //     one.classList.add('line-grow');
    //   case scrollPosition <= 0.23 :
    // }
  });
}
