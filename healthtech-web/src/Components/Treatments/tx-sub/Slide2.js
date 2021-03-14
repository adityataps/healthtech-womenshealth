import React from 'react'
// import './Slide1.css'
import SubCard from "../../misc/SubCard";

export default function Slide2() {
    return(
        <SubCard>

            <div className={"s-head"}>
                Thermocoagulation
            </div>

            <hr style={{width: "80%"}}/>

            <div className={"s-head h1"}>
                About Thermocoagulation
            </div>

            <p className={"s-p"}>
                Thermocoagulation is a technique in which an instrument is used to "boil away"
                precancerous tissue. The thermocoagulating device heats to a temperature of
                approximately 100&#176;C, but is reported by experts and physicians to be
                completely safe. This process takes around 30 seconds and patients report
                little to no pain during the procedure.
            </p>

            <p className={"s-p"}>
                Ask your doctor about undergoing thermocoagulation to treat PCLs. Thermocoagulation
                is safer, less painful, and cheaper while being just as effective as other treatments.
            </p>

        </SubCard>
    )
}