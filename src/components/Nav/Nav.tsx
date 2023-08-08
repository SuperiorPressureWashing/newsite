import "./nav.css"

export default function Nav() {
  return (
    <nav id="mainNav" className="center">
        <div id="navContent" className="center">
          <span className="logo">Superior Pressure Washing</span>
          <div className="seperator"></div>
          <div id="navLinks">
            <a href="#about" className="nav-link">About</a>
            <a href="#gallery" className="nav-link">Gallery</a>
            <a href="#estimateForm" className="nav-link">Contact</a>
          </div>
        </div>
        <a id="facebookIcon" target="_blank" href="https://www.facebook.com/people/Superior-Pressure-Washing-LLC/100087068977228/">
          <img src="/img/facebook_icon.svg" alt="Facebook Icon" />
        </a>
    </nav>
  )
}
