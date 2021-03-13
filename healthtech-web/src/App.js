import React from 'react'
import './App.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import LandingPage from './Components/LandingPage/LandingPage'

function App() {
  return (
    <div>
      <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={100}
      totalSlides={3}>
        <Slider>
          <Slide index={0} style={{backgroundColor: "blue"}}> Slide 0 </Slide>
          <Slide index={1} style={{backgroundColor: "red"}}> Slide 1 </Slide>
          <Slide index={2} style={{backgroundColor: "orange"}}> Slide 2 </Slide>
        </Slider>
        <ButtonBack> Back </ButtonBack>
        <ButtonNext> Next </ButtonNext>
      </CarouselProvider>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
