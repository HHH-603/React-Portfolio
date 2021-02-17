import React from "react";
import "./style.css";

function ProjectCard(props) {
    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <div className="card text-white bg-dark">
                        <img src={props.image} className="card-img-top" alt={props.name} />
                        <div className="card-body">
                            <div className="card-title">{props.name}</div>
                            <p className="card-text"><strong>Description: </strong>{props.description}</p>
                            <p className="card-text"><strong>GitHub Repository: </strong>{props.repository}</p>
                            <p className="card-text"><strong>Deployed Application: </strong>{props.deployed}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;