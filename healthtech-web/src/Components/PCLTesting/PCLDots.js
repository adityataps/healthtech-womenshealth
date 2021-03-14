import React from 'react'
import './PCLDots.css'
import Button from "react-bootstrap/Button";
import {Dot} from "pure-react-carousel";
// import { Link } from 'react-router-dom'

export default function PCLDots() {
    return (
        <div className={"pcl-dots-container"}>

                <Button className={"pcl-dot-button"} as={Dot} slide={1} disabled={null}>
                    Pap Smear
                </Button>

                <Button className={"pcl-dot-button"} as={Dot} slide={2} disabled={null}>
                    HPV Test
                </Button>

                <Button className={"pcl-dot-button"} as={Dot} slide={3} disabled={null}>
                    VIA
                </Button>

        </div>
    )
}