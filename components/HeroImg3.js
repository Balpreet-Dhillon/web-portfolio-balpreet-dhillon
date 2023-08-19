import "./HeroImg3Styles.css"; 
import AboutMeHeroImg from "../assets/about-me-portfolio-picture.png";

import React, { Component } from 'react'

class HeroImg4 extends Component{
  
    render(){
    return (
    <div className="hero-img">
        <div className="mask">

            <img className = "intro-img" 
                 src       = {AboutMeHeroImg}
                 alt       = "intro-img"
            />

        </div>
            <div className="content">

                <h1>About Me</h1>
                <p>Hi, I'm Balpreet Dhillon</p>

            </div>
        </div>

    );
    }
}


export default HeroImg4