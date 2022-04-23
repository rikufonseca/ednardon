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

  let oneHeight = 300;
  let twoHeightVar = 400;
  let threeHeightVar = 400;
  let fourHeightVar = 400;
  let fiveHeightVar = 400;
  let sixHeightVar = 400;
  let sevenHeightVar = 400;
  let eightHeightVar = 400;
  let nineHeightVar = 400;
  let tenHeightVar = 400;

  
  
  window.addEventListener("wheel", function(event){
    

    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log(scrollPosition);

    console.log(event.deltaY);

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
    
    
      if (event.deltaY < 0 && scrollPosition < 0.28) {
        one.classList.remove('static-line');
        one.classList.add('line-grow');
        one.style.setProperty("--ytra", oneHeight > 300 ? oneHeight -= 10 : oneHeight = 300);
      } else if (event.deltaY > 0 && scrollPosition > 0.22) {
        one.classList.remove('static-line');
        one.classList.add('line-grow');
        one.style.setProperty("--ytra", oneHeight < 1200 ? oneHeight += 10 : oneHeight = 1200);
      }
      
      
    
  });
}
