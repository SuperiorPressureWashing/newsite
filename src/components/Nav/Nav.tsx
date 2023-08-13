import "./nav.css"
import { useState, useRef } from "react"
import gsap from "gsap";

export default function Nav() {

const mobileNavRef: any = useRef();
const hamburgerMenuRef: any = useRef()
const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  function openNav(){
    gsap.to(mobileNavRef.current,{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.1,
      ease: "power1.in"
    })

    setIsMobileNavOpen(true);
  }
  function closeNav(){
    gsap.to(mobileNavRef.current,{
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.2,
      ease: "power1.out"
    })
    setIsMobileNavOpen(false);
  }

  function toggleNav(){
    if(!isMobileNavOpen){
      openNav();
    }else{
      closeNav();
    }
  }

  window.addEventListener("click", (evt)=>{
    //@ts-ignore
    if(!(hamburgerMenuRef.current.id == evt.target.id) && window.matchMedia("(max-width: 649px)").matches){
      closeNav();
    }
  })

  return (
    <nav id="mainNav" className="center">
        <div id="navContent" className="center">

          <button
          onClick={toggleNav}
          id="hamburgerMenu"
          className="mobile"
          ref={hamburgerMenuRef}
          ></button>
          
          <span className="logo">Superior Pressure Washing LLC</span>
          <div className="seperator no-mobile"></div>

          <div id="navLinks" ref={mobileNavRef}>
            <a href="#section1" className="nav-link">About</a>
            <a href="#galleryWrapper" className="nav-link">Gallery</a>
            <a href="#servicesTitle" className="nav-link">Services</a>
          </div>

        </div>

        <a id="facebookIcon" target="_blank" href="https://www.facebook.com/people/Superior-Pressure-Washing-LLC/100087068977228/">
          <img src="./img/facebook_icon.svg" alt="Facebook Icon" />
        </a>
    </nav>
  )
}
