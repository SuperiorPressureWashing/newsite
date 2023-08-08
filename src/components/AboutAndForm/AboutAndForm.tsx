import"./about_and_form.css"
import MessageStatus from "./MessageStatus";
import { useState, useEffect } from "react"

export default function AboutAndForm() {

const [messageSuccess, setMessageSuccess]:any = useState(null);

useEffect(()=>{
  const urlParams = new URLSearchParams(window.location.search);
  if(urlParams.get("messagesuccess") != undefined){
      setMessageSuccess((urlParams.get("messagesuccess") == "true") ? true : false);
  }
}, [])


  return (
    <>
    {(messageSuccess !== null) && <MessageStatus status={messageSuccess}  />}
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

        <form action="https://formsubmit.co/superiorpressurewashing111@gmail.com" id="estimateForm" method="POST">

            <h3>Get a <em>Free</em> estimate!</h3>

            <label htmlFor="name">Name</label>
            <input required type="text" name="name" id="nameInput" />

            <label htmlFor="number">Phone Number</label>
            <input required type="text" name="number" id="numberInput" />

            <label htmlFor="email">Email Address</label>
            <input required type="email" name="email" id="emailInput" />

            <label htmlFor="details">Details</label>
            <textarea maxLength={1000} name="details" id="detailsInput"></textarea>

            <input type="hidden" name="_next" value={`${window.location.href}?messagesuccess=true`}></input>

            <input type="submit" value="Request Estimate" title="Request Estimate" />
        </form>
    </section>
    </>
  )
}
