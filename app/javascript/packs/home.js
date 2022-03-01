export function home () {
 const text =  document.querySelector('.txt').innerText;

 const moveIt = () => {
   text.repeat(2);
   text.classList.add('moveit');
 }

 window.addEventListener( 'load', moveIt );

}