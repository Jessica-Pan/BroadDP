import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <section>
        <main>
          <article>
            <h1>Project Title</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas eum architecto quia!
              Eaque recusandae debitis mollitia corporis amet excepturi facere quibusdam quisquam ex
              alias nostrum dolore, animi, corrupti nam ipsam! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Quas eum architecto quia! Eaque recusandae debitis
              mollitia corporis amet excepturi facere quibusdam quisquam ex alias nostrum dolore,
              animi, corrupti nam ipsam! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Quas eum architecto quia! Eaque recusandae debitis mollitia corporis amet excepturi
              facere quibusdam quisquam ex alias nostrum dolore, animi, corrupti nam ipsam!
            </p>

            <ul>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae assumenda dolore
                eveniet quae mollitia?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae assumenda dolore
                eveniet quae mollitia?
              </li>
              <li>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae assumenda dolore
                eveniet quae mollitia?
              </li>
            </ul>
          </article>
        </main>
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
    </div>
  );
};

export default Home;
