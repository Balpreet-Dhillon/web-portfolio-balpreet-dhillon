import React from "react"; 
import Navbar from "../components/Navbar";
import Bottomnav from "../components/Bottomnav";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import HomePageProjects from "../components/HomePageProjects";

function Home(){

    return(
        <div>

            <Navbar />
            <Bottomnav />
            <HeroImg />
            <HomePageProjects />
            <Footer />

        </div>
    );
}

export default Home;
