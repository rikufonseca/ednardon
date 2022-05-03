import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);

export function home () {
    let animation = gsap.timeline();
    animation
      .fromTo(".helloTop", {y: 20, duration: 0 },{y:-100, duration: 1, ease:"linear"})
      .fromTo(".oneOpen", {attr:{y2:169}, duration:1}, {attr: {y2: 54}, duration:1}, "<")
      .fromTo(".oneOpen", {attr:{y2:54}, duration: 1.5}, {attr:{y1: 54}, duration: 1.5})
      .to(".helloBottom", {y:-120.2, duration: 1}, "<");

    const stretchBoxInitHeight = 7;
    const maxScrollY = 260;
    const scrollPosY = 0;

}

