import React from 'react';
import"./MovieManiacsStyles.css";
import Black from "../assets/#000000.png";
import DarkGrey from "../assets/#171717.png";
import White from "../assets/#FFFFFF.png";
import Beige from "../assets/#216204126.png";
import WebPortofolioLogo from "../assets/big-logo.png";
import PortfolioLaptopImg from "../assets/portfolio-desktop-preview.png";
import MobilePortfolioHomePage from "../assets/home-page-mobile.png";
import DesktopPortfolioHomePage from "../assets/desktop-portfolio-home.png";
import DesktopPortfolioInDepthPage from "../assets/desktop-in-depth-portfolio.png";
import DesktopPortfolioAboutPage from "../assets/about-page-desktop.png";
import MobilePortfolioInDepthPage from "../assets/mobile-in-depth-page.png";
import MobilePortfolioProjectPage from "../assets/projects-page-mobile.png";
import MobilePortfolioAboutMePage from "../assets/about-page-portfolio.png";
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
            <p> Planned, designed, and developed a personal web portfolio to showcase the projects I have completed in the FWD program. This project was created using React with the styling of CSS and consists of four pages: home, work, about and contact. As you have been experiencing, each project has a different individual page where the user can see the in depth look at the project and what the process was like behind the development. Prior to the creation of the site, I created a content plan, site map, and a wireframe.</p>
          
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
              <p><li>React</li> 
                 <li>Adobe XD</li></p> 
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

              </p></ul>  

          </div>
          <div className='duration'>

            <h1>Duration</h1>
            <p>2 Weeks</p>

          </div>
          <div className='movie-maniac-project-overview-buttons'>
            
          <a href="https://balpreetdhillon.com/" className='movie-maniac-btn'>View Live</a>
          <a href="https://github.com/Balpreet-Dhillon/web-portfolio-balpreet-dhillon" className='movie-maniac-btn-light'>Github</a>

          </div>
        </div>
      </div>

      <div className='in-depth-info'>

        <h1>Design</h1>

            <p> Months before development I created a style guide and web portfolio prototype in Adobe XD. A couple months later before I started the development of my web portfolio, I looked at a lot of other portfolio website examples out there and have got some inspiration from them. After starting to get some ideas, I made a content plan of stuff that I would want each page to consist of. The next thing I did was create a site map to plan out the routes of the site. The last step I took was to create a wireframe that emmulates the idea in my head of exactly how I wanted it to look.  </p>

      </div>

      <div className='planning-buttons'>

<div className='left-planning-buttons'>
<div className='portfolio-content-plan'>

    <a href="https://drive.google.com/file/d/1oeT3bg-Xt2OBnj00Awt1dRwYNu6NFrLi/view?usp=sharing" className='movie-maniac-btn-light'>Content Plan</a>

</div>
<div className='portfolio-ia'>

    <a href="https://drive.google.com/file/d/1P62zxw5CemUVh2S4nU3_QXfx9DZyNj58/view?usp=sharing" className='movie-maniac-btn-light'>Information Architecture</a>

</div>
</div>

<div className='right-planning-buttons'>
<div className='portfolio-wireframe'>

    <a href="https://drive.google.com/file/d/1HBvjRWYfD7JI6NcrJGyiWq6Wq1FSGuDG/view?usp=sharing" className='movie-maniac-btn-light'>Wireframe</a>

</div>

<div className='portfolio-prototype'>

    <a href="https://drive.google.com/file/d/1PABbkZvPDphAouGu6lDRstcv8ciOaZ9X/view?usp=sharing" className='movie-maniac-btn-light'>Interactive Portfolio Prototype Mockup</a>

</div>
</div>
</div>

<div className='portfolio-style-guide'>

    <a href="https://drive.google.com/file/d/1dRPjYXTClw8JsSI_HE-4JNxNmY7lPO8N/view?usp=sharing" className='movie-maniac-btn-light'>Style Guide</a>

