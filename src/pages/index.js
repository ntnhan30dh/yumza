import React, { useState }   from "react"
import "../styles/index.scss"
import '../styles/global.css';
import { useStaticQuery, graphql } from "gatsby"

import Header from "../components/header"
import Story from "../components/story"


// const codeStyles = {
//   //color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

const IndexPage = () => {

  let [menuActive, setmenuActive] = useState(false);
  const toggleMenu = () => {
		setmenuActive(!menuActive)
    }

  const data = useStaticQuery(graphql`
    {
      pic: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <div className="pageWrapper">
    <Header toggleMenu={toggleMenu} menuState={menuActive}/>
    <Story />

    {/* <h1 className="text-red mx-10" style={codeStyles}>Hi</h1> */}
   
    </div>
    
  )
}

export default IndexPage
