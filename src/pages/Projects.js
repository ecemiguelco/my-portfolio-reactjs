import React from "react";
import ProjectItem from "../components/ProjectItem";
import Proj1 from "../assets/pro1.png";
import { projectList } from "../helpers/ProjectList";
import "../styles/Project.css";

function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {projectList.map((project, i) => {
          return (
            <ProjectItem
              image={project.image}
              name={project.name}
              id={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
