import React from 'react';
import "./MovieManiacsStyles.css";
import YvrWearLaptopImg from "../assets/yvr-single-preview.png";

const MovieManiacsHero = () => {
  return (
    <div className="hero-img">

        <div className="movie-maniac-title-subtitle">

            <h1>YVR Wear</h1>
            <p>WORDPRESS ECCOMMERCE SITE</p>
    
        </div> 

        <div className="movie-maniacs-laptop-view">

          <img className = "laptop-img" 
               src       = {YvrWearLaptopImg}
               alt       = "laptop-img"
          />
    
        </div>
    </div>
  )
}

export default MovieManiacsHero