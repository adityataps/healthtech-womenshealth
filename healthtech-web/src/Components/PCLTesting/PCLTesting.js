import React from "react";
import './PCLTesting.css';

export default class PCLTesting extends React.Component {
    render() {
        return (
            <div className='main-container'>
                <div className="heading">
                    <h1>How Do I Get Tested for PCL?</h1>
                    <p>Women 21 and over should get tested yearly for signs of PCL.</p>
                    <p>Your care provider or doctor may conduct any of the following test:</p>
                    <div className="options">
                        <div className="pap-exam">
                            <button variant="outline-secondary">Pap Exam</button>
                        </div>
                        <div className="HPV">
                            <button variant="outline-secondary">Human Papillomavirus (HPV)</button>
                        </div>
                        <div className="VIA"> 
                            <button variant="outline-secondary">Visual Inspection with Acetic Acid (VIA)</button>
                            <p>Your GYN will swab your cervix with 3% - 5% acetic acid</p>
                            <p>Your GYN is looking to see if your cervix will change from a pink to white</p>
                            <p>White-pink means you are negative</p>
                            <p>Intense white  means you are positive</p>
                            <p>White with cauliflower-like appearance means you are suspicious for cervical cancer</p>
                        </div>
                    </div>
                    <p>Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information</p>

                </div>
            </div>
        )
    }
}