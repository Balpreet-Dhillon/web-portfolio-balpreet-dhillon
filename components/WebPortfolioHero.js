import React from 'react';
import "./MovieManiacsStyles.css";
import PortfolioLaptopImg from "../assets/portfolio-desktop-preview.png";

const MovieManiacsHero = () => {
  return (
    <div className="hero-img">
        <div className="movie-maniac-title-subtitle">

            <h1>Web Portfolio</h1>
            <p>REACT WEB PORTFOLIO</p>
    
        </div>  

        <div className="movie-maniacs-laptop-view">

          <img className = "laptop-img" 
               src       = {PortfolioLaptopImg}
               alt       = "laptop-img"
          />

        </div>
    </div>
  )
}

export default MovieManiacsHero