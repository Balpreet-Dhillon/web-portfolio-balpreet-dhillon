import React from "react"; 
import Navbar from "../components/Navbar";
import Bottomnav from "../components/Bottomnav";
import Footer from "../components/Footer";
import MovieManiacsHero from "../components/MovieManiacsHero"
import MovieManiacsContent from "../components/MovieManiacsContent";

function Home(){

    return(
        <div>

            <Navbar />
            <Bottomnav />
            <MovieManiacsHero />
            <MovieManiacsContent />
            <Footer />


        </div>
    );
}

export default Home;
