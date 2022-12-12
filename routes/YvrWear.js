import React from "react"; 
import Navbar from "../components/Navbar";
import Bottomnav from "../components/Bottomnav";
import Footer from "../components/Footer";
import YvrWearHero from "../components/YvrWearHero"
import YvrWearContent from "../components/YvrWearContent";

function Home(){

    return(
        <div>

            <Navbar />
            <Bottomnav />
            <YvrWearHero />
            <YvrWearContent />
            <Footer />


        </div>
    );
}

export default Home;
