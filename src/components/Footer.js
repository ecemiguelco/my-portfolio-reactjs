import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <NavLink
          to="https://www.instagram.com/miguelcoooo/"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </NavLink>
        <NavLink
          to="https://twitter.com/SuperMiiguel"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon />
        </NavLink>
        <NavLink
          to="https://www.facebook.com/miguelcoooo"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <FacebookIcon />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/miguel-lorenzo-co/"
          rel=" noopener noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </NavLink>
      </div>
      <div>
        <DownloadIcon /> Resume
      </div>
      <p>&copy; 2023 Miguel Lorenzo Co</p>
    </div>
  );
}

export default Footer;
