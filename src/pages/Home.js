import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import myImg from "../assets/IMG_5610_crop.JPG";

function Home() {
  return (
    <main className="home">
      <section className="about">
        <img
          className="myImage"
          src={myImg}
          alt="my-image"
          width="180px"
        ></img>
        <h2>Miguel Lorenzo Co</h2>
        <div className="prompt">
          <p>
            I'm an aspiring software engineer that specializes on web development. Focused on buidling accessible,
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
            el=" noopener noreferrer"
            target="_blank"
          >
            <GitHubIcon />
          </NavLink>
        </div>
      </section>

      <section className="skills">
        <div className="stylerBG">
          <h1>Skills</h1>
          <ol className="list">
            <li className="item">
              <h2>Frontend</h2>
              <span className="skillsCtn">
                <div class="skill-item">
                  HTML
                  <img
                    src="https://cdn-icons-png.flaticon.com/32/1051/1051277.png"
                    alt="HTML Logo"
                  />
                </div>
                <div class="skill-item">
                  CSS
                  <img
                    src="https://cdn-icons-png.flaticon.com/32/732/732190.png"
                    alt="CSS Logo"
                  />
                </div>
                <div class="skill-item">
                  Javascript
                  <img
                    src="https://cdn-icons-png.flaticon.com/32/1199/1199124.png"
                    alt="Javascript Logo"
                  />
                </div>
                <div class="skill-item">
                  ReactJS
                  <img
                    src="https://cdn-icons-png.flaticon.com/32/1183/1183672.png"
                    alt="Reactjs Logo"
                  />
                </div>
                <div class="skill-item">
                  ChartJS
                  <img
                    className="charjsIcon"
                    src="https://www.chartjs.org/docs/latest/favicon.ico"
                    alt="Chartjs Logo"
                  />
                </div>
              </span>
            </li>
            <li className="item">
              <h2>Backend</h2>
              <span className="skillsCtn">
                <div class="skill-item">
                  NodeJS
                  <img
                    src="https://cdn-icons-png.flaticon.com/32/919/919825.png"
                    alt="Nodejs Logo"
                  />
                </div>
                <div class="skill-item">
                  MongoDB
                  <img
                    src="https://img.icons8.com/?size=32&id=iFoT5Ds3iK1c&format=png"
                    alt="MongoDB Logo"
                  />
                </div>
              </span>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Home;
