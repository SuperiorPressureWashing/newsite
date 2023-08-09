interface servicePropTypes{
    name: string
    desc: string
}
export default function Service(props: servicePropTypes) {


// Add OnClick functionality

async function addToForm(){
  const formDetails: HTMLTextAreaElement = document.getElementById("detailsInput") as HTMLTextAreaElement;
  
  window.location.href = "#estimateForm";
  formDetails.focus();
  formDetails.textContent = `Hi, I'm interested in ${props.name}.`;
  formDetails.setSelectionRange(-1, -1);
}

  return (
    <aside className="service" onClick={addToForm}>
        <div className="name">{props.name}</div>
        <div className="desc">{props.desc}</div>
        <div className="add-service"></div>
    </aside>
  )
}
