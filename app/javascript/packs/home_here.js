import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_here() {
  let animation = gsap.timeline();
  animation

    .fromTo(".hereTop", { y: 10, duration: 0 },
      { y: -156, duration: 0.30, ease: "linear" })

    .fromTo(".openEight", { attr: { y2: 939 }, duration: 0.30, ease: "linear" }, { attr: { y1: 772 }, duration: 0.30, ease: "linear" }, "<")

    .fromTo(".openEight", { attr: { y2: 939 }, duration: 0, ease: "linear" }, { attr: { y2: 772 }, duration: 0.12, ease: "linear" })

    .fromTo(".hereBottom", { y: 0, duration: 0 }, { y: -166, duration: 0.12, ease: "linear" }, "<");

  ScrollTrigger.create({
    trigger: ".wholeHere",
    start: "top 400px",
    end: "top 174px",
   // markers: { startColor: "black", endColor: "black" },
    scrub: true,
    animation: animation
  });

}