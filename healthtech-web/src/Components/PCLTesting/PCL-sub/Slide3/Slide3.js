import React from 'react'
import './Slide3.css'
import SubCard from "../../../misc/SubCard";

export default function Slide3() {
    return(
        <SubCard>

            <div className={"s-head"}>
                Visual Inspection with Acetic Acid (VIA)
            </div>

            <hr style={{width: "80%"}}/>

            <div className={"s-head h1"}>
                Procedure
            </div>

            <p className={"s-p"}>
                Your GYN will swab your cervix with 3% - 5% acetic acid and look to see if your
                cervix changes color from a pink to a white.
            </p>

            <div className={"s-head h1"}>
                Testing
            </div>

            <p className={"s-p"}>
                Results are as follows:
            </p>

            <div className={"s-head h2"}>
                Negative
            </div>

            <p className={"s-p"}>
                White-pink means you are negative for PCL
            </p>

            <div className={"s-head h2"}>
                Positive
            </div>

            <p className={"s-p"}>
                White with cauliflower-like appearance means you may have cervical cancer
                <br />
                Intense white means you are positive for PCL
            </p>

        </SubCard>
    )
}