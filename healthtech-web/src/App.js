import React from 'react'
import './App.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
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
          <Slide index={0} className={"card"} style={{backgroundColor: "blue"}}> <TestPage /> </Slide>
          <Slide index={1} style={{backgroundColor: "red"}}> Slide 1 </Slide>
          <Slide index={2} style={{backgroundColor: "orange"}}> Slide 2 </Slide>
        </Slider>

        {/*<ButtonBack> Back </ButtonBack>*/}
        {/*<ButtonNext> Next </ButtonNext>*/}
      </CarouselProvider>

      {/*<TestPage />*/}

    </div>
  );
}

export default App;
