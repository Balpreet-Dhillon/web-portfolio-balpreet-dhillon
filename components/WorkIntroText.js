import React from 'react';
import "./WorkIntroTextStyles.css";
import { MdOutlineDesignServices } from "react-icons/md";
import { MdDevices } from "react-icons/md";
import { MdOutlineMenuBook } from "react-icons/md";
import { GoGear } from "react-icons/go";



const WorkIntroText = () => {
  return (
    
    
<div className='process-content'>
        <h1>Process</h1>

        <p className='paragraph'>As a Front-End Web Developer and Designer, my goal is to create the best looking website that suits the clients needs and give the site the ideal user experience. Starting with steps like research, making wireframes, experimenting with different colors, creating sitemaps along with content and development plans, all the way to the development of the site. When developing the site, I take pride in having simple but effective content structure, creating a certain aesthetic/theme on the site through design patterns, and making the site as easy to use as possible especially for a first time user.
         
        </p>

        <br />

        <p className='bottom-sentence'>When working on a project, I keep these things in mind:</p>

<div className='icon-section'>
        <div className='process-icons'>

<div className='top'>
            <div className='ux-design-icon'>
              <MdOutlineDesignServices size={40} style={{color: "#fff", marginRight: "2rem"}}/>
              <p className='ux-design-label'>UX Design</p>
            </div>

          <div className='functionality-icon'>
        <GoGear className='functionality-icon' size={40} style={{color: "#fff", marginRight: "2rem"}}/>
        <p className='functionality-label'>Functionality</p>
        </div>
</div>
        
<div className='bottom'>
        <div className='best-practices-icon'>
        <MdOutlineMenuBook className='best-practices-icon' size={40} style={{color: "#fff", marginRight: "2rem"}}/>
        <p className='best-practices-label'>Best Practices</p>
        </div>

        <div className='fully-responsive-design'>
        <MdDevices className='fully-responsive-design' size={40} style={{color: "#fff", marginRight: "2rem"}}/>
        <p className='responsive-design-label'>Responsive Design</p>
        </div>
      </div>
    </div>
  </div>
        

        </div>
    
  )
}

export default WorkIntroText;