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

  let oneHeight = 760;
  let twoHeight = 760;
  let threeHeight = 400;
  let fourHeight = 400;
  let fiveHeight = 400;
  let sixHeight = 400;
  let sevenHeight = 400;
  let eightHeight = 400;
  let nineHeight = 400;
  let tenHeight = 400;

  
  
  window.addEventListener("wheel", function(event){
    

    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPosition);

    // console.log(event.deltaY);

    // if (scrollPosition >= 0.56) {
    //   scrollDirection(ten);
    // }
    
    // if (scrollPosition >= 0.52) {
    //   scrollDirection(nine);
    // }

    // if (scrollPosition >= 0.48) {
    //   scrollDirection(eight);
    // } 
    
    // if (scrollPosition >= 0.44) {
    //   scrollDirection(seven);
    // } 

    // if (scrollPosition >= 0.38) {
    //   scrollDirection(six);
    // } 
    
    // if (scrollPosition >= 0.34) {
    //   scrollDirection(five);
    // } 
    
    // if (scrollPosition >= 0.30) {
    //   scrollDirection(four);
    // } 
    
    // if (scrollPosition >= 0.26) {
    //   scrollDirection(three);
    // } 
    
    // if (scrollPosition >= 0.25) {
    //   scrollDirection(two);
    // } 

    if (event.deltaY > 0){
      if (scrollPosition > 0.27){
        two.classList.remove('static-line');
        two.classList.add('line-two');
        two.style.setProperty("--ytra", twoHeight < 1200 ? twoHeight += 10 : twoHeight = 1200);  
      } 
      
      if (scrollPosition > 0.225){
        one.classList.remove('static-line');
        one.classList.add('line-one');
        one.style.setProperty("--ytra", oneHeight < 1200 ? oneHeight += 10 : oneHeight = 1200);
      }
    }


    // if (event.deltaY < 0 && scrollPosition < 0.335) {
    //   two.classList.remove('static-line');
    //   two.classList.add('line-two');
    //   two.style.setProperty("--ytra", twoHeight > 760 ? twoHeight -= 10 : twoHeight = 760);
    // } else if (event.deltaY > 0 && scrollPosition > 0.27) {
    //   two.classList.remove('static-line');
    //   two.classList.add('line-two');
    //   two.style.setProperty("--ytra", twoHeight < 1200 ? twoHeight += 10 : twoHeight = 1200);
    // }
    
    // if (event.deltaY < 0 && scrollPosition < 0.28) {
    //   one.classList.remove('static-line');
    //   one.classList.add('line-one');
    //   one.style.setProperty("--ytra", oneHeight > 760 ? oneHeight -= 10 : oneHeight = 760);
    // } else if (event.deltaY > 0 && scrollPosition > 0.225) {
    //   one.classList.remove('static-line');
    //   one.classList.add('line-one');
    //   one.style.setProperty("--ytra", oneHeight < 1200 ? oneHeight += 10 : oneHeight = 1200);
    // }
  });
}
