import "./FooterStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
//import { height } from "@mui/system";



const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                    
                    <h1 className="say-hello-footer-message">Say Hello!</h1>
                    <p>If you would like to connect and chat with me, feel free to get in touch and send me an email at <a href="mailto:balpreetd@live.ca">balpreetd@live.ca</a></p>

            </div>

            <div className="right">
                <div className="icons">

                   <a href="tel:7783179024"><FaPhoneSquareAlt className="phone-icon" size={40} style={{color: "#fff", marginRight: "2rem" }}/></a> 
                   <a href="https://github.com/Balpreet-Dhillon"><FaGithubSquare className="github-icon" size={40} style={{color: "#fff", marginRight: "2rem"}}/></a>
                   <a href="https://www.linkedin.com/in/balpreet-dhillon-926195252/"><IoLogoLinkedin className="linkedin-icon" size={46.76} style={{color: "#fff", marginRight: "2rem"}}/></a> 
                
                </div>
                    <p>@BALPREET DHILLON 2022</p>
            </div>
        </div>
    </div>

  );
};

export default Footer