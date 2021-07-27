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
        <MMenuItem
          pic="GingerNinjaDip"
          name="ME SO HAPPY" 
        />
        <MMenuItem  pic="SayonaraMayonaraDip" name="Rice and Shine"/>
        <MMenuItem
          pic="KonnichiwasabiDip"
          name="ME SO HAPPY"  
        />
        <MMenuItem
          pic="TastyTeriyakiDip"
          name="ME SO HAPPY"  
        />
        <MMenuItem
          pic="AsianCreasianDip"
          name="ME SO HAPPY"
        />

        
       
  
       
      </MobileSlick>
      </BackgroundImage> 
  );
};

export default MenuDips;
