import React, { Component, useEffect, useState } from "react";
import { navigate, useNavigate } from "@reach/router";

class VolcanoPlot extends Component {
    constructor(props){
        super(props);
        this.strain = this.props.strain;
    }
    render() {
        return (<div> this is a volcano plot for {this.strain} </div>);
    }
} 

export default VolcanoPlot;