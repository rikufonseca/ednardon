import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home () {
    let animation = gsap.timeline();
    animation
      .fromTo(".helloTop", {y: 20, duration: 0 }, 
        { y:-100, duration: 0.3, ease:"linear"})

      .fromTo(".open", {  attr:{y2:169}, duration:0.3, ease: "linear" }, 
        { attr: {y2: 54}, duration:0.3, ease: "linear" }, "<")

      .fromTo(".open", {attr:{y2:54}, duration: 0, ease: "linear"}, 
        {attr:{y1: 54}, duration: 0.1, ease: "linear" })
    
      .to(".helloBottom", {y:-120.2, duration: 0.1, ease: "linear"}, "<");

      ScrollTrigger.create({
        trigger: ".wholeHello",
        start: "top 320px",
        end: "top 128px",
        markers: {startColor: "black", endColor: "black"},
        scrub: true,
        animation: animation
      });

}

