import React, { Component, useEffect, useState } from "react";
import { navigate, useNavigate } from "@reach/router";
import CanvasJSReact from './canvasjs.react';

class VolcanoPlot extends Component {
    constructor(props){
        super(props);
        this.strain = this.props.strain;
    }

    getPlotOptions() {

        return {
			theme: "light2",
			animationEnabled: true,
			title: {
				text: "Active Users vs Server CPU Utilization"
			},
			axisX: {
				title: "Active Users"
			},
			axisY: {
				title: "CPU Utilization",
				suffix: "%"
			},
			data: [{
				type: "scatter",
				name: "Server 1",
				markerType: "circle",
                markerColor: "blue",
                itemclick: console.log("clicked!! "),
				toolTipContent: "<span style=\"color:#4F81BC \">{name}</span><br>Active Users: {x}<br>CPU Utilization: {y}%",
				dataPoints: [
					{ x: 100, y: 10 },
					{ x: 150, y: 15 },
					{ x: 190, y: 17 },
					{ x: 250, y: 19 },
					{ x: 310, y: 21 },
					{ x: 400, y: 25 },
					{ x: 500, y: 40 },
					{ x: 510, y: 50 },
					{ x: 600, y: 30 },
					{ x: 700, y: 35 },
					{ x: 800, y: 40 },
					{ x: 900, y: 45 },
					{ x: 1000, y: 47 },
					{ x: 1100, y: 55 },
					{ x: 1230, y: 51 },
					{ x: 1300, y: 60 },
					{ x: 1330, y: 65 },
					{ x: 1400, y: 70 },
					{ x: 1450, y: 71 },
					{ x: 1500, y: 69 }
				]
			}]
		}
    }

    render() {
        let CanvasJS = CanvasJSReact.CanvasJS;
        let CanvasJSChart = CanvasJSReact.CanvasJSChart;
        const options = this.getPlotOptions();
        return (
        <div> 
            Volcano plot for {this.strain}: 
            <CanvasJSChart options = {options} />
        </div>);
    }
} 

export default VolcanoPlot;