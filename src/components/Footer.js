import React from "react";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <NavLink
          to="https://www.instagram.com/miguelcoooo/"
          rel="noreferrer"
          target="_blank"
        >
          <InstagramIcon />
        </NavLink>
        <NavLink
          to="https://twitter.com/SuperMiiguel"
          rel="noreferrer"
          target="_blank"
        >
          <TwitterIcon />
        </NavLink>
        <NavLink
          to="https://www.facebook.com/miguelcoooo"
          rel="noreferrer"
          target="_blank"
        >
          <FacebookIcon />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/in/miguel-lorenzo-co/"
          rel="noreferrer"
          target="_blank"
        >
          <LinkedInIcon />
        </NavLink>
      </div>

      <div className="contactAndResume">
        <NavLink
          className="resumeDlBtn"
          to="https://drive.google.com/file/d/1vTc02Rr_HpJlC8ZEqayLAifSfJfthEp4/view?usp=sharing"
          rel="noreferrer"
          target="_blank"
          download
        >
          <DownloadIcon /> Resume
        </NavLink>
        <div className="contactIconEmail">
          <EmailIcon />
          <span className="myEmail">ece.miguel.co@gmail.com</span>
        </div>
      </div>

      <div className="iconAttributions">
        <a
          target="_blank"
          href="https://icons8.com/icon/v8RpPQUwv0N8/html-5"
          rel="noreferrer"
        >
          HTML
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/7gdY5qNXaKC0/css3"
          rel="noreferrer"
        >
          CSS
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/PXTY4q2Sq2lG/javascript"
          rel="noreferrer"
        >
          JavaScript
        </a>{" "}
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/84710/bootstrap"
          rel="noreferrer"
        >
          Bootstrap
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/gFw7X5Tbl3ss/material-ui"
          rel="noreferrer"
        >
          Material UI
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/NfbyHexzVEDk/react"
          rel="noreferrer"
        >
          React
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/54087/nodejs"
          rel="noreferrer"
        >
          Nodejs
        </a>
        ,{" "}
        <a
          target="_blank"
          href="https://icons8.com/icons/set/mongodb"
          rel="noreferrer"
        >
          MongoDB
        </a>
        , and{" "}
        <a
          target="_blank"
          href="https://icons8.com/icon/20906/git"
          rel="noreferrer"
        >
          Git
        </a>{" "}
        icons by{" "}
        <a
          target="_blank"
          href="https://icons8.com"
          rel="noreferrer"
        >
          Icons8
        </a>
      </div>

      <div className="copyRight">&copy; 2023 Miguel Lorenzo Co</div>
    </div>
  );
}

export default Footer;
