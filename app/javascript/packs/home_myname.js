import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_myname() {
  ScrollTrigger.matchMedia({
    "(min-width: 700px)": function () {
       let animation = gsap.timeline();
       animation
         .fromTo(".myNameTop", { y: 185, duration: 0 },
           { y: 20, duration: 0.30, ease: "linear" })
         .fromTo(".openTwo", { attr: { y2: 401 }, duration: 0.30, ease: "linear" }, { attr: { y1: 234 }, duration: 0.30, ease: "linear" }, "<")
         .fromTo(".openTwo", { attr: { y2: 401 }, duration: 0, ease: "linear" }, { attr: { y2: 234 }, duration: 0.12, ease: "linear" })
         .fromTo(".myNameBottom", { y: 175, duration: 0 }, { y: 9.6, duration: 0.12, ease: "linear" }, "<");

       ScrollTrigger.create({
        trigger: ".wholeMyName",
        start: "top 100%",
        end: "top 80%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });

  ScrollTrigger.matchMedia({
    "(min-width: 280px) and (max-width: 699px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".myNameTop", { y: 185, duration: 0 },
          { y: 20, duration: 0.30, ease: "linear" })
        .fromTo(".openTwo", { attr: { y2: 401 }, duration: 0.30, ease: "linear" }, { attr: { y1: 234 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openTwo", { attr: { y2: 401 }, duration: 0, ease: "linear" }, { attr: { y2: 234 }, duration: 0.12, ease: "linear" })
        .fromTo(".myNameBottom", { y: 175, duration: 0 }, { y: 9.6, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeMyName",
        start: "top 100%",
        end: "top 90%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });
}
