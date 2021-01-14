import React from "react";
import photo from "../images/profile-pic.jpg"
function About() {
    return (
        <div>
            <img alt="profile-pic" src={photo} id="profile-pic" />
            <h2>Welcome to my portfolio!</h2>
            <h3>My name is Hank Holmes, and I'm a Full Stack Web Developer experienced in designing dynamic and intuitive user experiences.</h3>
            <h4>My areas of expertise include:</h4>
            <p className="skillset-bulletpoints">JavaScript<span className="bulletpoint-seperaters"> | </span>React.js<span className="bulletpoint-seperaters"> | </span>jQuery<span className="bulletpoint-seperaters"> | </span>Node.js<span className="bulletpoint-seperaters"> | </span>MySQL<span className="bulletpoint-seperaters"> | </span>MongoDB<span className="bulletpoint-seperaters"> | </span>API Interactions<span className="bulletpoint-seperaters"> | </span> </p>
            <h2>ABOUT</h2>
            <p>Ex suas menandri ius, nam putant bonorum cu. Cum et melius appareat appetere, consul neglegentur intellegebat eu vix, cibo dolores democritum est at. Aeterno sanctus persecuti per ad, sed quem solet nominavi ea. Semper docendi repudiare vel no. Errem hendrerit neglegentur vis ne, ferri qualisque qui ut, phaedrum consetetur has te.</p>
        </div>
    )
}

export default About;