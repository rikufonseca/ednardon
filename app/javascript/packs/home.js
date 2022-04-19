import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function home () {
  let animation = gsap.fromTo(".img-one", {scaleY:1},{scaleY:1.5}, 0);
  
  ScrollTrigger.create({
    trigger: ".down",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation,
  });

  let animation1 = gsap.fromTo(".img-two", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-one",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation1,
  });

  let animation2 = gsap.fromTo(".img-three", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-two",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation2,
  });

  let animation3 = gsap.fromTo(".img-four", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-three",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation3,
  });

  let animation4 = gsap.fromTo(".img-five", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-four",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation4,
  });

  let animation5 = gsap.fromTo(".img-six", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-five",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation5,
  });

  let animation6 = gsap.fromTo(".img-seven", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-six",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation6,
  });

  let animation7 = gsap.fromTo(".img-eight", {scaleY:1, scaleX:1},{scaleY:1.5, scaleX:1}, 0);

  ScrollTrigger.create({
    trigger: ".img-seven",
    start: "top top += 47px",
    end: "bottom 47px",
    markers: {startColor: "black", endColor: "black"},
    scrub: true,
    animation: animation7,
  });

    const one = document.querySelector(".one");
  //  const two = document.querySelector(".img-two");
  //  const three = document.querySelector(".img-three");
  //  const four = document.querySelector(".img-four");
  //  const five = document.querySelector(".img-five");
  //  const six = document.querySelector(".img-six");
  //  const seven = document.querySelector(".img-seven");
  //  const eight = document.querySelector(".mail");

    const CSSStyleDeclaration = getComputedStyle(one);
    const font = CSSStyleDeclaration.fontVariationSettings;
    
  window.addEventListener("scroll", function(){
    const onePosition = one.getBoundingClientRect();
    const y = onePosition.top;
    
    const getByKey = (key) => {
      let keyValues = new Map();
      let tempArr = font.split(',');
      tempArr.forEach(x => {
        let keyVal = x.trim().split(' ');
        keyValues.set(keyVal[0], keyVal[1]);
      });
      keyValues.get(key);
    }

     if ( y <= 127.79545593261719 && y >= 25.25 ){ 
       let value = getByKey('"YTRA"');
       value ++;
     };
    });

}
