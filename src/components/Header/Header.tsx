import "./header.css"
import gsap from "gsap"
import { useEffect } from "react"



export default function Header() {

  useEffect(()=>{
    gsap.to("#headerContent h1, #headerContent h3", {
      y: 0,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1,
      stagger: 0.5
    })
  }, [])

  return (
    <header>
        <a href="tel:+14042348522" className="phone-icon"></a>
        <div id="headerContent">
            <h1>Superior</h1>
            <h3>Pressure Washing LLC</h3>
            <a href="#estimateForm">Request a <em>Free</em> estimate!</a>
        </div>
    </header>
  )
}
