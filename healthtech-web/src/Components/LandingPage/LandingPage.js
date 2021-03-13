import React from "react";
import './LandingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button'


export default class LandingPage extends React.Component {

    render() {
        return (
            <div className='main-container'>
                <div className="heading">
                    <h1>Know Your Treatment Options</h1>
                    <h2>Precancerous Cervical Lesions</h2>
                    <p>Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information</p>
                    <div className="options">
                        <button variant="outline-secondary">Cryotherapy</button>
                        <button variant="outline-secondary">Thermocoagulation</button>
                    </div>
                    <p>Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information Pre-cervical cancer lesion information</p>

                </div>
            </div>
        )
    }
}