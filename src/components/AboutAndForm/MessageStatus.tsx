import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import successAnim from "./anim/success.json";
import errorAnim from "./anim/error.json";
import { useRef } from 'react';

interface messageSuccessProps{
  status: boolean
}

export default function MessageSuccess(props: messageSuccessProps) {
    window.history.replaceState({id:999}, "Page", window.location.origin)

    const wrapperElem: any = useRef();

    function animEnd(){
        wrapperElem.current.style.opacity = "0";
    }
    

  return (
    <div
    ref={wrapperElem}
    onTransitionEnd={(evt)=>{evt.currentTarget.style.display = "none";}}
    id="messageSuccess">
        <div id="messageSuccessWrapper">
            <Lottie
            animationData={(props.status) ? successAnim : errorAnim}
            play={true}
            loop={false}
            onComplete={animEnd}
            ></Lottie>
        </div>
    </div>
  )
}
