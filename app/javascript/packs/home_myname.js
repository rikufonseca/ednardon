import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_myname() {
  let animation = gsap.timeline();
  animation
    .fromTo(".myNameTop", { y: 185, duration: 0 },
      { y: 185, duration: 0.3, ease: "linear" })

    .fromTo(".myNameBottom", { y: 175, duration: 0 }, { y: 175, duration: 0.12, ease: "linear" }, "<");
}
