import React from "react";
import menu_text from "../images/menu_text.png";

import MenuStarter from "./menu_starter";
import MenuDeepFried from "./menu_deepFried";
import MenuFriedDumplings from "./menu_friedDumplings";
import SweetPotato from "./menu_sweetPotato";
import Combos from "./menu_combos";

const Menu = () => {
  return (
    <section id="menu" className=" menuContainer w-full  md:py-12 lg:py-16">
      <div className="textDiv w-full md:flex bg-pink">
        <div className=" md:w-1/2 py-4 pr-4 ">
          <img src={menu_text} alt="menu" />
        </div>{" "}
        <div className="text  w-2/3  p-4 ">
          <p className="barlow text-white text-xs xxsm:text-base md:text-lg lg:text-2xl">
            Experience an Asian fusion like no other when you order from Yumza -
            dumplings stuffed & topped for you, delivered to you, whatever your
            mood. Yum!
          </p>
        </div>
      </div>
      <MenuStarter/>
      <MenuDeepFried/>
      <MenuFriedDumplings/>
      <SweetPotato/>
      <Combos/>
     
    </section>
  );
};

export default Menu;
