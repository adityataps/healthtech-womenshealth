import React from 'react'
import './App.css';
import {
    CarouselProvider, Slider, Slide, Dot
    // ButtonBack,
    // ButtonNext
} from 'pure-react-carousel';
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import 'pure-react-carousel/dist/react-carousel.es.css';

import TestPage from "./pages/testpage";
import PCLTesting from './Components/PCLTesting/PCLTesting';



function App() {



    return (
        <div className={"app-wrapper"}>

            <BrowserRouter>

                <Route exact path={"/"}>
                    <Redirect to={"/0"} />
                </Route>

                {console.log(window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1))}

                <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={100}
                    totalSlides={3}
                    // touchEnabled={false}
                    // dragEnabled={false}
                    isIntrinsicHeight={true}
                    currentSlide={window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1)}
                >

                    <Slider
                        style={{height: "100%", width: "100%", overflow: "hidden"}}
                    >

                        <Slide index={0}
                               className={"card"} style={{backgroundColor: "blue"}}
                        >
                            {/*<TestPage />*/}
                            <Route path={"/0"} component={TestPage} />
                            <NavDots />

                        </Slide>

                        <Slide index={1} style={{backgroundColor: "red"}}>
                            {/*<TestPage />*/}
                            <Route path={"/1"} component={TestPage} />
                            <NavDots />

                        </Slide>

                        <Slide index={2} style={{backgroundColor: "orange"}}>
                            {/*<TestPage />*/}
                            <Route path={"/2"} component={TestPage} />
                            <NavDots />

                        </Slide>
                    </Slider>

                    {/*<Link to={"/0"}>*/}
                    {/*    <Dot slide={0}>*/}
                    {/*        Uno*/}
                    {/*    </Dot>*/}
                    {/*</Link>*/}

                    {/*<Link to={"/1"}>*/}
                    {/*    <Dot slide={1}>*/}
                    {/*        Dos*/}
                    {/*    </Dot>*/}
                    {/*</Link>*/}

                    {/*<Link to={"/2"}>*/}
                    {/*    <Dot slide={2}>*/}
                    {/*        Tres*/}
                    {/*    </Dot>*/}
                    {/*</Link>*/}

                    {/*<Route path={"/"}>*/}
                    {/*    <Redirect to={"/0"} />*/}
                    {/*</Route>*/}


                </CarouselProvider>

            </BrowserRouter>

        </div>

        // <PCLTesting/>
    );
}

function NavDots() {
    return (
        <div>
            <Link to={"/0"}>
                <Dot slide={0}>
                    Uno
                </Dot>
            </Link>

            <Link to={"/1"}>
                <Dot slide={1}>
                    Dos
                </Dot>
            </Link>

            <Link to={"/2"}>
                <Dot slide={2}>
                    Tres
                </Dot>
            </Link>
        </div>
    )
}

export default App;
