import React from "react";
import photoOne from "./readme-generator.png";
import photoTwo from "./Travel-Advisory-Website.png";
import photoThree from "./Weather-Dashboard.png";
import photoFour from "./burger-logger.png";
import photoFive from "./pwa-budget-app.png";
import photoSix from "./battle-rpg.png";
import "./style.css";

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <p>Below are some examples of my work:</p>
            <hr />
            <h3>README Generator</h3>
            <img alt="readme-generator-project" src={photoOne} id="readme-generator-project" />
            <p>My README generator uses JavaScript and node.js to ask a user important questions about this project, and then once they have finished answering a README file is generated with their responses reflected in the appropriate areas of the file.</p>
            <h5><a href="https://github.com/HHH-603/README-Generator">GitHub Repo</a></h5>
            <hr />
            <h3>Travel Advisory Website</h3>
            <img alt="travel-advisory-project" src={photoTwo} id="travel-advisory-project" />
            <p>This is a resource that people can use to research the risk level, COVID-19 statistics, and news of any city they are considering traveling to during this pandemic.</p>
            <h5><a href="https://github.com/HHH-603/Project-1_Travel-Advisory-Website">GitHub Repo</a><span> | </span><a href="https://hhh-603.github.io/Project-1_Travel-Advisory-Website/">Deployed App</a></h5>
            <hr />
            <h3>Weather Dashboard Website</h3>
            <img alt="weather-dashboard-project" src={photoThree} id="weather-dashboard-project" />
            <p>This is my weather dashboard using APIs from OpenWeather to display both current weather and the 5 day forecast for any given city that is queried.</p>
            <h5><a href="https://github.com/HHH-603/Weather-Dashboard">GitHub Repo</a><span> | </span><a href="https://hhh-603.github.io/Weather-Dashboard/">Deployed App</a></h5>
            <hr />
            <h3>Burger Logger Website</h3>
            <img alt="burger-logger-project" src={photoFour} id="burger-logger-project" />
            <p>This burger logger allows users to add burgers to either a "not devoured" or "devoured" section, and then update any non-devoured burgers as having been devoured.</p>
            <h5><a href="https://github.com/HHH-603/Burger-Logger">GitHub Repo</a><span> | </span><a href="https://shielded-reef-60017.herokuapp.com/">Deployed App</a></h5>
            <hr />
            <h3>PWA Budget Tracker</h3>
            <img alt="pwa-budget-app-project" src={photoFive} id="pwa-budget-app-project" />
            <p>This PWA provides users with a resource that they can use, both online and offline, to track their expenses and desposits in their budget.</p>
            <h5><a href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">GitHub Repo</a><span> | </span><a href="https://quiet-temple-68742.herokuapp.com/">Deployed App</a></h5>
            <hr />
            <h3>Battle RPG</h3>
            <img alt="battle-rpg-project" src={photoSix} id="battle-rpg-project" />
            <p>This RPG allows users to pit RPG characters against each other in a battle arena and try to defeat the enemy by dropping their health.</p>
            <h5><a href="https://github.com/HHH-603/Battle_Game_RPG-1">GitHub Repo</a><span> | </span><a href="https://serene-dawn-63330.herokuapp.com/">Deployed App</a></h5>
        </div>
    )
}

export default Projects;