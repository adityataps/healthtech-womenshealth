import React from 'react'
import CanvasJSReact from "../../../misc/canvasjs/canvasjs.react";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart

export default function S2C1() {

    const options = {
        animationEnabled: false,
        exportEnabled: true,
        theme: "dark2", // "light1", "dark1", "dark2"
        title:{
            text: "HPV Variants Causing Cervical Cancer"
        },
        // width: 500,
        data: [{
            type: "pie",
            indexLabel: "{label}: {y}%",
            startAngle: 270,
            dataPoints: [
                { y: 70, label: "HPV16 and HPV18" },
                { y: 30, label: "Other variants" }
            ]
        }]
    }

    return (
        <div>
            <CanvasJSChart options = {options} />
        </div>
    )
}