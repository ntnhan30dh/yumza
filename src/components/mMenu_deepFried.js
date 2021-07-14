import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./mMenuItem";

const MMenuDeepFried = (props) => {
  const borderColour = props.bg === "bg-pink" ? "border-red" : "border-pink";
  return (
    <div className={`${props.bg}`}>
      <MobileSlick title="Starters and sides">
        <MMenuItem
          borderColour={borderColour}
          pic="MeSoHappy"
          name="ME SO HAPPY"
          description="Super healthy miso is eaten around the clock in Japan. And no wonder why: the spicy soup with tofu, nori seaweed and spring onions just always works. We'll spice it up with three gyozas of your choice - the most casual way to eat Japanese classics!"
          ingredient="Coconut-lime sauce, coriander, roasted peanuts"
        />
        <MMenuItem borderColour={borderColour} pic="RiceAndShine" name="Rice and Shine" description=" Simply jasmine rice - as a side dish to your gyoza, to dip sauces or for an extra portion of hunger."/>
      </MobileSlick>
    </div>
  );
};

export default MMenuDeepFried;
