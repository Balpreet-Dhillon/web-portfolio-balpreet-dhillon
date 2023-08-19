import React from 'react';
import "./MovieDatabaseStyles.css";
import MovieDatabasePicturePreview from "../assets/movie-maniacs-preview.png";
import YvrWearPicturePreview from "../assets/yvr-wear-preview.png";
import PortfolioPreviewPicture from "../assets/portfolio-preview.png";
// import TracaloriePreviewPicture from "../assets/project-preview.png";
import MemoryGamePreview from "../assets/memorygamepreview.png";
import GitHubFinderPreview from "../assets/github-finder-preview.png";
import WeatherAppPreview from "../assets/weather-app-preview.png";
import YaleAppPreview from "../assets/yalepreview.png";
import CleanUpPreview from "../assets/cleanupuxtemplate.png";
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

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {MemoryGamePreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>Mix & Match</h1>
                <h2>JAVASCRIPT MEMORY GAME</h2>
                  <p>This is a Mix & Match Memory Game I made using JavaScript, HTML, CSS. In this application, the user tries to match as many cards as they can to win the game. Throughout development, I worked with using functions, setInterval Method, Event listeners, for loops, if-loops, and other JavaScript Methods.</p>
                    <div className='buttons'>
                      <a href="https://github.com/Balpreet-Dhillon/memorygame" className='learn-more-btn' id='githubbtn'>GitHub</a>
                      <a href="https://balpreetdhillon.com/memorygame/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {YaleAppPreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>Design Document</h1>
                <h2>UX DESIGN ASSIGNMENT</h2>
                  <p>This is a complete UX Design Document where the objective was to redevelop the Yale school of arts website that is out of date. Using Adobe XD, Figma, Draw.io, and Photoshop, I created a full design process document and displayed it through PowerPoint. Throughout this process, I made wireframes I've created, conducted surveys with potential users, and learned how to prepare for and talk to clients. I also did a couple different areas of research such as competitive analysis, baseline statistics, creating user archetypes, tasks, making journey maps, concept maps, flow charts, facets, and exploring meta data. </p>
                    <div className='buttons'>
                      <a href="https://drive.google.com/file/d/1WQM7faus6bmO5HLTGgmE-WPyo8dytSVb/view?usp=sharing" className='learn-more-btn' id='design-document-btn'>Design Document</a>
                      <a href="https://drive.google.com/file/d/1CqFh8cVuadkzX0vwtr1wzr8-KVKc575v/view?usp=sharing" className='learn-more-btn-light'>Wireframe</a>
                    </div>
            </div>
          </div>
       
          <div className='project'>
              <img className = "responsive-template" 
                   src       = {GitHubFinderPreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>GitHub Finder</h1>
                <h2>GitHub Profile Searcher</h2>
                  <p>GItHub Finder made in HTML, CSS, and JavaScript. In this application, you can search up any GitHub account and their account information. In the development phase in the project I fetched an GitHub API and worked with ES6 classes.</p>
                    <div className='buttons'>
                      <a href="https://github.com/Balpreet-Dhillon/githubfinder" className='learn-more-btn' id='githubbtn'>GitHub</a>
                      <a href="https://balpreetdhillon.com/githubfinder/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>

        {/* <div className='project'>
              <img className = "responsive-template" 
                   src       = {TracaloriePreviewPicture}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>TraCalorie</h1>
                <h2>Meal & Calorie Tracker App</h2>
                  <p>A meal & calorie tracker app where users can add, update, and delete meals/number of calories it contains. This project was made with HTML, CSS, and JavaScript. Throughout the development, I used Functions, If Statements, Local Storage, and essential JavaScript methods.</p>
                    <div className='buttons'>
                      <a href="https://github.com/Balpreet-Dhillon/tracalorie" className='learn-more-btn' id='githubbtn'>GitHub</a>
                      <a href="https://balpreetdhillon.com/tracalorie/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div> */}

        <div className='project'>
              <img className = "responsive-template" 
                   src       = {CleanUpPreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>CleanUp App</h1>
                <h2>PLANNING A VOLUNTEER APP</h2> 
                  <p>The CleanUp app is an app where users can find volunteering events near their area. My role in this assignment was to figure out a design for the app through creating rough sketches, watching the client interview and deciding what features would be the most important to implement, and overall getting practice with the UX process. Done entirely through figma, this is the design process following all these steps that were taken to reach the main look of the app.</p>
                    <div className='buttons'>
                      <a href="https://drive.google.com/file/d/1LgH9uN_JEskVBz-x5KA1T_DtgIJGZE9r/view?usp=sharing" className='view-design-btn' id='githubbtn viewdesignbtn'>View Design</a>
                    </div>
            </div>
        </div>


        <div className='project'>
              <img className = "responsive-template" 
                   src       = {WeatherAppPreview}
                   alt       = "responsive-template"
              />

        <div className='right-content'>
            <h1>Weather App</h1>
                <h2>Weather Checker</h2>
                  <p>This is a Weather App I made using HTML, CSS, and JavaScript. In this project, I fetched a weather API from openweathermap.org to get the weather information of different cities/countries. Throughout the development phase I worked with a modal to create the form and pop up, ES6 classes, local storage, and basic JavaScript methods.</p>
                    <div className='buttons'>
                      <a href="https://github.com/Balpreet-Dhillon/weatherapp" className='learn-more-btn' id='githubbtn'>GitHub</a>
                      <a href="https://balpreet-dhillon.github.io/weatherapp/" className='learn-more-btn-light'>View Live</a>
                    </div>
            </div>
        </div>
    </div>

    
  )
}

export default MovieDatabaseProject