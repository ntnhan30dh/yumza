import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";

import MobileSlick from "./mobileSlick";
import MMenuItem from "./menuItem";

const MenuDips = () => {
    const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "dips_bg.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    
    }
  `);

  const imageData = data.bgBig.childImageSharp.fluid;
  return (
       <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer "
      >
       
      

      
      <MobileSlick title="Dip sauces" bg="" layout = {3}  slideNr={5}>
        <MMenuItem  pic="RiceAndShine" name="Rice and Shine" description=" Simply jasmine rice - as a side dish to your gyoza, to dip sauces or for an extra portion of hunger."/>
        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />

        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />

        <MMenuItem
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
       
  
       
      </MobileSlick>
      </BackgroundImage> 
  );
};

export default MenuDips;
