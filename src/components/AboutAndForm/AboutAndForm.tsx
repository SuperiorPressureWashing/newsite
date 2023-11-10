import"./about_and_form.css"
import MessageStatus from "./MessageStatus";
import { useState, useEffect } from "react"
import Gallery from "../Gallery/Gallery";

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
              <a href="https://acworth.org/" target="_blank">
                <img src="./img/trusted_icons/acworth.jpg" alt="City of Acworth Logo" className="trusted-icon"/>
              </a>
            </div>
            <Gallery />
            <h2 className="who-title">The Difference</h2>
            <p>We are a professional soft wash, and pressure washing company that puts you first. We treat all of our customers as our own family. We strive to make sure you have a superior experience from start to finish. We educate all of our customers with each service that is requested, so that you can stay in the loop! 
            </p>
        </div>

        <div className="x-seperator"></div>
      
        <form action="https://formsubmit.co/superiorpressurewashing111@gmail.com" id="estimateForm" method="POST">

            <h3 id="formTitle">Get a <em>Free</em> estimate!</h3>

            <label htmlFor="name"><span>*</span> Name</label>
            <input required type="text" name="name" id="nameInput" />

            <label htmlFor="number"><span>*</span> Phone Number</label>
            <input required type="text" name="number" id="numberInput" />

            <label htmlFor="email"><span>*</span> Email Address</label>
            <input required type="email" name="email" id="emailInput" />

            <label htmlFor="email"><span>*</span> Address</label>
            <input required type="text" name="address" id="addressInput" />

            <label htmlFor="details">Details</label>
            <textarea maxLength={1000} name="details" id="detailsInput"></textarea>

            <input type="hidden" name="_next" value={`${window.location.href}?messagesuccess=true`}></input>

            <input type="submit" value="Request Estimate" title="Request Estimate" />
        </form>
        
    </section>
    </>
  )
}
