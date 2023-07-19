import React, { useState } from 'react';
import "./Slider.scss";
//Import icons to be used from materialui
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const Slider = () => {
  // UseState for sliding through the available images
  const [currentSlide, setCurrentSlide] = useState(0);

  //Instantiate the data we will be utilizing for the images of the slider itself
  const data = [
      "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600"
  ];



  const previousSlide = () => {
      setCurrentSlide(currentSlide === 0? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
      setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  
  return (
      //Slider component
      <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
          <img src={data[0]} alt="First Image"/>
          <img src={data[1]} alt="Second Image"/>
          <img src={data[2]} alt="Third Image"/>
        </div>
        <div className="icons">
          <div className="icon" onClick={ previousSlide }>
            <WestOutlinedIcon/>
          </div>
          <div className="icon" onClick= { nextSlide }>
            <EastOutlinedIcon/>
          </div>
        </div>
      </div>
  )
}

export default Slider;
