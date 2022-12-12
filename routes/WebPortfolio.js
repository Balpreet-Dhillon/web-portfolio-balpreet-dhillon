import React from "react"; 
import Navbar from "../components/Navbar";
import Bottomnav from "../components/Bottomnav";
import Footer from "../components/Footer";
import WebPortfolioHero from "../components/WebPortfolioHero"
import WebPortfolioContent from "../components/WebPortfolioContent";

function Home(){

    return(
        <div>

            <Navbar />
            <Bottomnav />
            <WebPortfolioHero />
            <WebPortfolioContent />
            <Footer />


        </div>
    );
}

export default Home;
