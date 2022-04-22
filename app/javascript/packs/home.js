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

  let oneMinHeight = 700;
  let twoMinHeight = 700;
  let threeMinHeight = 700;
  let fourMinHeight = 700;
  let fiveMinHeight = 700;
  let sixMinHeight = 700;
  let sevenMinHeight = 700;
  let eightMinHeight = 700;
  let nineMinHeight = 700;
  let tenMinHeight = 700;
  
  window.addEventListener("scroll", function(){
    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPosition);

    if (scrollPosition >= 0.60) {
      ten.classList.add('line-grow')
      ten.style.setProperty("--ytra", tenMinHeight +=5);
    }
    
    if (scrollPosition >= 0.56) {
      nine.classList.add('line-grow')
      nine.style.setProperty("--ytra", nineMinHeight +=5);
    }

    if (scrollPosition >= 0.52) {
      eight.classList.add('line-grow')
      eight.style.setProperty("--ytra", eightMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.46) {
      seven.classList.add('line-grow')
      seven.style.setProperty("--ytra", sevenMinHeight +=5);
    } 

    if (scrollPosition >= 0.42) {
      six.classList.add('line-grow')
      six.style.setProperty("--ytra", sixMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.38) {
      five.classList.add('line-grow')
      five.style.setProperty("--ytra", fiveMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.34) {
      four.classList.add('line-grow')
      four.style.setProperty("--ytra", fourMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.30) {
      three.classList.add('line-grow')
      three.style.setProperty("--ytra", threeMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.26) {
      two.classList.add('line-grow')
      two.style.setProperty("--ytra", twoMinHeight +=5);
    } 
    
    if (scrollPosition >= 0.220) {
      one.classList.add('line-grow')
      one.style.setProperty("--ytra", oneMinHeight +=5);
    }
  });
}
