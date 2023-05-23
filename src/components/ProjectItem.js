import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Project.css";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage"
      />
      <div className="projectItemLowerBox">
        <span className="projectItemName">{name}</span>
        <span className="projectItemUtilText">Click for more details</span>
      </div>
    </div>
  );
}

export default ProjectItem;
