import "./NavbarStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import { useState } from "react";


const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const changeColor = () => {

    if(window.scrollY >= 100){
        setColor(true);
    }else{
        setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (

    <div className={color ? "header header-bg"  :
    "header"}>

        <Link to="/">

          <div className="logo"><img src={Logo} alt="logo" /> </div>

        </Link>

        <ul className="nav-menu">

            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/about">About</Link>
            </li>
            <li>
                <Link to = "/work">Projects</Link>
            </li>
            <li>
                <Link to = "/contact">Contact</Link>
            </li>

        </ul>

    </div>

  );
};


export default Navbar;