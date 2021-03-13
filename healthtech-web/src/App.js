import React from 'react'
import './App.css';
import {
    CarouselProvider, Slider, Slide,
    // ButtonBack,
    // ButtonNext
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import TestPage from "./pages/testpage";



function App() {

    return (
        <div className={"app-wrapper"}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
                // touchEnabled={false}
                // dragEnabled={false}
                isIntrinsicHeight={true}
            >

                <Slider
                    style={{height: "100%", width: "100%", overflow: "hidden"}}
                >

                    <Slide index={0}
                           className={"card"} style={{backgroundColor: "blue"}}
                    >
                        <TestPage>
                            {/*{window.history.replaceState(null, "Home", "/")}*/}
                        </TestPage>
                    </Slide>

                    <Slide index={1} style={{backgroundColor: "red"}}>
                        <TestPage>
                            {/*{window.history.replaceState(null, "Page2", "/page2")}*/}
                        </TestPage>
                    </Slide>

                    <Slide index={2} style={{backgroundColor: "orange"}}>
                        <TestPage>
                            {/*{window.history.replaceState(null, "Page3", "/page3")}*/}
                        </TestPage>
                    </Slide>
                </Slider>

            </CarouselProvider>

        </div>
    );
}

export default App;
