import "./HeroImg2Styles.css"; 
import WorkHeroImg from "../assets/programming-picture.jpg";

import React, { Component } from 'react'

class HeroImg2 extends Component{
  
    render(){
    return (
    <div className="hero-img">
        <div className="mask">

            <img className = "intro-img" 
                 src       = {WorkHeroImg}
                 alt       = "intro-img"
            />

        </div>

        <div className="content">

            <h1>Projects</h1>
            <p>Some of my most recent works</p>
    
        </div>  
    </div>
    );
}
}


export default HeroImg2