import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);

export function home () {
    let animation = gsap.timeline();
    animation
      .fromTo(".helloTop", {y: 17, duration: 0 }, {y:-100, duration: 2, ease:"linear"})
      .from(".oneOpen", {attr:{y2:169}, duration: 2, clearProps: "y" }, "<" )
      .to(".helloBottom", {y:-117, duration: 2, ease:"bounce"}, "+=0.5");

    const stretchBoxInitHeight = 7;
    const maxScrollY = 260;
    const scrollPosY = 0;

}

