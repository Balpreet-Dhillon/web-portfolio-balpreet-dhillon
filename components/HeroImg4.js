import "./HeroImg4Styles.css"; 
import WorkHeroImg from "../assets/contact-me-picture.png";

import React, { Component } from 'react'

class HeroImg4 extends Component{
  
    render(){
    return (
    <div className="hero-img">
<div className="mask">

<img className = "intro-img" 
     src       = {WorkHeroImg}
     alt       = "intro-img"
/>

</div>


<div className="content">

<p>Want to get in touch? </p>
<h1>Contact Me</h1>
            <a href="mailto:balpreetd@live.ca" className='hero-contact-btn'>Let's Chat</a>
        
</div>

        {/* <div className="heading">

            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>


        </div> */}
        

        
    </div>

    
  );
}
}


export default HeroImg4