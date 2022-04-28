import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable.js";

gsap.registerPlugin(Draggable);

export function home () {  
  gsap.to(".helloTop", {y: 17});
}

