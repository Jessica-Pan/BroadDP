import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

class AntibioticCompoundMain extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      mainContent: "Loading...",
      showingIndex: 1,
      feelings: this.props.feelings,
      allFeelings: [],
      feeling_ids: [],
    };
  }

  componentDidMount() {
    console.log("getting the feelings");
    this.getAllPastFeelings();
    this.showYourTags();
  }
  
  render() { 
    return (
    <div> 
      <NavBar />  
        <section>
          <article>
            <label htmlFor="ac-dropdown">Search By:</label>
            <select name="ac-dropdown" id="ac-dropdown">
              <option value="antibiotic">Antibiotic</option>
              <option value="strain">Strain</option>
              <option value="compound-smiles">Compound SMILES</option>
            </select>
          </article>
        </section>
        <br />
        <section>
          <article>
            <form>
              <div>
                <label htmlFor="bliss-score">Bliss score sum threshold: </label>
                <input type="number" placeholder=".07" id="bliss-score" />
              </div>
              <div>
                <label htmlFor="log10-pval">Log10(p-value) threshold: </label>
                <input type="number" placeholder="5" id="log10-pval" />
              </div>
              <div>
                <label htmlFor="bliss-score">Bliss score sum threshold: </label>
                <input type="text" placeholder=".07" id="bliss-score" />
              </div>
              <div>
                <input type="submit" value="Update" />
              </div>
            </form>
          </article>
        </section>
        // here
        <br />
        <section>
          <article className="home-plot-section">
            <div className="single-plot">KP1 <div></div></div>
            <div className="single-plot">Volcano Plot</div>
            <div className="single-plot">Volcano Plot</div>
            <div className="single-plot">Volcano Plot</div>
            <div className="single-plot">Volcano Plot</div>
            <div className="single-plot">Volcano Plot</div>
          </article>
        </section>
        <br />
        <section>
          <article className="home-plot-section">
            <div className="volcano-dropdowns">
              <div>
                <label htmlFor="x-axis">X-axis:</label>
                <select name="x-axis" id="x-axis">
                  <option value="antibiotics">Antibiotics</option>
                  <option value="strains">Strains</option>
                </select>
              </div>
              <div>
                <label htmlFor="y-axis">Y-axis:</label>
                <select name="y-axis" id="y-axis">
                  <option value="antibiotics">Antibiotics</option>
                  <option value="hit-compunds">Hit Compounds</option>
                </select>
              </div>
            </div>
            <div className="single-plot">Compunds</div>
            <div className="single-plot">Antibiotics</div>
          </article>
        </section>
        <br />
    </div>
    );
  }
};

export default AntibioticCompoundMain;
