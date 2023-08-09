import Service from "./Service"
import serviceData from "./serviceData"
import { useEffect, useRef } from "react";
import "./services.css"
import gsap from "gsap";

const serviceElems = serviceData.map((data, i)=>{
    return <Service key={i} {...data}/>
});

export default function Services() {

  const wrapperRef: any = useRef();

  function animateElems(elems: Element[]){
    gsap.to(elems, {
      opacity: 1,
      x: 0,
      duration: 0.3,
      ease: "power4.inOut",
      stagger: 0.1
    })
  }
  

  // Add animations
  useEffect(()=>{

    const animObserver = new IntersectionObserver((elems)=>{
      const elemsToAnimate: Element[] = [];
      elems.forEach((elem)=>{
        if(elem.isIntersecting){
          elemsToAnimate.push(elem.target);
          animObserver.unobserve(elem.target)
        }
      })
      if(elemsToAnimate.length > 1){
        animateElems(elemsToAnimate)
      }
    }, {threshold: 0.3});

    ([...wrapperRef.current.children]).forEach((elem)=>{
      animObserver.observe(elem)
    })
  }, [])

  return (
   <>
   <h1 id="servicesTitle">Services</h1>
    <div id="servicesWrapper" ref={wrapperRef}>
        {serviceElems}
    </div>
   </>
  )
}
