import React from "react";
import MobileSlick from "./mobileSlick";
import MenuItem from "./menuItem";

const menuFriedDumplings = () => {
  
  return (
      <MobileSlick title="Loaded pan fried dumplings with topping" bg="bg-red" layout = {1}  slideNr={2}>
        <MenuItem
          pic="MixMatchGyozaAsianCresian"
          name="Mix & Match Gyoza – Asian Creasian"
          description="6, 8 or 12 Gyozas of your choice on jasmine rice. There is also our sweet and fruity coconut lime sauce with coriander and roasted peanuts. Here you get the best of Thailand and Japan!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MenuItem
          pic="MixMatchGyozaKonnichiwaSabi"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MenuItem  pic="MixMatchGyozaSayonaraMayonara" name="Rice and Shine" description=" Simply jasmine rice - as a side dish to your gyoza, to dip sauces or for an extra portion of hunger."/>
     
        <MenuItem
          pic="MixMatchGyozaTastyTeriyaki"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />

       
        
      </MobileSlick>
    
  );
};

export default menuFriedDumplings;
