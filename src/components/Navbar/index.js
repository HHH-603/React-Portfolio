import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item px-1 font-weight-bold"><Link style={{ textDecoration: "none" }} id="about" to="/about" className={window.location.pathname === "/about" && "active"}>ABOUT </Link></li>
                <li className="nav-item px-1 font-weight-bold"><Link style={{ textDecoration: "none" }} id="projects" to="/projects" className={window.location.pathname === "/projects"}>PROJECTS </Link></li>
                <li className="nav-item px-1 font-weight-bold"><Link style={{ textDecoration: "none" }} id="contact" to="/contact" className={window.location.pathname === "/contact"}>CONTACT</Link></li>
            </ul>
        </>
    )
}
export default Navbar;