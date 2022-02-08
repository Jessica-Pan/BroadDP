import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About";
import Home from "./pages/Home";
import AntibioticCompound from "./pages/Antibiotic-Compound.js";
import Compounds from "./pages/Compounds.js";
import AntibioticAntibiotic from "./pages/Antibiotic-Antibiotic.js";
import AntibioticsOnly from "./pages/AntibioticsOnly.js";

import "../utilities.css";

import { get, post } from "../utilities";

const App = () => {
  useEffect(() => {
    console.log("runnin");
    var current = 0;
    for (var i = 0; i < document.links.length; i++) {
      if (document.links[i].href === document.URL) {
        current = i;
      }
    }
    document.links[current].className = "current";
  }, []);

  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <AntibioticCompound path="/antibiotic-compound" />
        <Compounds path="/compounds" />
        <AntibioticAntibiotic path="/antibiotic-antibiotic" />
        <AntibioticsOnly path="antibiotics-only" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
