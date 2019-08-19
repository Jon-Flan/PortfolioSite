import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import Pi1 from '../assets/media/pi/pi4.png';
import Pi2 from '../assets/media/pi/pi2.png';
import Pi3 from '../assets/media/pi/pi1.png';
import Pi4 from '../assets/media/pi/pi5.png';
import Pi5 from '../assets/media/pi/pi8.png';
import Pi6 from '../assets/media/pi/pi6.png';
import Pi7 from '../assets/media/pi/pi7.png';
import Pi8 from '../assets/media/pi/pi3.png';



	const properties ={
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		indicators: true,
		arrow: true,
	}

	const Slideshow = () => {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{ background:"url(" + Pi1 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi2 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi3 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 3</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi4 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 4</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi5 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 5</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi6 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 6</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi7 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 7</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{background:"url(" + Pi8 + ") center / cover", height:"450px", width:"300px", display:"flex", margin:"auto"}}>
            <span>Slide 8</span>
          </div>
        </div>
      </Slide>
    )
}

export default Slideshow;