</div>


      <div className='desktop-previews'>
          <div className='desktop-img'>

            <img className = "first-desktop-preview" 
                 src       = {PortfolioLaptopImg}
                 alt       = "first-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "second-desktop-preview" 
                 src       = {DesktopPortfolioHomePage}
                 alt       = "second-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "thrid-desktop-preview" 
                 src       = {DesktopPortfolioInDepthPage}
                 alt       = "thrid-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "fourth-desktop-preview" 
                 src       = {DesktopPortfolioAboutPage}
                 alt       = "fourth-desktop-preview"
            />

          </div>
        </div>

        <div className='development-section'>
          <div className='in-depth-info'>

            <h1>Development</h1>
            <p>When starting developing, my first steps were to create all of the pages, create the header and footer, and make the routes to each page. After that, I started to fill the pages up with content while styling page by page. The site turned out much differently from the web portfolio prototype due to the prototype being months prior to the development of the portfolio so more ideas came out during that time. </p>

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

            <ul className='color-option'>
              <li>            
                
                <img className = "color" 
                     src       = {White}
                     alt       = "color"
                />

                <p>#FFFFFF</p>
                
              </li>
            </ul>

            <ul>
              <li>            
                
                <img className = "color" 
                     src       = {Beige}
                     alt       = "color"
                />

                <p>#216, 204, 126</p>
                
              </li>
            </ul>

            </div>
          </div>

          <div className='typography'>

                <h1>Typography</h1>

          <div className='font-letters'>

                <p className='letters'>Aa</p>

          </div>

                <p className='font-family'><strong>Outfit, Sans Serif</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pretium lorem. Orci varius natoque penatibus et magnis dis magnis parturient montes, nascetur ridiculus mus. Suspendisse purus enim, condimentum rhoncus enim vitae, suscipit pellentesque dolor. xyz Vestibulum venenatis eros eget eg tortor magnis sodales vulputate. venenatis eros eget te tortor sodales vulputate.venenatis eros eget tortor sodales vulputate.</p>

          </div>

          <div className='project-detail-logo-section'>

            <h1>Logo</h1>

            <div className="movie-maniacs-logo">

                <img className = "movie-maniacs-logo-img" 
                     src       = {WebPortofolioLogo}
                     alt       = "movie-maniacs-logo-img"
                />

            </div>
          </div>
        </div>

        <div className='movie-maniacs-mobile-preview'>
        <div className='top-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobilePortfolioHomePage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobilePortfolioProjectPage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
          </div>

          <div  className='bottom-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobilePortfolioInDepthPage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-phone">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobilePortfolioAboutMePage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
          </div>
        </div>

        <div className='reflection'>

          <h1>Reflection</h1>

        <div className='reflection-paragraph'>

            <p>With this being my second big project in react, it really helped solidify and further my knowledge in this language and made me more confident in creating a fully functional site. I have faced many challenges with each project and for this one I would have to say I ran into some technical problems with styling I had been stuck on for a bit. How I resolved my problems was asking the teacher, a friend, and watching informational videos. I will keep sharpening my skills and as I do I hope my portfolio showcases that aswell. </p>

          </div>
        </div>

        <div className='movie-maniac-project-overview-buttons'>
            
        <IoMdArrowDropleft className='best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
        <Link to  = "/" className = "return-home-btn">Return Home</Link>
            
            <a href="https://balpreetdhillon.com/" className='end-page-btn'>View Live</a>
            <a href="https://github.com/Balpreet-Dhillon/web-portfolio-balpreet-dhillon" className='end-page-btn-light'>Github</a>
          
        <Link to  = "/moviemaniacs" className = "next-project-btn">Next Project</Link>
        <IoMdArrowDropright className='return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
  
        </div>
        <div className='mobie-forwards-backwards'>
          <div className='backwards'>
            <IoMdArrowDropleft className='mobile-best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
            <Link to  = "/" className = "mobile-return-home-btn">Return Home</Link>
          </div>
          <div className='forwards'>
            <Link to  = "/moviemaniacs" className = "mobile-next-project-btn">Next Project</Link>
            <IoMdArrowDropright className='mobile-return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
          </div>
        </div>
      </div>
  )
}

export default MovieManiacsContent