import "./header.css"

export default function Header() {
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
