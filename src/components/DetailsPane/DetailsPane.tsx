import { useEffect, useRef, useState } from "react"
import "./detailsPane.css"

interface detailsPaneProps{
  name: string
  desc: string
  isDetailsPaneOpen: boolean
  setIsDetailsPaneOpen: any
}

export default function DetailsPane(props: detailsPaneProps) {

  const [shaderStyles, setShaderStyles] = useState({})
  const [wrapperStyles, setWrapperStyles] = useState({})
  const [detailsPaneStyles, setDetailsPaneStyles] = useState({})

  const shaderRef: any = useRef()

  function openDetailsPane(){
    props.setIsDetailsPaneOpen(true);
      setWrapperStyles({
        visibility: "visible"
      })
      setShaderStyles({
        opacity: 1
      })
      setDetailsPaneStyles({
        transform: "translateX(0)"
      })
      
    
    
  }

  async function closeDetailsPane(){
    if(props.isDetailsPaneOpen){
      props.setIsDetailsPaneOpen(false);
      setDetailsPaneStyles({
        transform: "translateX(100%)"
      })
      setShaderStyles({
        opacity: 0
      })
      shaderRef.current.ontransitionend = ()=>{
        setWrapperStyles({
          visibility: "hidden"
        })
        shaderRef.current.ontransitionend = null;
      }
    }
    
  }

  function addToForm(){
    const formDetails: HTMLTextAreaElement = document.getElementById("detailsInput") as HTMLTextAreaElement;
    closeDetailsPane();
    window.location.href = "#estimateForm";
    formDetails.focus();
    formDetails.textContent = `Hi, I'm interested in ${props.name}.`;
    formDetails.setSelectionRange(-1, -1);
  }

  useEffect(()=>{
    if(props.isDetailsPaneOpen){
      openDetailsPane();
    }else{
      closeDetailsPane();
    }
  }, [props.isDetailsPaneOpen])


  return (
    <div id="detailsPaneWrapper" style={wrapperStyles}>
      <div
      ref={shaderRef}
      className="shader"
      style={shaderStyles}
      onClick={closeDetailsPane}
      ></div>
      <div id="detailsPane" style={detailsPaneStyles}>
        <button id="detailsPaneClose" onClick={closeDetailsPane}></button>
        <h2 id="detailsPaneName">{props.name}</h2>
        <p id="detailsPaneDescription">{props.desc}</p>
        <button
        id="addServiceToForm"
        onClick={addToForm}
        >Get a quote!</button>
      </div>
    </div>
  )
}
