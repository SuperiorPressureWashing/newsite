import "./footer.css"

export default function Footer() {
  return (
    <footer>
      <div id="contactWrapper">
        <h2 className="text">Request a <em>Free</em> estimate!</h2>
        <div className="links">
            <a href="tel:+14042348522">
                <img src="./img/phone_calling_icon.svg" alt="Phone Icon" />
                <span>404-234-8522</span>
            </a>
            <a href="#estimateForm">
            <img src="./img/form_icon.svg" alt="Form Icon" />
                <span>Fill out form</span>
            </a>
        </div>
    </div>
    <div id="footerText">Superior Pressure Washing LLC © 2023</div>
    </footer>
  )
}
