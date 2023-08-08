import"./about_and_form.css"

export default function AboutAndForm() {
  return (
    <section id="section1">
        <div id="section1Text">
            <h2>Trusted By</h2>
            <div id="trustedWrapper">
                <img src="/img/trusted_icons/acworth.jpg" alt="City of Acworth Logo" className="trusted-icon"/>
            </div>
            <h2 className="who-title">Who we are</h2>
            <p>We are a leader in the pressure washing industry. We are located in Adairsville Georgia. We believe in excellent work, and we are looking to establish new customer relationships through our work.
</p>
        </div>

        <div className="x-seperator"></div>

        <form action="#6" id="estimateForm" method="POST">

            <h3>Get a <em>Free</em> estimate!</h3>

            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="nameInput" />

            <label htmlFor="number">Phone Number</label>
            <input required type="text" name="number" id="numberInput" />

            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="emailInput" />

            <label htmlFor="details">Details</label>
            <textarea required name="details" id="detailsInput"></textarea>

            <input type="submit" value="Request Estimate" />
        </form>
    </section>
  )
}
