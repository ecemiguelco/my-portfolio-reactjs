import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  console.log(id);
  console.log(projectList);
  console.log(project);

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <strong>Skills:</strong> {project.skills}
      </p>
      <NavLink to={project.github}>
        <GitHubIcon />
      </NavLink>
    </div>
  );
}

export default ProjectDisplay;
