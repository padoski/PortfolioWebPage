import React from "react";
import "./topbar.scss";
import MailIcon from "@material-ui/icons/Mail";
import PhoneIcon from "@material-ui/icons/Phone";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Paweł Gładysz
          </a>
          <div className="itemContainer">
            <PhoneIcon className="icon personalDateText" />
            <span className="personalDateText">+48 690 001 591</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon personalDateText" />
            <span className="personalDateText">padosky.gladysz@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/pawe%C5%82-g%C5%82adysz-a356241a8/"
              className="logo"
            >
              <div className="linkedIn">
                <LinkedInIcon className="icon" />
                <span className="personalDateText">LinkedIn</span>
              </div>
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/padoski" className="logo">
              <div className="linkedIn">
                <GitHubIcon className="icon" />
                <span className="personalDateText">padoski</span>
              </div>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
