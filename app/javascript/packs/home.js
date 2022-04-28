import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);

export function home () {
    gsap.fromTo(".helloTop", {y: 17, duration: 0 }, {y:-100, duration: 2, ease:"linear"});
    gsap.to(".helloBottom", {y:-117, delay: 3, duration: 2, ease:"bounce"});

    const stretchBoxInitHeight = 7;
    const maxScrollY = 260;
    const scrollPosY = 0;

}

