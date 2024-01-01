import { NavLink } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer2 = () => {
    const Link = [
        {name: "Home",link:"/"},
        {name: "About",link:"/about"},
        {name: "Services",link:"/services"},
        {name: "Gallery",link:"/gallery"},
        {name: "Feedback",link:"/feedback"},
      ]
  return (
    < >
    <footer className="bg-neutral-800 w-full text-white md:grid md:grid-cols-3 py-6 text-center xs:grid xs:grid-cols-2 gap-4">
        <ul>
            <h1 className="pb-4 font-semibold text-2xl">Links</h1>
            {Link.map((link) =>
                <li className="py-0.5">
                    <NavLink to={link.link}>{link.name}</NavLink>
                </li>
            )}
        </ul>
        <div className="mt-4 xs:mt-0">
            <h1 className="pb-7 font-semibold text-2xl">News Letter</h1>
            <form>
                <input className="p-1.5 w-48 rounded-md" type="text" placeholder="Enter your email address" /><br />
                <button className="mt-4 bg-slate-200 hover:bg-slate-400 rounded-full py-2 px-8 text-md text-black font-medium" type="submit">Subscribe Now</button>
            </form>
        </div>
        <div className="col-span-3 md:col-span-1 mt-4 xs:mt-0">
            <h1 className="pb-4 font-semibold text-2xl">Contact</h1>
            <p>123,xyz Road, ABC 20 <span className="block"> Hisar, Haryana, India</span></p>
            <div className="mt-2 flex justify-center gap-4">
                <a href="https://www.facebook.com">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com">
                    <FaInstagram />
                </a>
                <a href="https://www.youtube.com">
                    <FaYoutube />
                </a>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer2