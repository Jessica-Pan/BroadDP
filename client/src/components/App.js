import React, {Component, useState, useEffect } from "react";
import { Router } from "@reach/router";
import {useLocation} from "react-router-dom";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About";
import Home from "./pages/Home";
import AntibioticCompoundMain from "./pages/Antibiotic-Compound.js";
import Compounds from "./pages/Compounds.js";
import AntibioticAntibiotic from "./pages/Antibiotic-Antibiotic.js";
import AntibioticsOnly from "./pages/AntibioticsOnly.js";
import AntibioticCompoundSpecific from "./pages/Antibiotic-Compound-Specific"

import "../utilities.css";

import { get, post } from "../utilities";

class App extends Component {
  render(){

    return (
      <>
        <Router>
          <Home path="/" />
          <About path="/about" />
          <AntibioticCompoundMain path="/antibiotic-compound" />
          <AntibioticCompoundSpecific path="/antibiotic-compound-specific" useLocation={useLocation}/>
          <Compounds path="/compounds" />
          <AntibioticAntibiotic path="/antibiotic-antibiotic" />
          <AntibioticsOnly path="antibiotics-only" />
          <NotFound default />
        </Router>
      </>
    );
  }
};

export default App;
