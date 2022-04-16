import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

class AntibioticsOnly extends Component {
  render(){
    return (
      <div>
        <NavBar />
        <section>
          <article>
            <form>
              <label htmlFor="zScore">Z-Score Threshold:</label>
              <input type="number" id="zScore" placeholder="0.4" />
              <input type="submit" value="Submit" />
            </form>
          </article>
        </section>
        <br />
        <section>
          <article className="home-plot-section">
            <div className="line-plot">line Plot 1</div>
            <div className="line-plot">line Plot 2</div>
            <div className="line-plot">line Plot 3</div>
            <div className="line-plot">line Plot 4</div>
            <div className="line-plot">line Plot 5</div>
            <div className="line-plot">line Plot 6</div>
          </article>
        </section>
        <br />
        <section>
          <article className="selected-abx">
            <strong>[Selected ABX]</strong>
            <ol>
              <li>ABX: </li>
              <li>Concentrations (ug/mL): </li>
              <li>SMILES: </li>
              <li>Structure: </li>
            </ol>
          </article>
        </section>
        <br />
      </div>
    );
  }
};

export default AntibioticsOnly;
