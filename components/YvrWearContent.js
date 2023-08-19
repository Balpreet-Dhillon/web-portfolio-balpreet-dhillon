import React from 'react';
import"./MovieManiacsStyles.css";
import ProductsPage from "../assets/products-yvr-preview.png";
import AboutPage from "../assets/about-page-preview.png";
import CartPage from "../assets/cart-page-preview.png";
import Black from "../assets/#000000.png";
import Blue from "../assets/blue.png";
import White from "../assets/#FFFFFF.png";
import YvrLogo from "../assets/yvr-logo.png";
import YvrWearLaptopImg from "../assets/yvr-single-preview.png";
import MobilePhonePreview from "../assets/mobile-phone-preview.png";
import MobileAboutPage from "../assets/phone-template-about-page.png";
import MobileCartPage from "../assets/mobile-cart-page.png";
import MobileMensPage from "../assets/phone-template-mens-page.png";
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
            <p> Created and designed a responsive Eccommerce merchandise store site that sell athletic wear. This project 
                was created using WooCommerce with the styling of SASS. This project was done in a group of three and was a great learning experience in terms of how to work in a team. GitHub was used for collaboration and solving technical problems. On the YVR Wear site, the customer has the ability to shop for different categories such as mens or womens t-shirts, shorts, and gym accessories. A custom post type and taxonomies were created for the designers in the about us section. Plug-ins like ACF Pro, WooCommerce Stripe, Reveal IDs, and WP forms were used throughout the project. </p>
          
          </div>

            <div className='movie-maniacs-development-stack'>

              <h1>Devlopment Stack</h1>
              <div className='move'>
              <div className='movie-maniacs-development-stack-items'>

              <ul className='movie-maniaces-languages-one'>
              <p><li>HTML5</li> 
                 <li>SASS</li></p>
              </ul>

              <ul className='movie-maniaces-languages-two'>
              <p><li>WordPress</li> 
                 <li>PHP</li></p> 
              </ul>

              <ul className='movie-maniaces-languages-three'>
              <p><li>Adobe XD</li> 
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
            <p>6 Weeks</p>

          </div>
          <div className='movie-maniac-project-overview-buttons'>
            <div className='two-btns'>
          <a href="https://merchandise.bcitwebdeveloper.ca/" className='movie-maniac-btn'>View Live</a>
          <a href="https://github.com/htpwebdesign/merchandise-theme" className='movie-maniac-btn-light'>Github</a>
          </div>
          </div>
        </div>
      </div>

      <div className='in-depth-info'>

        <h1>Design</h1>

            <p>The preperation steps we took before we started to develop the site where first to read the guidlines thoroughly to see what the requirements were and think of ways we will incorparate them into our site. We created a memo of understanding document to follow throughout the project which discussed what we products we will include on the site, what features, what target audience, etc. We took inspiration from websites like GymShark, Lululemon, Adidas, and Nike. After that, a content plan was made to  go through in specific what content will be displayed on each page and how we will structure the information. The next steps we took was creating a Information Architecture/Site Map to think of what page will lead to what and a development plan to figure out our slugs, custom post types, and taxonomies. The final step we made was to create a wireframe of the layout of the site on desktop and mobile that were closely followed throught the development of the site. The UX Design of the site was closley followed but a couple things in the planning phase were changed in the project throughout the development phase.</p>

      </div>

        
      <div className='planning-buttons'>

        <div className='left-planning-buttons'>
        <div className='memo-of-understanding'>

            <a href="https://drive.google.com/file/d/1RiEBr6anRhSJXbCpKdIOe6IFA97E5-w9/view" className='movie-maniac-btn-light'>Memo of Understanding</a>

        </div>
        <div className='content-plan'>

            <a href="https://drive.google.com/file/d/1WymiuKHF5TaIZDqb7Xs_O-D0Lo7s-Bcd/view?usp=sharing" className='movie-maniac-btn-light'>Content Plan</a>

        </div>
        </div>

        <div className='right-planning-buttons'>
        <div className='development-plan'>

            <a href="https://drive.google.com/file/d/18hlwOZAgd9pHIYqnv1WJNz2BkAMuNZAa/view?usp=sharing" className='movie-maniac-btn-light'>Development Plan and IA</a>

        </div>

        <div className='wireframes'>

            <a href="https://drive.google.com/file/d/1ZVUmJhtnb8GmskB_1ht5dqnqW3shjO8H/view?usp=sharing" className='movie-maniac-btn-light'>Desktop and Mobile Wireframes</a>

        </div>
        </div>
      </div>

      <div className='desktop-previews'>
          <div className='desktop-img'>

            <img className = "first-desktop-preview" 
                 src       = {YvrWearLaptopImg}
                 alt       = "first-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "second-desktop-preview" 
                 src       = {ProductsPage}
                 alt       = "second-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "thrid-desktop-preview" 
                 src       = {AboutPage}
                 alt       = "thrid-desktop-preview"
            />

          </div>

          <div className='desktop-img'>

            <img className = "fourth-desktop-preview" 
                 src       = {CartPage}
                 alt       = "fourth-desktop-preview"
            />

          </div>
        </div>

        <div className='development-section'>
          <div className='in-depth-info'>

            <h1>Development</h1>
            <p>Since we were creating a merchandise store, we decided to do it in WooCommerce because it was the most efficent and we wanted to dive deeper into Eccommerce. Our first step when creating the site was to get out all of the content onto the pages first using ACF Pro and PHP. Focusing on the content and the functionality of the site first before styling allowed us to see how much we had to work with and what layout would be the best for each category. A custom post type and taxonomies were created for the designers in the about us section. Plug-ins like ACF Pro, WooCommerce Stripe, Reveal IDs, and WP forms were used throughout the project.  </p>

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
                     src       = {Blue}
                     alt       = "color"
                />

                <p>#002393</p>
                
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
          <div className='yvr-wear-typography'>
          <div className='typography'>

                <h1>Typography</h1>

          <div className='font-letters'>

                <p className='letters'>Aa</p>

          </div>

                <p className='font-family'><strong>Franklin Gothic Cond Medium</strong></p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis pretium lorem. Orci varius natoque penatibus et magnis dis magnis parturient montes, nascetur ridiculus mus. Suspendisse purus enim, condimentum rhoncus enim vitae, suscipit pellentesque dolor. xyz Vestibulum venenatis eros eget eg tortor magnis sodales vulputate. venenatis eros eget te tortor sodales vulputate.venenatis eros eget tortor sodales vulputate.</p>

          </div>
          </div>
          <div className='project-detail-logo-section'>

            <h1>Logo</h1>

            <div className="movie-maniacs-logo">

                <img className = "movie-maniacs-logo-img" 
                     src       = {YvrLogo}
                     alt       = "movie-maniacs-logo-img"
                />

            </div>
          </div>
        </div>

        <div className='movie-maniacs-mobile-preview'>
        <div className='top-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobilePhonePreview}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileMensPage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
          </div>


          <div  className='bottom-movie-maniacs'>
          <div className="movie-maniacs-mobile">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileAboutPage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>

          <div className="movie-maniacs-phone">

            <img className = "movie-maniacs-mobile-img" 
                src        = {MobileCartPage}
                alt        = "movie-maniacs-mobile-img"
            />

          </div>
          </div>
        </div>

        <div className='reflection'>

          <h1>Reflection</h1>

        <div className='reflection-paragraph'>

            <p>I have learned a lot throught this project as it combined a lot of the stuff I have learned throught the program into one site from the planning side, development side, and styling side. Some of the main challenges we faced were people in the group being away or getting sick so we practiced comminicating through messaging programs such as Zoom and Slack and using GitHub to push our code to one another. Overall, this project improved my technical skills in WordPress and was a great learning experience.
              
               </p>

          </div>
        </div>

        <div className='movie-maniac-project-overview-buttons'>
            
        <IoMdArrowDropleft className='best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
        <Link to  = "/" className = "return-home-btn">Return Home</Link>
            
            <a href="https://merchandise.bcitwebdeveloper.ca/" className='end-page-btn'>View Live</a>
            <a href="https://github.com/htpwebdesign/merchandise-theme" className='end-page-btn-light'>Github</a>
          
        <Link to  = "/webportfolio" className = "next-project-btn">Next Project</Link>
        <IoMdArrowDropright className='return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
  
        </div>
        <div className='mobie-forwards-backwards'>
          <div className='backwards'>
            <IoMdArrowDropleft className='mobile-best-practices-icon' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
            <Link to  = "/" className = "mobile-return-home-btn">Return Home</Link>
          </div>
          <div className='forwards'>
            <Link to  = "/webportfolio" className = "mobile-next-project-btn">Next Project</Link>
            <IoMdArrowDropright className='mobile-return-home-btn' size={30} style={{color: "#fff", position: "relative", bottom: "-0.6rem"}}/>
          </div>
        </div>
      </div>
  )
}

export default MovieManiacsContent