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
                Bla
            </p>

        </SubCard>
    )
}