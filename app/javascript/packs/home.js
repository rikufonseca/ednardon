import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);

export function home () {
    gsap.fromTo(".helloTop", {y: 17, duration: 0}, {y:-100, duration: 4});


    const stretchBoxInitHeight = 7;
    const maxScrollY = 260;
    const scrollPosY = 0;

}

