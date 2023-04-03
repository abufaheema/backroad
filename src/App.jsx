import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import './sass/main.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";
import Feature from "./component/Feature";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Gallery from "./component/Gallery";



const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Feature />
      <Contact />
      <Gallery/>
      <Footer/>
    </div>
  );
};

export default App;
