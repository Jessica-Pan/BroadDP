import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

const Compounds = () => {
  return (
    <div>
      <NavBar />
      <section>
        <article>
          <form>
            <label htmlFor="smiles">Search SMILES:</label>
            <input type="text" id="smiles" placeholder="input SMILES" />
            <input type="submit" value="Submit" />
          </form>
        </article>
      </section>
      <br />
      <section>
        <article className="home-plot-section">
          <div className="single-plot">Antiboitic-Compound Plot</div>
          <div className="single-plot">Antibiotic-Antibiotic Plot</div>
        </article>
      </section>
      <br />
      <section>
        <article className="home-plot-section">
          <div className="single-plot">Compunds</div>
          <div className="single-plot">Antibiotics</div>
        </article>
      </section>
      <br />
    </div>
  );
};

export default Compounds;
