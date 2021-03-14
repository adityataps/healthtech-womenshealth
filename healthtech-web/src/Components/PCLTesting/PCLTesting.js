import React from "react";
import './PCLTesting.css';
import PCLCaro from "./PCLCaro";
import {CarouselProvider} from "pure-react-carousel";
import PCLDots from "./PCLDots";

export default class PCLTesting extends React.Component {
    render() {
        return (
            <div className='pcl-page-wrapper'>

                <div >

                        <CarouselProvider
                            naturalSlideHeight={100}
                            naturalSlideWidth={100}
                            totalSlides={4}
                            touchEnabled={false}
                            dragEnabled={false}
                            isIntrinsicHeight={true}
                            currentSlide={0}
                            visibleSlides={1}
                            className={'pcl-container'}
                        >

                        <div className="pcl-heading">
                            <h1>How Do I Get Tested for PCL?</h1>
                            <p>Women 21 and over should get tested yearly for signs of PCL.</p>
                            <p>Your care provider or doctor may conduct any of the following test:</p>
                            <PCLDots />
                        </div>


                        <div className={"pcl-caro-container"}>
                            <PCLCaro />
                        </div>

                        </CarouselProvider>


                         </div>

            </div>
        )
    }
}


