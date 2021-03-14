import React from 'react'
// import './Slide1.css'
import SubCard from "../../misc/SubCard";

export default function Slide1() {
    return(
        <SubCard>

            <div className={"s-head"}>
                Cryotherapy and Loop Electrosurgical Excision Procedure (LEEP)
            </div>

            <hr style={{width: "80%"}}/>

            <div className={"s-head h1"}>
                About Cryotherapy and LEEP
            </div>

            <p className={"s-p"}>
                Cryotherapy is the utilization of a device supercooled with compressed gas
                to destroy precancerous neoplastic cells. This procedure can take 5-10 minutes
                depending on the number of treatments. Cryotherapy may be followed by a Loop
                Electrosurgical Excision Procedure (LEEP) to remove part of the cervix if initial
                cryotherapy treatments were not effective or if subsequent cryotherapy sessions
                are not recommended.
            </p>

            <p className={"s-p"}>
                While cryotherapy is currently the gold standard for PCL treatment, LEEP procedures
                may cause issues with fertility and childbearing in the future. Furthermore,
                studies show thermocoagulation to be just as effective while incurring lower costs and bringing
                less pain to patients.
            </p>

        </SubCard>
    )
}