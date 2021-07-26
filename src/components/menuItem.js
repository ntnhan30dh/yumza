import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const MenuItem = (props) => {
  const data = useStaticQuery(graphql`
    {
      MeSoHappyM: file(relativePath: { eq: "mMenuPic_MeSoHappy.png" }) {
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

      MeSoHappy: file(relativePath: { eq: "MenuPic_MeSoHappy_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      RiceAndShineM: file(relativePath: { eq: "mMenuPic_RiceAndShine.png" }) {
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

      RiceAndShine: file(relativePath: { eq: "MenuPic_RiceAndShine_S.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySaladM: file(
        relativePath: { eq: "mMenuPic_AsianLoveStorySalad.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySaladL: file(
        relativePath: { eq: "MenuPic_AsianLoveStorySalad_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      AsianLoveStorySalad: file(
        relativePath: { eq: "MenuPic_AsianLoveStorySalad_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      EtamameM: file(
        relativePath: { eq: "mMenuPic_Etamame.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      EtamameL: file(
        relativePath: { eq: "MenuPic_Etamame_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Etamame: file(
        relativePath: { eq: "MenuPic_Etamame_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KimchichiM: file(
        relativePath: { eq: "mMenuPic_Kimchichi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      KimchichiL: file(
        relativePath: { eq: "MenuPic_Kimchichi_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Kimchichi: file(
        relativePath: { eq: "MenuPic_Kimchichi_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFriesM: file(
        relativePath: { eq: "mMenuPic_SweetPotatoeFries.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFriesL: file(
        relativePath: { eq: "MenuPic_SweetPotatoeFries_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SweetPotatoeFries: file(
        relativePath: { eq: "MenuPic_SweetPotatoeFries_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      ShrimpyozaM: file(
        relativePath: { eq: "mMenuPic_Shrimpyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      Shrimpyoza: file(
        relativePath: { eq: "MenuPic_Shrimpyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      CheekyChickenGyozaM: file(
        relativePath: { eq: "mMenuPic_CheekyChickenGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      CheekyChickenGyoza: file(
        relativePath: { eq: "MenuPic_CheekyChickenGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      VegGyozaM: file(
        relativePath: { eq: "mMenuPic_VegGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      VegGyoza: file(
        relativePath: { eq: "MenuPic_VegGyoza.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SmokeyBeefManduM: file(
        relativePath: { eq: "mMenuPic_SmokeyBeefMandu.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      SmokeyBeefMandu: file(
        relativePath: { eq: "MenuPic_SmokeyBeefMandu.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      

      MixMatchGyozaAsianCresianM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaAsianCresianL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaAsianCresian_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaAsianCresian: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaAsianCresian_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabiM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaKonnichiwaSabi.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabiL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaKonnichiwaSabi_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaKonnichiwaSabi: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaKonnichiwaSabi_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }


      MixMatchGyozaSayonaraMayonaraM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaSayonaraMayonara.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaSayonaraMayonaraL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaSayonaraMayonara_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaSayonaraMayonara: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaSayonaraMayonara_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyakiM: file(
        relativePath: { eq: "mMenuPic_MixMatchGyozaTastyTeriyaki.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyakiL: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaTastyTeriyaki_L.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      MixMatchGyozaTastyTeriyaki: file(
        relativePath: { eq: "MenuPic_MixMatchGyozaTastyTeriyaki_S.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesAsianCresianM: file(
        relativePath: { eq: "mMenuPic_LoadedFriesAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      LoadedFriesAsianCresian: file(
        relativePath: { eq: "MenuPic_LoadedFriesAsianCresian.png" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      
    }
  `);

  const pic = (picName) => {
    switch (picName) {
      // starters
      case "MeSoHappy":
        return data.MeSoHappy.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShine.childImageSharp.fluid;
      case "AsianLoveStorySalad":
        return data.AsianLoveStorySalad.childImageSharp.fluid;
        case "Etamame":
          return data.Etamame.childImageSharp.fluid;
          case "Kimchichi":
            return data.Kimchichi.childImageSharp.fluid;
            case "SweetPotatoeFries":
              return data.SweetPotatoeFries.childImageSharp.fluid;
              case "CheekyChickenGyoza":
                return data.CheekyChickenGyoza.childImageSharp.fluid;
                case "VegGyoza":
                  return data.VegGyoza.childImageSharp.fluid;
                  case "SmokeyBeefMandu":
                    return data.SmokeyBeefMandu.childImageSharp.fluid;
                    case "MixMatchGyozaAsianCresian":
                      return data.MixMatchGyozaAsianCresian.childImageSharp.fluid;
                    case "MixMatchGyozaKonnichiwaSabi":
                      return data.MixMatchGyozaKonnichiwaSabi.childImageSharp.fluid;
                      case "MixMatchGyozaSayonaraMayonara":
                        return data.MixMatchGyozaSayonaraMayonara.childImageSharp.fluid;
                        case "MixMatchGyozaTastyTeriyaki":
                          return data.MixMatchGyozaTastyTeriyaki.childImageSharp.fluid;
                          case "LoadedFriesAsianCresian":
                            return data.LoadedFriesAsianCresian.childImageSharp.fluid;
                            case "GatsuSide":
                              return data.GatsuSide.childImageSharp.fluid;
                                case "Shrimpyoza":
                                  return data.Shrimpyoza.childImageSharp.fluid;
      default:
        return data.MeSoHappy.childImageSharp.fluid;
    }
  };
  const picM = (picName) => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappy.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShine.childImageSharp.fluid;
      case "MixMatchGyozaAsianCresian":
        return data.MixMatchGyozaAsianCresian.childImageSharp.fluid;
      case "Lucky":
        return data.Lucky.childImageSharp.fluid;
      case "HappyYogi":
        return data.HappyYogi.childImageSharp.fluid;
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid;
      case "GreenDelight":
        return data.GreenDelight.childImageSharp.fluid;
      case "ThaiBurger":
        return data.ThaiBurger.childImageSharp.fluid;
      case "VegGyozaq":
        return data.SpiceItUp.childImageSharp.fluid;
      case "TeriyakiBurger":
        return data.TeriyakiBurger.childImageSharp.fluid;
      case "GoldenGate":
        return data.GoldenGate.childImageSharp.fluid;
      case "KPop":
        return data.Kpop.childImageSharp.fluid;
      case "Rock_n_Rolls":
        return data.Rock_n_Rolls.childImageSharp.fluid;
      case "Dumplings":
        return data.Dumplings.childImageSharp.fluid;
      case "GatsuSide":
        return data.GatsuSide.childImageSharp.fluid;
      default:
        return data.MeSoHappy.childImageSharp.fluid;
    }
  };
  const picNav = (picName) => {
    switch (picName) {
      case "MeSoHappy":
        return data.MeSoHappyL.childImageSharp.fluid;
      case "RiceAndShine":
        return data.RiceAndShineL.childImageSharp.fluid;
      case "MixMatchGyozaAsianCresian":
        return data.MixMatchGyozaAsianCresianL.childImageSharp.fluid;
      case "Lucky":
        return data.Lucky.childImageSharp.fluid;
      case "HappyYogi":
        return data.HappyYogi.childImageSharp.fluid;
      case "Shrimpyoza":
        return data.Shrimpyoza.childImageSharp.fluid;
      case "GreenDelight":
        return data.GreenDelight.childImageSharp.fluid;
      case "ThaiBurger":
        return data.ThaiBurger.childImageSharp.fluid;
      case "SpiceItUp":
        return data.SpiceItUp.childImageSharp.fluid;
      case "TeriyakiBurger":
        return data.TeriyakiBurger.childImageSharp.fluid;
      case "GoldenGate":
        return data.GoldenGate.childImageSharp.fluid;
      case "KPop":
        return data.Kpop.childImageSharp.fluid;
      case "Rock_n_Rolls":
        return data.Rock_n_Rolls.childImageSharp.fluid;
      case "Dumplings":
        return data.Dumplings.childImageSharp.fluid;
      case "GatsuSide":
        return data.GatsuSide.childImageSharp.fluid;
      default:
        return data.MeSoHappyL.childImageSharp.fluid;
    }
  };

  return (
    <div className="mMenuItem  px-1 md:px-2 xl:px-3 ">
      <div className={` w-full pic menu-pic border-8 border-solid `}>
        <Img className="w-full picS hidden md:block" fluid={pic(props.pic)} />
        <Img className="w-full picS md:hidden" fluid={picM(props.pic)} />
        <Img className="w-full picL hidden " fluid={picNav(props.pic)} />
      </div>
      <div className="text text-center md:text-left ">
        <h1 className=" name uppercase text-white font-bold tracking-wider text-3xl lg:text-5xl py-4 md:hidden  ">
          {props.name}
        </h1>
        <p className=" description md:hidden barlow font-bold text-xs md:text-1vw  //lg:text-base //xl:text-lg text-white ">
          {props.description}
        </p>
        <p className="ingredient md:hidden barlow text-white //text-center text-xs lg:text-base xl:text-lg italic py-2">
          {props.ingredient}
        </p>
      </div>
    </div>
  );
};

export default MenuItem;
