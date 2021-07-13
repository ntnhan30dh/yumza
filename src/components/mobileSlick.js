import Slider from "react-slick";
import React, { useRef } from "react";

const MobileSlick = (props) => {
  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    //adaptiveHeight:true
  };

  return (
    <Slider {...settings} ref={customeSlider} className={`w-3/4 mx-auto pt-8 `}>
      {props.children}
    </Slider>
  );
};

export default MobileSlick;
