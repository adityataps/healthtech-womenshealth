import React from 'react'
import './PCLCaro.css'
import { Slider, Slide, WithStore } from "pure-react-carousel";
// import { BrowserRouter, Route } from "react-router-dom";
// import PCLDots from "./PCLDots";
// import SubCard from "../misc/SubCard";
import Slide0 from "./PCL-sub/Slide0/Slide0";
import Slide1 from "./PCL-sub/Slide1/Slide1";
import Slide2 from "./PCL-sub/Slide2/Slide2";
import Slide3 from "./PCL-sub/Slide3/Slide3";

function PCLCaro() {

    return (
        <div>

            {/*<CarouselProvider*/}
            {/*    naturalSlideHeight={1}*/}
            {/*    naturalSlideWidth={1}*/}
            {/*    totalSlides={4}*/}
            {/*    // touchEnabled={false}*/}
            {/*    // dragEnabled={false}*/}
            {/*    isIntrinsicHeight={true}*/}
            {/*    currentSlide={0}>*/}

                {/*<PCLDots />*/}

                <Slider>

                    <Slide index={0} className={"pcl-card"}>
                        {/*<Route path={"/1/0"} />*/}
                        <Slide0 />
                    </Slide>

                    <Slide index={1} className={"pcl-card"}>
                        {/*<Route path={"/1/1"} />*/}
                        <Slide1 />
                    </Slide>

                    <Slide index={2} className={"pcl-card"}>
                        {/*<Route path={"/1/2"} />*/}
                        <Slide2 />
                    </Slide>

                    <Slide index={3} className={"pcl-card"}>
                        {/*<Route path={"/1/3"} />*/}
                        <Slide3 />
                    </Slide>

                </Slider>

            {/*</CarouselProvider>*/}
        </div>
    )
}

export default WithStore(PCLCaro)