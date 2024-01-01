import { NavLink } from "react-router-dom";

const Menuitems2 = ({show,Link}) => {
    return(
        <div className={show ? "flex-col flex fixed items-center justify-center inset-0 top-20 text-center uppercase sm:hidden bg-black text-white font-medium":"hidden"}>
            <ul>
            {Link.map((link=>
            <li className="hover:text-cyan-500 m-20 rounded-md hover:duration-300">
              <NavLink to={link.link}>{link.name}</NavLink>
            </li>
          ))}
            </ul>
        </div>
    )
}

export default Menuitems2