import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_iam() {
  let animation = gsap.timeline();
  animation
    .fromTo(".iAmTop", { y: 10, duration: 0 },
      { y: -157, duration: 0.30, ease: "linear" })

    .fromTo(".openFour", { attr: { y2: 466 }, duration: 0.30, ease: "linear" }, { attr: { y1: 299 }, duration: 0.30, ease: "linear" }, "<")

    .fromTo(".openFour", { attr: { y2: 466 }, duration: 0, ease: "linear" }, { attr: { y2: 299 }, duration: 0.12, ease: "linear" })

    .fromTo(".iAmBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

  ScrollTrigger.create({
    trigger: ".wholeIAm",
    start: "top 50%",
    end: "top 27%",
    markers: { startColor: "black", endColor: "black" },
    scrub: true,
    animation: animation
  });


}
