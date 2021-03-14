import React from 'react'
import './Slide2.css'
import SubCard from "../../../misc/SubCard";
import S2C1 from "./Slide2Chart1";

export default function Slide2() {
    return(
        <SubCard>

            <div className={"s-head"}>
                Human Papillomavirus (HPV) Test
            </div>

            <hr style={{width: "80%"}}/>

            <div className={"s-head h1"}>
                About HPV
            </div>

            <p className={"s-p"}>
                Human papillomavirus is a DNA virus, commonly spread through sexual contact.
                There are over 170 discovered types of HPV, and nearly every individual is
                infected with HPV at some point in their lives.
            </p>

            <S2C1 className={"s2c1"} />

            <p className={"s-p"}>
                There exist at least 14 variants that strongly correlate with cases of cervical
                cancer, of which variants HPV16 and HPV18 cause 70% of instances.
            </p>

            <div className={"s-head h1"}>
                Testing and Results
            </div>

            <p className={"s-p"}>
                Results are as follows:
            </p>

            <div className={"s-head h2"}>
                Negative
            </div>

            <p className={"s-p"}>
                Cells do not have an HPV type linked to cancer.
            </p>

            <div className={"s-head h2"}>
                Positive
            </div>

            <p className={"s-p"}>
                Cells show a HPV type that is linked to cervical cancer.
            </p>

        </SubCard>
    )
}