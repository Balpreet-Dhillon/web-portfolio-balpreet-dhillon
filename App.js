import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Work from "./routes/Work";
import Contact from "./routes/Contact";
import MovieManiacs from "./routes/MovieManiacs";
import YvrWear from "./routes/YvrWear";
import { Routes, Route } from "react-router-dom";
import WebPortfolio from "./routes/WebPortfolio";


function App() {
  return (
    <>

      <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/work" element = {<Work />}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/contact" element = {<Contact />}/>
          <Route path = "/moviemaniacs" element = {<MovieManiacs />}/>
          <Route path = "/yvrwear" element = {<YvrWear />}/>
          <Route path = "/webportfolio" element = {<WebPortfolio />}/>
      </Routes>

    </>
  );
}

export default App;
