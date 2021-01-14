import React from "react";
import { Link} from "react-router-dom";


const Navbar = () => {
   
    return (
        <>
            <ul id="navbar">
                <li><Link id="resume" to="/resume" className={window.location.pathname === "/resume" }>VIEW MY RESUME</Link></li>
                <li ><Link id="about" to="/about"  className={window.location.pathname === "/about" && "active"}>ABOUT</Link></li>
                <li ><Link id="projects" to="/projects" className={window.location.pathname === "/projects"}>PROJECTS</Link></li>
                <li ><Link id="contact" to="/contact" className={window.location.pathname === "/contact"}>CONTACT</Link></li>
            </ul>
        </>
    )
}

export default Navbar;