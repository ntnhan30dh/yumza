import Slider from "react-slick";
import React, { useRef, useState } from "react";
import chopstick3 from "../images/chopstick3.png";
import star from "../images/star_red.png";
import btn from "../images/btnNext.png";
import btnRed from "../images/btnNext_red.png";

const MobileSlick = (props) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  const [nav3] = useState();

  //creating the ref
  const customeSlider = useRef();
  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  

  const slideNr = props.slideNr;

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: slideNr,

    // adaptiveHeight:false,
    // variableWidth: true,
    //initialSlide:13,
    //focusOnSelect: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slideNr,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // initialSlide:1,
    //adaptiveHeight: true,
    focusOnSelect: true,
    // fade: true,
    arrows: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //adaptiveHeight: true,
    focusOnSelect: false,
    fade: true,
    arrows: false,
  };

  const pic = (title) => {
    switch (title) {
      case "Starters and sides":
        return chopstick3;
      default:
        return chopstick3;
    }
  };

  return (
    <div className={`sliderContainer ${props.bg}  `} >
      <div className="title bg-white text-center md:text-left md:text-2xl italic font-bold tracking-wider py-2 md:py-4 md:flex items-center">
      <div className="w-4 hidden md:block mx-4 "> 
                <img src={star} alt="chopstick3" />
              </div>
        <h1 className="uppercase text-red"> {props.title}</h1>
      </div>
      <div className="slideWrapper md:flex md:px-8 lg:px-20 py-8">
        {props.layout === 1 && (
          <div className="navSlide hidden md:block md:w-1/3 mx-auto //pt-8">
            <Slider
              {...settings2}
              asNavFor={nav2}
              ref={(slider1) => setNav1(slider1)}
              className={`w-full`}
            >
              {props.children}
            </Slider>
          </div>
        )}

        {props.layout === 1 && (
          <div className="rightSlides md:w-2/3 mx-auto overflow-hidden">
            <div className="mainSlide w-3/4 md:w-full mx-auto //pt-8 ">
              <Slider
                {...settings}
                ref={customeSlider}
                asNavFor={nav1}
                className={` w-full`}
              >
                {props.children}
              </Slider>
            </div>
            <div className="md:flex w-full xl:pt-1/20">
              <div className="textSlide hidden md:block w-1/2  xl:w-2/5  mx-auto pt-8">
                <Slider
                  {...settings3}
                  asNavFor={nav3}
                  ref={(slider2) => setNav2(slider2)}
                  className={` w-full `}
                >
                  {props.children}
                </Slider>
              </div>
              <div className="picAndArrow relative //md:flex flex-col align-items: flex-end justify-end pt-8 w-full md:mr-2">
              <button onClick={() => gotoNext()} className="hidden md:block absolute right-0">
                <div className=" w-8 lg:w-12 ">
                  <img src={props.bottomPic === "hidden"?btnRed:btn} alt="next" />
                </div>
              </button>
              {props.bottomPic !== "hidden"&&<div className=" w-3/4 mx-auto p-3 md:w-full md:px-0 md:absolute bottom-1/10 xl:bottom-0">
                <img src={pic(props.title)} alt="chopstick3" />
              </div>}

              </div>
            </div>
          </div>
        )}
        {props.layout === 2 && (
          <div className="layout2Slide relative w-3/4 md:w-full mx-auto pt-8 md:py-10">
            <Slider
              {...settings}
              ref={customeSlider}
              asNavFor={nav1}
              className={` w-full`}
            >
              {props.children}
            </Slider>
            <div className="picAndButtton md:flex md:absolute md:w-2/3 bottom-0 right-0 md:mr-2">
            <div className=" w-3/4 mx-auto p-3 ">
              <img src={pic(props.title)} alt="chopstick3" />
            </div>
            <button onClick={() => gotoNext()} className="hidden md:block">
              <div className=" w-8 lg:w-12">
                <img src={btn} alt="next" />
              </div>
            </button>
            </div>
          </div>
        )}

        {props.layout === 3 && (
          <div className="layout3Slide w-3/4 md:w-full mx-auto pt-8  ">
          <div className="flex mx-10">
            <Slider
            {...settings}
                ref={customeSlider}
                asNavFor={nav1}
                className={` w-full`}
            >
              {props.children}
            </Slider>
            <button onClick={() => gotoNext()} className="hidden md:block">
              <div className=" w-8 lg:w-12">
                <img src={btn} alt="next" />
              </div>
            </button>
          </div>
          <div className="textSlide hidden md:block w-full  ">
                <Slider
                  {...settings3}
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                  className={` w-full `}
                >
                  {props.children}
                </Slider>
              </div>
          
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileSlick;
