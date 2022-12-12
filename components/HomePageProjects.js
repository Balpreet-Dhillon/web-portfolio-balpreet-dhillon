import React from 'react';
import "./MovieDatabaseStyles.css";
import MovieDatabasePicturePreview from "../assets/movie-maniacs-preview.png";
import YvrWearPicturePreview from "../assets/yvr-wear-preview.png";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";


const HomePageProjects = () => {
  return (

    <div className='home-page-projects-section'>
        <div className='project'>
          <div className='responsive-template-img'>
              <img className = "responsive-template"  
                   src       = {MovieDatabasePicturePreview}
                   alt       = "responsive-template"
              />
          </div>
      <div className='movie-maniac-right-content'>
        <div className='right-content'>
            <h1>Movie Maniacs</h1>
                <h2>MOVIE SEARCHING DATABASE</h2>
                  <p>A movie searching database app made from react that uses an TMDb API. On this app, users have the ability to search for any movie and view it's overview summary.</p>
                    <div className='buttons'>
                      <Link to  = "/moviemaniacs" className = "learn-more-btn">Learn More</Link>
                      <a href="https://balpreet-dhillon.github.io/moviemaniacs/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
            </div>
        </div>

        {/* <div className='section-border-line'><div className='section-border'></div></div> */}
        <div className='project'>
          <div className='responsive-template-img'>
              <img className = "responsive-template" 
                   src       = {YvrWearPicturePreview}
                   alt       = "responsive-template"
              />
          </div>

        <div className='right-content'>
            <h1>YVR Wear</h1>
                <h2>WORDPRESS ECCOMMERCE SITE</h2>
                  <p>A athletic wear merchandise store where customers can buy t-shirts, shorts, and accessories. This site was created with Wordpress and WooCommerce. </p>
                    <div className='buttons'>
                      <Link to  = "/yvrwear" className = "learn-more-btn">Learn More</Link>
                      <a href="https://merchandise.bcitwebdeveloper.ca/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>

            <div className='view-more-button'>
      
                <Link to  = "/work" className = "view-more-btn">View More<TiArrowSortedDown className="arrow-icon" size={30} style={{color: "#fff", marginRight: "2rem", position: "relative", bottom: "-0.55rem", }}/></Link>
    
            </div>
    </div>
  )
}

export default HomePageProjects