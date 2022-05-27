import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_myname() {
  let animation = gsap.timeline();
  animation
  //  .fromTo(".edouardTop", { y: 185, duration: 0 },
  //    { y: 20, duration: 0.30, ease: "linear" })

}
