import React from 'react';
import "./MovieDatabaseStyles.css";
import MovieDatabasePicturePreview from "../assets/movie-maniacs-preview.png";
import YvrWearPicturePreview from "../assets/yvr-wear-preview.png";
import PortfolioPreviewPicture from "../assets/portfolio-preview.png";
import { Link } from "react-router-dom";

const MovieDatabaseProject = () => {
  return (
    <div className='projects-section'>

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {MovieDatabasePicturePreview}
                   alt       = "responsive-template"
              />
<div className='movie-maniac-right-content'>
        <div className='right-content'>
            <h1>Movie Maniacs</h1>
                <h2>MOVIE SEARCHING DATABASE</h2>
                  <p> A movie searching database app made from react that uses an TMDb API. On this app, users have the ability to search for any movie and view an in depth overview of the movie. </p>
                    <div className='buttons'>
                      <Link to  = "/moviemaniacs" className = "learn-more-btn">Learn More</Link>
                      <a href="https://balpreet-dhillon.github.io/moviemaniacs/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
            </div>
        </div>

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {YvrWearPicturePreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>YVR Wear</h1>
                <h2>WORDPRESS ECCOMMERCE SITE</h2>
                  <p>A athletic wear merchandise store where customers can buy t-shirts, shorts, and accessories. This site was created with Wordpress and WooCommerce.</p>

                    <div className='buttons'>
                      <Link to  = "/yvrwear" className = "learn-more-btn">Learn More</Link>
                      <a href="https://merchandise.bcitwebdeveloper.ca/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>

        {/* <div className='section-border-line'><div className='section-border'></div></div> */}

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {PortfolioPreviewPicture}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>Web Portfolio</h1>
                <h2>REACT WEB PORTFOLIO</h2>
                  <p>Built using react, this is a site I have made to showcase my development and design skills that I have learned from BCIT'S Front-End Web Development program.  </p>
                    <div className='buttons'>
                      <Link to  = "/webportfolio" className = "learn-more-btn">Learn More</Link>
                      <a href="https://balpreetdhillon.com/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>









    </div>
  )
}

export default MovieDatabaseProject