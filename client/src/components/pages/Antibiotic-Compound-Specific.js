import React, { Component, useEffect, useState } from "react";
import NavBar from "../modules/NavBar";

import "./About.css";

class AntibioticCompoundSpecific extends Component {
  constructor(props) {
    super(props);
    this.antibiotic = this.props.antibiotic;
    this.compound = this.props.compound;
  }
  
  render() { 
    return (
    <div> 
      <NavBar />  
      <div> This is a page for {this.antibiotic} and {this.compound}</div>
    </div>
    );
  }
};

export default AntibioticCompoundSpecific;
