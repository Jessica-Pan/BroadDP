import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

const AntibioticAntibiotic = () => {
  return (
    <div>
      <NavBar />
      <section>
        <article>
          <label htmlFor="adropdown">Select Strain:</label>
          <select name="dropdown" id="dropdown">
            <option value="strain1">Strain 1</option>
            <option value="strain2">Strain 2</option>
            <option value="strain3">Strain 3</option>
            <option value="strain4">Strain 4</option>
            <option value="strain5">Strain 5</option>
            <option value="strain6">Strain 6</option>
          </select>
        </article>
      </section>
      <br />
      <section>
        <article className="home-plot-section">
          <div className="single-plot">Volcano Plot</div>
          <div className="single-plot">Volcano Plot</div>
          <div className="single-plot">Volcano Plot</div>
          <div className="single-plot">Volcano Plot</div>
          <div className="single-plot">Volcano Plot</div>
          <div className="single-plot">Volcano Plot</div>
        </article>
      </section>
      <br />
    </div>
  );
};

export default AntibioticAntibiotic;
