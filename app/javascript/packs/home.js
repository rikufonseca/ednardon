export function home () {
  
  const lines = document.querySelectorAll(".home-line");

  // const one = lines[0];
  // const two = lines[1];
  // const three = lines[2];
  // const four = lines[3];
  // const five = lines[4];
  // const six = lines[5];
  // const seven = lines[6];
  // const eight = lines[7];
  // const nine = lines[8];
  // const ten = lines[9];

  let minHeight = 900;

  
  window.addEventListener("scroll", function(){
    // const maxHeight = 1200;
    
    const posTop = 0;
    const posBottom = 25;
    const scrollPositionLimit = 0.23;

    let scrollPosition =
    (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    // console.log(scrollPosition);

    const percent = scrollPosition / 0.99;
    // const heightScale = percent * maxHeight - minHeight;
    const posScale = percent * posBottom + posTop;
    // console.log(posScale);

    // const newHeightValue = scrollPosition > scrollPositionLimit ? maxHeight : heightScale;
    const activeLines = lines.filter(line => {
      if (scrollPosition <= scrollPositionLimit) {
        // one[0].style.setProperty("position", "fixed");
        minHeight = 900;
        line.style.setProperty("--ytra", minHeight);
        // console.log(minHeight);
        // one[0].style.removeProperty("--pos", posBottom + "%");
      } else {
        // one[0].style.setProperty("position", "fixed");
        line.style.setProperty("--ytra", minHeight += 0.7);
        // console.log(minHeight);
        // one[0].style.setProperty("--pos", posScale + '%');
      }  
    });
    console.log(activeLines);
  });
  
}
