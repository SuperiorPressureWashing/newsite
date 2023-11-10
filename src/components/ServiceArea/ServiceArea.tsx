import "./servicearea.css"
import Area from "./Area.tsx"
import areaData from "./areaData"

export default function ServiceArea() {

    const areaElems = areaData.map((area, i)=>{
        return <Area area={area} key={i} />
    })

  return (
    <section id="serviceArea">
        <div id="areas">
            <h2>Service Area</h2>
            {areaElems}
            <div id="areasShader"></div>
        </div>
        <div id="serviceAreaMap">
        <div id="menuCover"></div>
        <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1bCgL0sSznR3U5MsP3am2gxbN_te7m74&ehbc=2E312F&noprof=1"></iframe>
        </div>
    </section>
  )
}
