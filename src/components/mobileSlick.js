import Slider from "react-slick";
import React, { useRef, useState } from "react";
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
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
   // adaptiveHeight:true,
  // variableWidth: true,
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // centerMode: true,
          // centerPadding: '5%',
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    //adaptiveHeight:true
    focusOnSelect:false,
    fade: true,
    
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

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
    <Slider {...settings2} asNavFor={nav2} ref={(slider1) => setNav1(slider1)} className={`w-3/4 mx-auto pt-8 `}>
      {props.children}
    </Slider>
    <div className="mainSlide">

    <Slider {...settings} ref={customeSlider} asNavFor={nav1}
        className={`w-3/4 mx-auto pt-8 `}>
      {props.children}
    </Slider>
    </div>

    <div className=" w-3/4 mx-auto p-3 ">
          <img src={pic(props.title)} alt="chopstick3" />
        </div>

        <button onClick={() => gotoNext()}>
            <div >
              <h1>next</h1>
            </div>
          </button>
    </div>
  );
};

export default MobileSlick;
