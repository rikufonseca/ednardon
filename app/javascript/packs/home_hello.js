import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_hello () {
  ScrollTrigger.matchMedia({
    "(min-width: 700px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".helloTop", {y: 92, duration: 0 },
          { y:-23, duration: 0.3, ease:"linear"})
        .fromTo(".openOne", { attr: { y2: 175 }, duration: 0.30, ease: "linear" }, { attr: { y1: 60 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openOne", { attr: { y1: 175 }, duration: 0, ease: "linear" }, { attr: { y2: 60 }, duration: 0.12, ease: "linear" })
        .fromTo(".helloBottom", { y: 85, duration: 0}, { y: -30, duration: 0.12, ease: "linear"}, "<");

      ScrollTrigger.create({
        trigger: ".wholeHello",
        start: "top 100%",
        end: "top 80%",
    //    markers: {startColor: "black", endColor: "black"},
        scrub: true,
        animation: animation
      });
    }
  });

  ScrollTrigger.matchMedia({
    "(min-width: 280px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".helloTop", { y: 92, duration: 0 },
          { y: -23, duration: 0.3, ease: "linear" })
        .fromTo(".openOne", { attr: { y2: 175 }, duration: 0.30, ease: "linear" }, { attr: { y1: 60 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openOne", { attr: { y1: 175 }, duration: 0, ease: "linear" }, { attr: { y2: 60 }, duration: 0.12, ease: "linear" })
        .fromTo(".helloBottom", { y: 85, duration: 0 }, { y: -30, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeHello",
        start: "top 100%",
        end: "top 90%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });
}
