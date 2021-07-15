import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MMenuItem = (props) => {

    const data = useStaticQuery(graphql`
    {
        MeSoHappy: file(relativePath: { eq: "mMenuPic_MeSoHappy.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MeSoHappyL: file(relativePath: { eq: "MenuPic_MeSoHappy_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShine: file(relativePath: { eq: "mMenuPic_RiceAndShine.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShineL: file(relativePath: { eq: "MenuPic_RiceAndShine_L.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Shrimpyoza: file(relativePath: { eq: "mMenuPic_Shrimpyoza.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const pic = picName => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappy.childImageSharp.fluid
      case "RiceAndShine":
        return data.RiceAndShine.childImageSharp.fluid
      case "Katsu":
        return data.Katsu.childImageSharp.fluid
      case "Lucky":
        return data.Lucky.childImageSharp.fluid
      case "HappyYogi":
        return data.HappyYogi.childImageSharp.fluid
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid
        case "GreenDelight":
          return data.GreenDelight.childImageSharp.fluid
          case "ThaiBurger":
        return data.ThaiBurger.childImageSharp.fluid
        case "SpiceItUp":
        return data.SpiceItUp.childImageSharp.fluid
        case "TeriyakiBurger":
        return data.TeriyakiBurger.childImageSharp.fluid
        case "GoldenGate":
        return data.GoldenGate.childImageSharp.fluid
        case "KPop":
        return data.Kpop.childImageSharp.fluid
        case "Rock_n_Rolls":
        return data.Rock_n_Rolls.childImageSharp.fluid
        case "Dumplings":
        return data.Dumplings.childImageSharp.fluid
        case "GatsuSide":
        return data.GatsuSide.childImageSharp.fluid
        default:
        return data.MeSoHappy.childImageSharp.fluid
    }
  }

  const picNav = picName => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappyL.childImageSharp.fluid
      case "RiceAndShine":
        return data.RiceAndShineL.childImageSharp.fluid
      case "Katsu":
        return data.Katsu.childImageSharp.fluid
      case "Lucky":
        return data.Lucky.childImageSharp.fluid
      case "HappyYogi":
        return data.HappyYogi.childImageSharp.fluid
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid
        case "GreenDelight":
          return data.GreenDelight.childImageSharp.fluid
          case "ThaiBurger":
        return data.ThaiBurger.childImageSharp.fluid
        case "SpiceItUp":
        return data.SpiceItUp.childImageSharp.fluid
        case "TeriyakiBurger":
        return data.TeriyakiBurger.childImageSharp.fluid
        case "GoldenGate":
        return data.GoldenGate.childImageSharp.fluid
        case "KPop":
        return data.Kpop.childImageSharp.fluid
        case "Rock_n_Rolls":
        return data.Rock_n_Rolls.childImageSharp.fluid
        case "Dumplings":
        return data.Dumplings.childImageSharp.fluid
        case "GatsuSide":
        return data.GatsuSide.childImageSharp.fluid
        default:
        return data.MeSoHappyL.childImageSharp.fluid
    }
  }
    return (
        <div className="mMenuItem  px-1 md:px-2" >
        <div className={` w-full pic menu-pic border-8 border-solid`}>
          <Img className="w-full picS" fluid={pic(props.pic)} />
          <Img className="w-full picL hidden " fluid={picNav(props.pic)} />
        </div>
        <div className="text text-center md:text-left ">
        <h1 className="name uppercase text-white font-bold tracking-wider text-3xl py-4 md:hidden">{props.name}</h1>
        <p className=" description md:hidden barlow font-bold text-xs text-white //text-center">{props.description}</p>
        <p className="ingredient md:hidden barlow text-white //text-center text-xs italic py-2">{props.ingredient}</p>
        </div>
        </div>

    )
}

export default MMenuItem