import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";

function Services() {
    return (
        <div className="services">
            {/* Left side */}
            <div className="awesome">
              <span>My Awesome</span>
              <span>Services</span>
              <span>
              I'm a Web development: As a front-end and back-end developer
              <br />
              Java programmer for competitive programming
              </span>
              <button className="button s-button">Download CV</button>
              <div className="s-blur1 blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/* Right side */}
            <div className="cards">
              I am the Right Side
            </div>
        </div>
    );
}

export default Services;
