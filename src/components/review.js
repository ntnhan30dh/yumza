import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import quote from "../images/quote.png";
const Review = () => {
  const data = useStaticQuery(graphql`
    {
      customerSay: file(relativePath: { eq: "customerSay.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      hand: file(relativePath: { eq: "hand.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const text = "text-white  text-sm my-6";
  const quoteStyle = " w-8 flex-shrink-0 mx-2	mt-1"
  return (
    <section className="reviewDiv bg-red relative  w-full px-1 ">
      <div className="opacity-0">hi</div>
      <div className="top  w-full">
        <Img
          className="  w-3/4 -mt-1/3 mx-auto "
          fluid={data.hand.childImageSharp.fluid}
        />
        <div className="px-4">
          <Img
            className=" w-full  mb-6"
            fluid={data.customerSay.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className="bottom ">
        <div
          className={`reviewText flex ${text}  ml-1/3 `}
        >
          <div className={`${quoteStyle}`}>
            <img src={quote} alt="quote" />
          </div>
          <p className="w-2/3 barlow ">
            {" "}
            Great and tasty dumpling creations! It's so worth ordering 😊{" "}
          </p>
        </div>

        <div
          className={`reviewText flex ${text} `}
        >
          <div className={`${quoteStyle}`}>
            <img src={quote} alt="quote" />
          </div>
          <p className="w-1/2 barlow">
            {" "}
            Size of the portions is ideal! Dishes tasted delicious! I can only
            warmly recommend it !!! 👍👍👍{" "}
          </p>
        </div>

        <div
          className={`reviewText flex ${text}  `}
        >
            <div className={`${quoteStyle}`}>
              <img src={quote} alt="quote" className='w-full' />
            </div>
          <p className=" barlow w-2/3 text-lg">
            Crispy gyoza with delicious sauces - highly recommended!{" "}
          </p>
        </div>

        <div className=" absolute -right-4 top-1/2 yumZaText max-w-max mx-auto transform -rotate-18 md:rotate-18 ">
          <h1 className="text-pink font-bold text-3xl leading-100">
            YUM <br /> YUM <br /> YUMZAAAA
          </h1>
        </div>
        <div className="opacity-0">hi</div>
      </div>
    </section>
  );
};

export default Review;
