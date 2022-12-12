import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/bg-img-home.png";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">

            <img className = "intro-img" 
                 src       = {IntroImg}
                 alt       = "intro-img"
            />

        </div>

        <div className="content">

        <p>Front-End Web Developer/Designer</p>
            <h1>Balpreet Dhillon</h1>
            <div>

            <Link to  = "/work" className = "btn">PROJECTS</Link>
            <Link to  = "/contact" className = "btn-light">CONTACT</Link>

            </div>

        </div>

    </div>
  );
};

export default HeroImg;