import React from 'react';
import"./MovieManiacsStyles.css";
import MovieManiacsWireframe from "../assets/movie-maniacs-wireframe-preview.png";
import MovieManiacsMockUp from "../assets/movie-maniacs-mockup-preview.png";
import MovieManiacLaptopImg from "../assets/movie-maniacs-desktop-template-pic.png";
import MovieManiacSearchingImg from "../assets/movie-maniacs-searching-preview.png";
import MobileMovieManiacsWireframe from "../assets/wireframe-phone-template.png";
import MobileMovieManiacsMockup from "../assets/phone-mockup-template.png";
import MobileMoviePhonePreview from "../assets/movie-maniac-phone-preview.png";
import MobileSearchingPreview from "../assets/searching-phone-template.png";
import Black from "../assets/#000000.png";
import DarkGrey from "../assets/#171717.png";
import White from "../assets/#FFFFFF.png";
import MovieManiacsLogo from "../assets/logo-desktop.png";
import { Link } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";


const MovieManiacsContent = () => {
  return (
    <div className='movie-maniacs-content'>
      <div className='project-overview-info'>
        <div className='left-movie-maniacs-content'>
          <div className='overview-title-paragraph'>

            <h1>Overview</h1>
            <p> Created and designed a responsive movie searching database application using an API. This project 
                was created using React with the styling of CSS and an API was used to fetch the 
                movies. In the application, the user has the ability to search for any kind of movie and view an 
                overview/summary of the movie. There are different categories created such as popular, top rated, upcoming, 
                and new released movies all fetching different API's. Before creating the application, a wireframe was created in Adobe XD and then a mockup was designed in Photoshop. </p>
          
          </div>

            <div className='movie-maniacs-development-stack'>

              <h1>Devlopment Stack</h1>
              <div className='move'>
              <div className='movie-maniacs-development-stack-items'>

              <ul className='movie-maniaces-languages-one'>
              <p><li>HTML5</li> 
                 <li>CSS3</li></p>
              </ul>

              <ul className='movie-maniaces-languages-two'>
              <p><li>JavaScript</li> 
                 <li>React</li></p> 
              </ul>

              <ul className='movie-maniaces-languages-three'>
              <p><li>Photoshop</li> 
                 <li>GitHub</li></p> 
              </ul>

           </div>
          </div>
         </div>
        </div>

        <div className='right-movie-maniacs-content'>

          <div className='role'>

            <h1>Role</h1>

              <ul><p>
                <li>Front-End Web Developer</li>
                <li>UX Designer</li>
              </p></ul>  

          </div>
          <div className='development-team'>

            <h1>Development Team</h1>

              <ul><p>
                <li>Balpreet Dhillon</li>
                <li>Sufiyan Ahmed</li>
              </p></ul>  

          </div>
          <div className='duration'>

            <h1>Duration</h1>
            <p>4 Weeks</p>

          </div>
          <div className='movie-maniac-project-overview-buttons'>
            
          <a href="https://balpreet-dhillon.github.io/moviemaniacs/" className='movie-maniac-btn'>View Live</a>
          <a href="https://github.com/Balpreet-Dhillon/moviemaniacs" className='movie-maniac-btn-light'>Github</a>

          </div>
        </div>
      </div>

      <div className='in-depth-info'>

        <h1>Design</h1>

            <p>Months prior to the development of the site, a wireframe was created in Adobe XD to see how we could fit our content the best on desktop and mobile sizes. After that, a mockup was designed in Photoshop to see what layout would work the best, what color palette we wanted to use and to get an overall idea of how we want our site to look for desktop and mobile. The next step we took was to take it back to Adobe XD turning it into a reactive prototype.</p>

      </div>

      <div className='planning-ctas'>
        <div className='movie-maniacs-wireframe'>

            <a href="https://drive.google.com/file/d/1rfIU26VpI-XL8z-zEYPh5KP9fBNB_PZ0/view?usp=sharing" className='movie-maniac-wireframe-btn-light'>Adobe XD Wireframe</a>

        </div>
        <div className='movie-maniacs-mockup'>

            <a href="https://drive.google.com/file/d/172k3x6i2XLaXSID4IN2lhWbyDO9xubz1/view?usp=sharing" className='movie-maniac-mockup-btn-light'>Photoshop Mockup</a>

        </div>
        </div>


      <div className='desktop-previews'>
          <div className='desktop-img'>

            <img className = "first-desktop-preview" 
                 src       = {MovieManiacsWireframe}
                 alt       = "first-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "second-desktop-preview" 
                 src       = {MovieManiacsMockUp}
                 alt       = "second-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "thrid-desktop-preview" 
                 src       = {MovieManiacLaptopImg}
                 alt       = "thrid-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "fourth-desktop-preview" 
                 src       = {MovieManiacSearchingImg}
                 alt       = "fourth-desktop-preview"
            />

          </div>
        </div>

        <div className='development-section'>
          <div className='in-depth-info'>

            <h1>Development</h1>
            <p> We created the app in react and fetched the API's from The Movie Database (TMDb). Throughout this process, I have learned how to work with components, how to add searching functionality, fetch an API, and work with functions and arrays. The first step we took was to create the pages and components using react router dom. When that was done we added the header and footer on each page. After that, our next step was to get the movies to out put through the API. Once we got everything to output, we designed everything and got the content layed out the way we have it on the wireframe. Then I called in the different API'S for the popular, top rated, now playing, and upcoming sections. The last step that was the most challenging for me would probably be adding the searching function but after some trial and error I got it to work.
              
</p>

          </div>
        </div>



        <div className='project-details'>
          <div className='color-palette'>

            <h1>Color Palette</h1>

            <div className='colors'>

            <ul className='color-option'>
              <li>            
                
                <img className = "color" 
                     src       = {Black}
                     alt       = "color"
                />
                
                <p>#000000</p>

              </li>
            </ul>

            <ul className='color-option'>
              <li>            
                
                <img className = "color" 
                     src       = {DarkGrey}
                     alt       = "color"
                />

                <p>#171717</p>
                
              </li>
            </ul>

            <ul>
              <li>            
                
                <img className = "color" 
                     src       = {White}
                     alt       = "color"
                />

                <p>#FFFFFF</p>
                
              </li>
            </ul>

            </div>
          </div>
<div className='movie-maniacs-typography'>
          <div className='typography'>

                <h1>Typography</h1>

          <div className='font-letters'>
        
                <p className='letters'>Aa</p>

          </div>

                <p className='font-family'> <strong>Montserrat, Sans-Serif</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pretium lorem. Orci varius natoque penatibus et magnis dis magnis parturient montes, nascetur ridiculus mus. Suspendisse purus enim, condimentum rhoncus enim vitae, suscipit pellentesque dolor. xyz Vestibulum venenatis eros eget eg tortor magnis sodales vulputate. venenatis eros eget te tortor sodales vulputate.venenatis eros eget tortor sodales vulputate.</p>

          </div>
          
          </div>
          <div className='project-detail-logo-section'>

            <h1>Logo</h1>

            <div className="movie-maniacs-logo">

                <img className = "movie-maniacs-logo-img" 
                     src       = {MovieManiacsLogo}
                     alt       = "movie-maniacs-logo-img"
                />

            </div>
          </div>
        </div>

        <div className='movie-maniacs-mobile-preview'>
          <div className='top-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileMovieManiacsWireframe}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileMovieManiacsMockup}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
          </div>

          <div  className='bottom-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileMoviePhonePreview}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-phone">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileSearchingPreview}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
        </div>
        </div>

        <div className='reflection'>

          <h1>Reflection</h1>

        <div className='reflection-paragraph'>

            <p>This project was a great learning experience for me as I learned the all the fundamentals of React.js and how to create a fully functional and responsive site. Not everything went perfectly as this learning did come from some of the challenges we have faced. The most challenging part of the project for me would was adding the searching function. This was my first big react project and I am excited to learn more! </p>

          </div>
        </div>

        <div className='movie-maniac-project-overview-buttons'>
            
        <IoMdArrowDropleft className='best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
        <Link to  = "/" className = "return-home-btn">Return Home</Link>
            
            <a href="https://balpreet-dhillon.github.io/moviemaniacs/" className='end-page-btn'>View Live</a>
            <a href="https://github.com/Balpreet-Dhillon/moviemaniacs" className='end-page-btn-light'>Github</a>
          
        <Link to  = "/yvrwear" className = "next-project-btn">Next Project</Link>
        <IoMdArrowDropright className='return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
  
        </div>
        <div className='mobie-forwards-backwards'>
          <div className='backwards'>
            <IoMdArrowDropleft className='mobile-best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
            <Link to  = "/" className = "mobile-return-home-btn">Return Home</Link>
          </div>
          <div className='forwards'>
            <Link to  = "/yvrwear" className = "mobile-next-project-btn">Next Project</Link>
            <IoMdArrowDropright className='mobile-return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
          </div>
        </div>
      </div>
  )
}

export default MovieManiacsContent