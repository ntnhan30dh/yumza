import Slider from "react-slick";
import React, { useRef } from "react";
import chopstick3 from '../images/chopstick3.png'

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

  const pic = title => {
    switch (title) {
      case "Starters and sides":
        return  chopstick3 ;
        default : return chopstick3

      
      }

  }


  return (
    <div className={`sliderWrap ${props.bg}`}>
      <div className="title bg-white text-center italic font-bold tracking-wider py-2">
        <h1 className="uppercase text-red">{props.title}</h1>
      </div>
    <Slider {...settings} ref={customeSlider} className={`w-3/4 mx-auto pt-8 `}>
      {props.children}
    </Slider>
    <div className=" w-3/4 mx-auto p-3 ">
          <img src={pic(props.title)} alt="chopstick3" />
        </div>
    </div>
  );
};

export default MobileSlick;
