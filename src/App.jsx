import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import './sass/main.scss'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";



const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
    </div>
  );
};

export default App;
