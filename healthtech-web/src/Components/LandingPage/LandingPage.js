import React from "react";
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'


export default class LandingPage extends React.Component {

    render() {
        return (
            <div className='landing-wrapper'>

                <div className={"landing-container"}>

                    <h1>Know Your Treatment Options</h1>
                    <h2>Precancerous Cervical Lesions (PCLs) </h2>
                    <p>Precancerous cervical lesions (PCLs) are conditions where neoplastic cells in the lining of the cervix could become malignant and ultimately become cervical cancer.</p>
                    <div className="options">
                        {/*<Button className={"landing-button"}> Cryotherapy </Button>*/}
                        {/*<Button className={"landing-button"}> Thermocoagulation </Button>*/}
                    </div>
                    <p>Click on the eggs below to learn more about PCLs and how to treat them.</p>


                </div>
            </div>
        )
    }
}