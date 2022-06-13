import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home_send() {
  let animation = gsap.timeline();
  animation
    .fromTo(".sendTop", { y: 10, duration: 0 }, { y: -156, duration: 0.30, ease: "linear" })

    .fromTo(".openSeven", { attr: { y2: 828 }, duration: 0.30, ease: "linear" }, { attr: { y1: 661 }, duration: 0.30, ease: "linear" }, "<")

    .fromTo(".openSeven", { attr: { y2: 828 }, duration: 0, ease: "linear" }, { attr: { y2: 661 }, duration: 0.12, ease: "linear" })

    .fromTo(".sendBottom", { y: 0, duration: 0 }, { y: -167, duration: 0.12, ease: "linear" }, "<");

  ScrollTrigger.create({
    trigger: ".wholeSend",
    start: "top 65%",
    end: "top 42%",
    markers: { startColor: "black", endColor: "black" },
    scrub: true,
    animation: animation
  })
}
