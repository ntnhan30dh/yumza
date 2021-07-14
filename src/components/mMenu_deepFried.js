import React from "react";
import MobileSlick from "./mobileSlick";
import MMenuItem from "./mMenuItem";

const MMenuDeepFried = (props) => {
  return (
    <div className={`${props.bg}`}>
      <MobileSlick title="Deep fried dumplings with dip">
        <MMenuItem
          pic="Shrimpyoza"
          name="Shrimpyoza"
          description="Just tastes dumlicious: These delicious dumplings are filled with shrimp, white cabbage and onions. There is also a dip of your choice - 2 dips if you order 12 pieces."
          ingredient="Shrimps, white cabbage, onion"
        />
        <MMenuItem  pic="RiceAndShine" name="Rice and Shine" description=" Simply jasmine rice - as a side dish to your gyoza, to dip sauces or for an extra portion of hunger."/>
      </MobileSlick>
    </div>
  );
};

export default MMenuDeepFried;
