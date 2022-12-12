import React from 'react';
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import MyPicture from "../assets/circle-pfp.png";

const AboutContentStyles = () => {
  return (
    <div className='about-me-content'>

        <div className='who-am-i'>
            <h1 className='who-am-i-heading'>Who Am I?</h1>
                <div className='about-me-information'>
                    <div className='about-me-paragraph'>
                        <p className='who-am-i-heading-paragraph'>I am a Front-End Web Developer/Designer and a graduate of BCIT'S Front-End Web Development program. Throughout this program, I have learned many different skills and have gained basic knowledge of programming languages from completing structural projects that cover all of the core fundamentals. I also enjoy web design and working with design tools to create wireframes, color schemes, journey maps, user archetypes, concept maps, site-maps/flow charts, etc. I am most passionate about creating, problem solving, learning new things, bringing ideas to life, and working with others in a positive team environment. Prior to web development, I have volunteered and worked at many different jobs in the past that have given me a wide range of valuable life and personal skills. When I'm not coding you can find me spending time with family and friends, on a hike, working out, or watching sports/movies on the couch.</p>
                    </div>

                    <div className='my-pfp'>
                        <img className     = "pfp" 
                                 src       = {MyPicture}
                                 alt       = "pfp"
                        />
                    </div>
                </div>
        </div>

        {/* <div className='section-border-line'><div className='section-border'></div></div> */}

        <div className='technical-skills'>

 <div className='techinical-skills-heading'><h1>Technical Skills</h1></div> 

        <div className='technical-skills-grid'>
            
        <div className='languages-content'>
            <h2>Languages</h2>
                <ul className='languages'>

                        <li>HTML5</li> 
                        <li>CSS3/SASS</li>    
                        <li>JavaScript</li>  
                        <li>React</li>  
                        <li>WordPress</li> 
                        
                </ul>
        </div>

        <div className='design-tools-content'>
            <h2>Design Tools</h2>
                <ul className='design-tools'>
                
                        <li>Adobe XD</li>   
                        <li>PhotoShop</li>  
                        <li>Figma</li> 
                        <li>Illustrator</li> 
                                                 
                </ul>
        </div>

        <div className='others-content'>
            <h2>Others</h2>
                <ul className='Others'>

                        <li>Shopify</li>   
                        <li>GitHub</li>   
                        <li>WooCommerce</li>   
                        <li>UX Design</li>   
              
                </ul>

                </div>
            </div>
        </div>

        {/* <div className='section-border-line'><div className='section-border'></div></div> */}

        <div className='project-navigation'>

                    <h1>Check Out Some of My Work Here</h1>
                    <div className='about-project-button'><Link to  = "/work" className = "projects-nav-btn">Projects</Link></div>
            
            </div>
        </div>



  )
}

export default AboutContentStyles;