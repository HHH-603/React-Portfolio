import React, { Component } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import MyProjects from "../../myprojects.json";

class ProjectList extends Component {
    state = {
        MyProjects
    };

    render() {
        return (
            <Wrapper>
                {this.state.MyProjects.map(myproject => (
                    <ProjectCard
                        id={myproject.id}
                        key={myproject.id}
                        name={myproject.name}
                        description={myproject.description}
                        repository={myproject.repository}
                        deployed={myproject.deployed}
                        image={myproject.image}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default ProjectList;