import React from 'react'
import './App.css';
import {
    CarouselProvider, Slider, Slide,
    // ButtonBack,
    // ButtonNext
} from 'pure-react-carousel';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import 'pure-react-carousel/dist/react-carousel.es.css';

import TestPage from "./pages/testpage";
import PCLTesting from './Components/PCLTesting/PCLTesting';
import LandingPage from "./Components/LandingPage/LandingPage";
import Treatments from "./Components/Treatments/Treatments";
import CustomDotGroup from "./Components/misc/CustomDotGroup";



function App() {

    return (
        <div className={"app-wrapper"}>

            <BrowserRouter>

                <Route exact path={"/"}>
                    <Redirect to={"/0"} />
                </Route>

                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={3}
                    visibleSlides={1}
                    touchEnabled={false}
                    dragEnabled={false}
                    isIntrinsicHeight={true}
                    currentSlide={window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)}
                >

                    <Slider
                        style={{height: "100%", width: "100%", overflow: "hidden"}}
                    >

                        <Slide index={0}
                               className={"caro-card"}>
                            <Route exact path={"/0"} />
                            <LandingPage />

                        </Slide>

                        <Slide index={1}
                               className={"caro-card"}>
                            <Route exact path={"/1"} />
                            <PCLTesting />

                        </Slide>

                        <Slide index={2}
                               className={"caro-card"}>
                            <Route exact path={"/2"} />
                            <Treatments />

                        </Slide>
                    </Slider>

                    <NavDots />

                </CarouselProvider>
            </BrowserRouter>
        </div>

    );
}

export function NavDots() {
    return (

        <div className={"nav-container"}>
            <div className={"navs"}>
                <CustomDotGroup slides={3} />
            </div>
        </div>


    )
}

export default App;
