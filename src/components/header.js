import React from "react"
import logo from "../images/icon.png"
import orderNow from "../images/orderNow_pink.png"
import { Link } from "gatsby"

const Header = (props) => {
 
  let menuActive = props.menuState ? "is-inactive" : ""
  let change = props.menuState ? "change" : ""
  const link = "text-sm md:text-xl  font-bold flex  items-center w-max pl-8 py-4 sm:py-0 sm:pl-4 lg:pl-8"
  const span = "my-auto text-charcoal text-white uppercase hover:text-lipstick "
  return (
    <header className="headerWrapper  z-50 w-full py-4  sm:pt-0 sticky top-0 bg-red md:pb-8  px-universal">
      <nav className="nav flex justify-between items-center w-full flex-col sm:flex-row">
        <div className="left flex items-center  w-full md:max-w-max justify-between //p-4 ">
          <Link to="/" className=" w-28 md:w-32 lg:w-48 mr-8" >
            <img src={logo} alt="logo" />
          </Link>
          <div className={`burgerMenu mx-4 ${change}`} onClick={props.toggleMenu} onKeyDown={props.toggleMenu} role = "button" tabIndex={-1}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        </div>
        <div className= {`rightDiv  hidden flex sm:flex flex-col sm:flex-row w-full h-screen sm:h-auto sm:w-max flex-wrap sm:flex-nowrap md:justify-between md:w-3/4  ${menuActive}`}>
          <Link to="/#story" className={link} activeClassName="bg-black">
            <span className={span}>Our Story</span>
          </Link>
          <Link to="/#menu" className={link}>
            <span className={span}>menu</span>
          </Link>

          <Link to="/#followus" className={link}>
            <span className={span}>follow Us</span>
          </Link>

          <Link to="/contact" className={link} >
            <span className={span}>Contact</span>
          </Link>

          <Link to="/" className=" w-24 md:w-32 lg:w-32 //mr-8" >
            <img src={orderNow} alt="order now" />
          </Link>

        </div>
      </nav>
    </header>
  )
}

export default Header
