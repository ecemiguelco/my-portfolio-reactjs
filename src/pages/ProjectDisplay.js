import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];

  return (
    <div className="project">
      <div className="projNameAndRepo">
        <h1>{project.name}</h1>
        <NavLink
          to={project.github}
          rel=" noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </NavLink>
      </div>
      <div className="projDescription">{project.description}</div>

      <NavLink
        to={project.deploy}
        rel=" noopener noreferrer"
        target="_blank"
      >
        <img src={project.image} />
      </NavLink>
      <div className="projectSkills">
        <strong>Technologies:</strong>
        {project.skills.map((ski) => {
          return (
            <Stack
              direction="row"
              spacing={1}
              className="skillTabs"
            >
              <Chip label={`${ski}`} />
            </Stack>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectDisplay;
