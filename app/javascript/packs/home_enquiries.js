import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_enquiries() {
  ScrollTrigger.matchMedia({
    "(min-width: 700px)": function () {
      let animation = gsap.timeline();
      animation
        .fromTo(".enquiriesTop", { y: 10, duration: 0 }, { y: -157, duration: 0.30, ease: "linear" })
        .fromTo(".openSix", { attr: { y2: 710 }, duration: 0.30, ease: "linear" }, { attr: { y1: 543 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openSix", { attr: { y2: 710 }, duration: 0, ease: "linear" }, { attr: { y2: 543 }, duration: 0.12, ease: "linear" })
        .fromTo(".enquiriesBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeEnquiries",
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
        .fromTo(".enquiriesTop", { y: 10, duration: 0 }, { y: -157, duration: 0.30, ease: "linear" })
        .fromTo(".openSix", { attr: { y2: 710 }, duration: 0.30, ease: "linear" }, { attr: { y1: 543 }, duration: 0.30, ease: "linear" }, "<")
        .fromTo(".openSix", { attr: { y2: 710 }, duration: 0, ease: "linear" }, { attr: { y2: 543 }, duration: 0.12, ease: "linear" })
        .fromTo(".enquiriesBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

      ScrollTrigger.create({
        trigger: ".wholeEnquiries",
        start: "top 100%",
        end: "top 90%",
    //    markers: { startColor: "black", endColor: "black" },
        scrub: true,
        animation: animation
      });
    }
  });
}
