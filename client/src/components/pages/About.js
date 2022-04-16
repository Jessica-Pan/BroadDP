import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <section>
          <main>
            <article>
              <h1>Project Description</h1>
              <h4>
                Visit the{" "}
                <a href="http://blainey.mit.edu/" target="_blank" rel="noopener noreferrer">
                  Blainey lab homepage
                </a>{" "}
                to explore more current research.
              </h4>
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
          <br />
          <article>
            <h2>References</h2>
            <ol>
              <li>Reference Reference Reference Reference Reference Reference Reference.</li>
              <li>Reference Reference Reference Reference Reference Reference Reference.</li>
              <li>Reference Reference Reference Reference Reference Reference Reference.</li>
            </ol>
          </article>
          <br />
          <article>
            <h2>Team Members</h2>
            <ul>
              <li>
                <strong>Principal Investigator:</strong>{" "}
                <a
                  href="https://be.mit.edu/directory/paul-blainey"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dr. Paul Blainey
                </a>
                , Associate Professor of Biological Engineering at MIT.
              </li>
              <li>Team member name, website, affiliation</li>
              <li>Team member name, website, affiliation</li>
              <li>Team member name, website, affiliation</li>
              <li>Team member name, website, affiliation</li>
              <li>Team member name, website, affiliation</li>
            </ul>
          </article>
          <br />
          <article>
            <h2>Funding Acknowledgements</h2>
            <ul>
              <li>funding source. can add link</li>
              <li>funding source. can add link</li>
              <li>funding source. can add link</li>
            </ul>
          </article>
        </section>
      </div>
    );
  }  
};

export default About;
