import React from "react"; 
import Navbar from "../components/Navbar";
import Bottomnav from "../components/Bottomnav";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import WorkIntroText from "../components/WorkIntroText";
import MovieDatabase from "../components/MovieDatabase";

const Work = () => {

    return(
        <div>

            <Navbar />
            <Bottomnav />
            <HeroImg2 />
            <WorkIntroText />
            <MovieDatabase />
            <Footer />


        </div>
    )
}

export default Work;