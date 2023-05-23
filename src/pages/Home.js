import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Zoom from "@mui/material/Zoom";
import myImg from "../assets/IMG_5610_crop.JPG";

function Home() {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip
      {...props}
      classes={{ popper: className }}
    />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.white,
    },
  }));

  return (
    <main className="home">
      <section className="about">
        <img
          className="myImage"
          src={myImg}
          alt="my-profpic"
        ></img>
        <h2 className="aboutName">Miguel Lorenzo Co</h2>
        <div className="prompt">
          <p className="aboutDescrip">
            I'm a software engineer that specializes on full-stack web development. Focused on building accessible,
            user-friendly, and creative websites.
          </p>
          <NavLink
            to="https://www.linkedin.com/in/miguel-lorenzo-co/"
            rel=" noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </NavLink>
          <NavLink
            to="mailto:ece.miguel.co@gmail.com"
            rel=" noopener noreferrer"
            target="_blank"
          >
            <EmailIcon />
          </NavLink>
          <NavLink
            to="https://github.com/ecemiguelco"
            rel=" noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </NavLink>
        </div>
      </section>

      <section className="skills">
        <div className="stylerBG">
          <h1>Skills</h1>

          <div className="skillsContainer">
            <LightTooltip
              title="HTML"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/html.png"
                alt="html-logo"
              ></img>
            </LightTooltip>
            <LightTooltip
              title="CSS"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/css.png"
                alt="css-logo"
              ></img>
            </LightTooltip>
            <LightTooltip
              title="Javascipt"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/java-script.png"
                alt="js-logo"
              ></img>
            </LightTooltip>
          </div>
          <div className="skillsContainer">
            <LightTooltip
              title="Bootstrap"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/bootstrap.png"
                alt="bootstrap-logo"
              ></img>
            </LightTooltip>
            <LightTooltip
              title="Material UI"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/muiicon.png"
                alt="mui-logo"
              ></img>
            </LightTooltip>
          </div>
          <div className="skillsContainer">
            <LightTooltip
              title="React.Js"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/react.png"
                alt="react-logo"
              ></img>
            </LightTooltip>
            <LightTooltip
              title="Node.Js"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/nodejs.png"
                alt="nodejs-logo"
              ></img>
            </LightTooltip>
            <LightTooltip
              title="MongoDB"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/mongodb.png"
                alt="mongodb-logo"
              ></img>
            </LightTooltip>
          </div>
          <div className="skillsContainer">
            <LightTooltip
              title="Git"
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <img
                src="./assets/gitcontrol.png"
                alt="git-logo"
              ></img>
            </LightTooltip>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
