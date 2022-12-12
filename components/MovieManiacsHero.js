import React from 'react';
import "./MovieManiacsStyles.css";
import MovieManiacLaptopImg from "../assets/single-movie-maniacs-preview.png";

const MovieManiacsHero = () => {
  return (
    <div className="hero-img">
        <div className="movie-maniac-title-subtitle">

            <h1>Movie Maniacs</h1>
            <p>MOVIE SEARCHING DATABASE</p>
    
        </div>  

        <div className="movie-maniacs-laptop-view">

          <img className = "laptop-img" 
               src       = {MovieManiacLaptopImg}
               alt       = "laptop-img"
          />

        </div>
      </div>
  )
}

export default MovieManiacsHero