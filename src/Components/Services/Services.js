import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";

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
                <a href="#">
                    <button className="button s-button">Download CV</button>
                </a>
                <div
                    className="s-blur1 blur"
                    style={{ background: "#ABF1FF94" }}
                ></div>
            </div>
            {/* Right side */}
            <div className="cards">
                <div style={{ left: "14rem" }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Front-end"}
                        detail={
                            "HTML5, CSS3, Vanilla JavaScript, ReactJs, Bootstrap, Tailwind CSS, Material UI, etc "
                        }
                    />
                </div>
                <div style={{ top: "12rem", left: "-4rem" }}>
                    <Card
                        emoji={Glasses}
                        heading={"Back-end"}
                        detail={"PHP, Node.js, Database:MySql"}
                    />
                </div>
                <div style={{ top: "19rem", left: "12rem" }}>
                    <Card
                        emoji={Humble}
                        heading={"Java Programmer"}
                        detail={
                            "I'm using Java for competitive coding, for problem-solving with a time restriction."
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;
