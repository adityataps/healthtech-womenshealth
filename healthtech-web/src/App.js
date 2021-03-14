import React from 'react'
import './App.css';
import {
    CarouselProvider, Slider, Slide, Dot
    // ButtonBack,
    // ButtonNext
} from 'pure-react-carousel';
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import 'pure-react-carousel/dist/react-carousel.es.css';

import TestPage from "./pages/testpage";
import LandingPage from "./Components/LandingPage/LandingPage";
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
                    touchEnabled={false}
                    dragEnabled={false}
                    isIntrinsicHeight={true}
                    currentSlide={window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)}
                >

                    <Slider
                        style={{height: "100%", width: "100%", overflow: "hidden"}}
                    >

                        <Slide index={0}
                               className={"card"}>
                            <Route path={"/0"} />
                            <LandingPage />
                            {/*<NavDots style={{"width": "100%"}}/>*/}

                        </Slide>

                        <Slide index={1}>
                            <Route path={"/1"} />
                            <TestPage />
                            {/*<NavDots />*/}

                        </Slide>

                        <Slide index={2}>
                            <Route path={"/2"} />
                            <TestPage />
                            {/*<NavDots />*/}

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
