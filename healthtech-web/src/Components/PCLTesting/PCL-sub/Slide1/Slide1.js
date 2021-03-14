import React from 'react'
import './Slide1.css'
import SubCard from "../../../misc/SubCard";

export default function Slide1() {
    return(
        <SubCard>

            <div className={"s-head"}>
                Papanicolaou (Pap) Test
            </div>

            <hr style={{width: "80%"}}/>

            <div className={"s-head h1"}>
                About the Pap Smear
            </div>

            <p className={"s-p"}>
                The Pap Smear is used to detect for precancerous changes in the cervix. Changes may be either high grade or low grade.
                There are three possible results:
            </p>

            <div className={"s-head h2"}>
                Normal
            </div>

            <p className={"s-p"}>
                Your results are negative for precancerous changes.
            </p>

            <div className={"s-head h2"}>
                Abnormal
            </div>

            <p className={"s-p"}>
                Your test results are positive for precancerous changes.
            </p>

            <div className={"s-head h2"}>
                Unclear
            </div>

            <p className={"s-p"}>
                Your test results show abnormalities for precancerous changes.
                It is unclear of the cause (pregnancy, HPV, menopause, etc.)
            </p>



        </SubCard>
    )
}