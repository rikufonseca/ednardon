export function home () {
 const text = document.querySelector('.txt');

 const elementInView = (text, scrollOffset = 100) => {
  const elementTop = text.getBoundingClientRect().top;
 
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
  );
 };


}
