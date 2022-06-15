import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_edouard() {
  ScrollTrigger.matchMedia({
    "(min-width: 700px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".edouardTop", { y: 10, duration: 0 }, { y: -157, duration: 0.30, ease: "linear" })
        .fromTo(".openThree", { attr: { y2: 348 }, duration: 0.30, ease: "linear" }, { attr: { y1: 181 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openThree", { attr: { y2: 348 }, duration: 0, ease: "linear" }, { attr: { y2: 181 }, duration: 0.12, ease: "linear" })
        .fromTo(".edouardBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeEdouard",
        start: "top 100%",
        end: "top 80%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });

  ScrollTrigger.matchMedia({
    "(min-width: 280px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".edouardTop", { y: 10, duration: 0 }, { y: -157, duration: 0.30, ease: "linear" })
        .fromTo(".openThree", { attr: { y2: 348 }, duration: 0.30, ease: "linear" }, { attr: { y1: 181 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openThree", { attr: { y2: 348 }, duration: 0, ease: "linear" }, { attr: { y2: 181 }, duration: 0.12, ease: "linear" })
        .fromTo(".edouardBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeEdouard",
        start: "top 100%",
        end: "top 90%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });
}
