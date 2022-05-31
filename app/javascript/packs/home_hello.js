import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_hello () {
    let animation = gsap.timeline();
    animation
      .fromTo(".helloTop", {y: 92, duration: 0 },
        { y:-52, duration: 0.3, ease:"linear"})

      .fromTo(".openOne", { attr: { y2: 169 }, duration: 0.27, ease: "linear" }, { attr: { y2: 30 }, duration: 0.27, ease: "linear" }, "<")

      .fromTo(".openOne", { attr: { y2: 30 }, duration: 0, ease: "linear" }, { attr: { y1: 30 }, duration: 0.1, ease: "linear" })

      .fromTo(".helloBottom", { y: 86, duration: 0}, { y: -100, duration: 0.12, ease: "linear"}, "<");

      ScrollTrigger.create({
        trigger: ".wholeHello",
        start: "top 320px",
        end: "top 128px",
    //    markers: {startColor: "black", endColor: "black"},
         scrub: true,
        animation: animation
     });

}
