import React from 'react'
import './Treatments.css'
import {CarouselProvider, Slider, Slide, DotGroup, Dot} from "pure-react-carousel";
import Slide0 from './tx-sub/Slide0'
import Slide1 from './tx-sub/Slide1'
import Slide2 from './tx-sub/Slide2'
import Button from "react-bootstrap/Button";

export default function Treatments() {
    return (
        <div className={"tx-wrapper"}>

            <div className={"tx-container"}>

                <h1> Which treatment is right for me? </h1>
                <h2>
                    Treatment lipsum
                </h2>

                <CarouselProvider
                    naturalSlideHeight={100}
                    naturalSlideWidth={100}
                    totalSlides={3}
                    touchEnabled={false}
                    dragEnabled={false}
                    isIntrinsicHeight={true}
                    currentSlide={0}
                    visibleSlides={1}
                    className={'tx-caro'}
                >

                    <div style={{textAlign: "center", "fontSize": "20px"}}>
                        <Button className={"pcl-dot-button"} as={Dot} slide={1} disabled={null}>
                            Cryotherapy
                        </Button>

                        <Button className={"pcl-dot-button"} as={Dot} slide={2} disabled={null}>
                            Thermocoagulation
                        </Button>
                    </div>

                    <hr />

                    <Slider>

                        <Slide index={0}>
                            <Slide0 />
                        </Slide>

                        <Slide index={1}>
                            <Slide1 />
                        </Slide>

                        <Slide index={2}>
                            <Slide2 />
                        </Slide>



                    </Slider>

                </CarouselProvider>



            </div>

        </div>
    )
}