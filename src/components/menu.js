import React from "react";
import menu_text from "../images/menu_text.png";
const Menu = () => {
  return (
    <section id="menu" className="w-full bg-pink">
      <div className="textDiv w-full ">
        <div className=" w-1/3 ">
          <img src={menu_text} alt="menu" />
        </div>{" "}
        <div className="text w-2/3 text-white ">
          <p>
            Experience an Asian fusion like no other when you order from Yumza -
            dumplings stuffed & topped for you, delivered to you, whatever your
            mood. Yum!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
