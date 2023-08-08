import Service from "./Service"
import serviceData from "./serviceData"
import "./services.css"

const serviceElems = serviceData.map((data, i)=>{
    return <Service key={i} {...data}/>
});

export default function Services() {
  return (
   <>
   <h1 id="servicesTitle">Services</h1>
    <div id="servicesWrapper">
        {serviceElems}
    </div>
   </>
  )
}
