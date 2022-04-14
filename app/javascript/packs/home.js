export function home () {
  const allDiv = document.querySelectorAll(".img");
  const startPoint = document.getElementById("description");

   let allDivHeight = [];

   
   window.addEventListener("scroll", function(){
    const startPointPosition = startPoint.offsetTop;
    console.log(startPointPosition);
 
    allDiv.forEach( div => allDivHeight.push(div.offsetHeight));
    console.log(allDivHeight);
    console.log(allDivHeight[0]);
    

    if ( startPointPosition >= 796 && startPointPosition <= 848 ){
        allDivHeight[0] += 1;
      } else if ( startPointPosition >= 881 && startPointPosition <= 935){
        allDivHeight[1] += 1;
    } else if ( startPointPosition >= 972 && startPointPosition <= 1031){
        allDivHeight[2] += 1;
    } else if (startPointPosition >= 1070 && startPointPosition <= 1121){
        allDivHeight[3] += 1;
    } else if (startPointPosition >= 1156 && startPointPosition <= 1209){
        allDivHeight[4] += 1;
    } else if (startPointPosition >= 1245 && startPointPosition <= 1303){
       allDivHeight[5] += 1;
    } else if (startPointPosition >= 1340 && startPointPosition <= 1394){
      allDivHeight[6] += 1;
    } else if (startPointPosition >= 1433 && startPointPosition <= 1508){
      allDivHeight[7] += 1;
    } else {
      console.log("nothing");
    };

   });




    //if ( allDivPosition.some( item => item === startPointPosition) {
    //  console.log('Boom !');
    //// const newHeight = allDivHeight + 1;
    //// allDiv.style.height = newHeight + "px";
    //} else {
    //  console.log('Baam !')
    //// const newHeight = allDivHeight - 1;
    //// allDiv.style.height = newHeight - "px";
    //}
    //allDivPosition = [];
    //allDivHeight = [];
   //)

}
 
