import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTop = () => {
    const [BackToTop,setBackToTop] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>82){
                setBackToTop(true)
            }
            else{
                setBackToTop(false)
            }
        })
    })
    const scrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }
  return (
    <div>
        {BackToTop && (
            <button className="bg-slate-100 rounded-full col-start-10 text-center text-xl fixed right-8 bottom-16 hover:bg-amber-200 sm:right-14 md:bottom-8" onClick={scrollUp}>
                <FontAwesomeIcon icon={faArrowUp} className="px-4 py-3" />
            </button>
        )}
    </div>
  )
}

export default BackToTop