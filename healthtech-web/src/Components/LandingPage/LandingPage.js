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
                    <p>Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information</p>
                    <div className="options">
                        {/*<Button className={"landing-button"}> Cryotherapy </Button>*/}
                        {/*<Button className={"landing-button"}> Thermocoagulation </Button>*/}
                    </div>
                    <p>Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information</p>


                </div>
            </div>
        )
    }
}