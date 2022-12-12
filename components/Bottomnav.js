import "./Bottomnavbarstyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { FaCode } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

// import Logo from "./images/logo.png";

const Bottomnav = () => {
  return (

    <div className="bottom-nav-header">

        <ul className="bottom-nav-menu">

            <li>
                <Link to = "/"> <FaHome size={40} style={{color: "#fff", marginRight: "2rem"}}/></Link>
            </li>
            <li>
                <Link to = "/about"><BsFillPersonFill size={40} style={{color: "#fff", marginRight: "2rem"}}/></Link>
            </li>
            <li>
                <Link to = "/work"><FaCode size={40} style={{color: "#fff", marginRight: "2rem"}}/></Link>
            </li>
            <li>
                <Link to = "/contact"><HiMail size={43} style={{color: "#fff", marginRight: "2rem"}}/></Link>
            </li>

        </ul>

    </div>

  );
};


export default Bottomnav;