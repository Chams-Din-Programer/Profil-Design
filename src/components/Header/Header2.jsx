import {useState} from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';
import Menuitems2 from './Menuitems2';

const Header2 = () => {
  const Link = [
    {name: "Home",link:"/"},
    {name: "About",link:"/about"},
    {name: "Services",link:"/services"},
    {name: "Gallery",link:"/gallery"},
    {name: "Feedback",link:"/feedback"},
  ]
  const [show,setShow] = useState(false)
  const showMenu = ()=>{
    setShow(!show)
  }

  const [ fix, setFix] = useState(false)
  const setFixed =()=> {
    if(window.scrollY >= 82){
      setFix(true)
    }
    else{
      setFix(false)
    }
  }
  window.addEventListener('scroll', setFixed)

  return (
    <>
    <header className={fix ?"bg-black text-white flex fixed justify-between items-center w-full px-8 py-4 md:px-16 lg:px-20 xl:px-24 xl:text-lg 2xl:px-28":
    "bg-neutral-800 text-white flex justify-between items-center w-full px-8 py-6 md:px-16 lg:px-20 xl:px-24 xl:text-lg 2xl:px-28"}>
      <div className="font-semibold font-mono ml-4 text-3xl md:ml-6 lg:ml-8 xl:ml-10">
        <NavLink to='/'><h1>Brand</h1></NavLink>
      </div>
      <div className="absolute right-20 sm:hidden scale-150">
          <FontAwesomeIcon icon={show ? faXmark:faBars} onClick={showMenu} className="scale-150 cursor-pointer"/>
      </div>
      <nav>
        <ul className="hidden sm:flex justify-center gap-3 md:gap-8 lg:gap-12 2xl:gap-14 font-medium">
          {Link.map((link=>
            <li className="hover:bg-white hover:text-black px-2 lg:px-3 2xl:px-6 py-1.5 rounded-md hover:duration-300">
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Menuitems2 show={show} Link={Link}/>
    </header>
    </>
  )
}

export default Header2