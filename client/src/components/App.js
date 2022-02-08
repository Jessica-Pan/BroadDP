import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import About from "./pages/About";
import Home from "./pages/Home";
import AntibioticCompound from "./pages/Antibiotic-Compound.js";
import Compounds from "./pages/Compounds.js";

import "../utilities.css";

import { get, post } from "../utilities";

/**
 * Define the "App" component
 */
const App = () => {
  return (
    <>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <AntibioticCompound path="/antibiotic-compound" />
        <Compounds path="/compounds" />
        <NotFound default />
      </Router>
    </>
  );
};

export default App;
