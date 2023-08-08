import "./commercial_residential.css"

export default function CommercialResidential() {
  return (
    <div id="commercialResidentialWrapper">
        <div id="commercial">
            <img src="/img/commercial.svg" alt="Commercial Icon" />
            <h2 className="title">Commercial</h2>
            <p>A routine wash will extend the life of your commercial property. It keeps the appeal of your business nice and fresh. Includes retail, restaurants, banks, office space, and much more.</p>
        </div>
        <div id="residential">
            <img src="/img/residential.svg" alt="Residential Icon" />
            <h2 className="title">Residential</h2>
            <p>It is important that a house is washed at least one to two times a year. It gives your house a nice appeal with a safe protection against mold or mildew on the outside of your house. Neglect of washing can result not only in a bad appearance, but also intrusion of mold or mildew into the house.</p>
        </div>
    </div>
  )
}
