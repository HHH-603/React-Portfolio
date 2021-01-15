import React from "react";
import photo from "./profile-pic.jpg"
import "./style.css";

const About = () => {
    return (
        <div>
            <img alt="profile-pic" src={photo} id="profile-pic-one" />
            <h1>Welcome to my portfolio!</h1>
            <h3>My name is Hank Holmes, and I'm a Full Stack Web Developer experienced in designing dynamic and intuitive user experiences.</h3>
            <h4>My areas of expertise include:</h4>
            <h5 className="skillset-bulletpoints">JavaScript<span className="bulletpoint-seperaters"> | </span>React.js<span className="bulletpoint-seperaters"> | </span>jQuery<span className="bulletpoint-seperaters"> | </span>Node.js<span className="bulletpoint-seperaters"> | </span>MySQL<span className="bulletpoint-seperaters"> | </span>MongoDB<span className="bulletpoint-seperaters"> | </span>API Interactions<span className="bulletpoint-seperaters"> | </span> </h5>
            <hr />
            <h2>ABOUT</h2>
            <p>I'm originally from Concord, New Hampshire, and currently call Charlotte, North Carolina home. I earned my Full Stack Web Development certification from UNC Charlotte, and my BA in Political Science and Music from Randolph-Macon College.Before pursuing a carrer in web development, I spen several years working in the nonprofit CRM/SaaS industry, where I specialized in assisting small to mid-sized environmental conservancies and foundations.</p>
        </div>
    )
}

export default About;