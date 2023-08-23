interface servicePropTypes{
    name: string
    desc: string
    shortDesc: string
    img: string
    setCurrentServiceName: any,
    setCurrentServiceDesc: any
    setIsDetailsPaneOpen: any
}
export default function Service(props: servicePropTypes) {


// Add OnClick functionality
const clickOrTap = (window.matchMedia("(max-width: 990px)").matches) ? "Tap" : "Click";

function triggerDetailsPane(){
  props.setCurrentServiceDesc(props.desc)
  props.setCurrentServiceName(props.name)
  props.setIsDetailsPaneOpen(true)
}

  return (
    <aside className="service" onClick={triggerDetailsPane}>
        <div>
          <img src={props.img} alt={`Image of ${props.name}`} />
        </div>
        <div className="content">
          <div className="name">{props.name}</div>
          <div className="desc">{props.shortDesc}</div>
        </div>
        <div className="read-more">{clickOrTap} For more</div>
    </aside>
  )
}