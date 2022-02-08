import React, { Component, useEffect, useState } from "react";
import { navigate, useNavigate } from "@reach/router";

import "../pages/About.css";

const NavBar = () => {
  return (
    <div>
      <nav class="main-nav">
        <ul>
          <li>
            <a href="http://blainey.mit.edu" target="_blank" className="nav-img">
              <img
                src="http://pblainey.scripts.mit.edu/lab_website/wp-content/uploads/2018/12/logo.png"
                alt="Broad Institute logo"
              />
            </a>
          </li>
          <li>
            <a href="/"> Homepage </a>
          </li>
          <li>
            <a href="/about"> About </a>
          </li>
          <li>
            <a href="/antibiotic-compound">Anitbiotic-Compund</a>
          </li>
          <li>
            <a href="/compounds">Compounds Only</a>
          </li>
          <li>
            <a href="/antibiotic-antibiotic">Antibiotic-Antibiotic</a>
          </li>
          <li>
            <a href="/antibiotics-only">Antibiotics Only</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
