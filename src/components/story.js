import React from "react";
//import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import dunmpling1 from "../images/dumpling1.png";
import dunmpling2 from "../images/dumpling2.png";
import dunmpling3 from "../images/dumpling3.png";
import dunmplingDish from "../images/dumplingDish.png";
import chopstick1 from "../images/chopsticks1.png";
import chopstick2 from "../images/chopstick2.png";

const Story = () => {
  const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "story_bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      steamed_fried_loved: file(
        relativePath: { eq: "steamed_fried_loved.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      dumplingLove: file(relativePath: { eq: "dumplingLove.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.bgBig.childImageSharp.fluid;
  // const pStyle = {
  //   lineHeight: "20px",
  // };

   const imgStyle = {
    width: "100%",
  };
  return (
    <section className="story bg-red relative " id="story">
      <div className=" absolute right-0 w-1/5 top-1/6 ">
        <img src={chopstick1} alt="chopstick1" style={imgStyle} />
      </div>
      <div className="  absolute left-0 w-1/5 top-1/4">
        <img src={chopstick2} alt="chopstick2" style={imgStyle} />
      </div>
      {/* <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer h-wFull xl:h-vh "
      >
       
      </BackgroundImage> */}
      <div className=" px-universal w-full pt-4">
        <Img
          className="  w-full mb-4 md:mb-6"
          fluid={data.steamed_fried_loved.childImageSharp.fluid}
        />
      </div>
      <div className=" px-universal w-full">
        <Img className="  w-full" fluid={imageData} />
      </div>
      <div className="bottomDiv w-full pl-universal md:flex overflow-hidden">
        <div className="text">
          <div className="  w-full ">
            <Img
              className="  w-full my-8"
              fluid={data.dumplingLove.childImageSharp.fluid}
            />
            <div className="w-full flex">
              <p className=" barlow text-white text-xs xxsm:text-base md:text-lg lg:text-2xl w-2/3">
                Delicate and delicious, these different types of Asian dumplings
                are stuffed to perfection then pan fried. Tantalise your taste
                buds and go creative with your flavours combination. With
                different fillings and toppings to choose from, the options are
                endless - so whether it’s dinner for two or a feast for five,
                you always know there is something for everyone.
              </p>
              <div className="dumplingsDiv w-1/3 ">
                <div className=" w-16 mx-auto  md:-mt-20">
                  <img src={dunmpling1} alt="dunmpling" />
                </div>{" "}
                <div className=" w-20 mx-auto  ">
                  <img src={dunmpling2} alt="dunmpling" />
                </div>{" "}
                <div className=" w-20  mx-auto ">
                  <img src={dunmpling3} alt="dunmpling" />
                </div>{" "}
                <div className=" w-24 mx-auto ">
                  <img src={dunmplingDish} alt="dunmpling" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="yumZaText max-w-max mx-auto transform -rotate-18 md:rotate-18 pb-16 xxsm:-mt-10 md:-mr-6 md:mt-1/5">
          <h1 className="text-pink font-bold text-14vw md:text-6xl lg:text-7xl leading-100">
            YUM <br /> YUM <br /> YUMZAAAA
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Story;
