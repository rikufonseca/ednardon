export function home () {
  const allDiv = document.querySelectorAll(".img");
  const startPoint = document.getElementById("description");

   const startPointPosition = startPoint.offsetTop;
   const startPointHeight = startPoint.offsetHeight;

   let allDivPosition = [];
   let allDivHeight = [];

   
   
   window.addEventListener("scroll", function(){
    allDiv.forEach( div => allDivPosition.push(div.offsetTop));
    console.log(allDivPosition);
    allDiv.forEach( div => allDivHeight.push(div.offsetHeight));
    // console.log(allDivHeight);

    if ( allDivPosition.some( item => item > startPointPosition + startPointHeight) ) {
      console.log('Boom !');
    // const newHeight = allDivHeight + 1;
    // allDiv.style.height = newHeight + "px";
    } else {
      console.log('Baam !')
    // const newHeight = allDivHeight - 1;
    // allDiv.style.height = newHeight - "px";
    }

    allDivPosition = [];
    allDivHeight = [];
   })

};
 
