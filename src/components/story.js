import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"



const Story = () => {

    const data = useStaticQuery(graphql`
    {
      bgBig: file(relativePath: { eq: "story_bg.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

    }     
  `)

  const imageData =  data.bgBig.childImageSharp.fluid
   
    return (
        <section className="story" id="story">
        {/* <BackgroundImage
        Tag="section"
        fluid={imageData}
        background-size="cover"
        opacity={0.5}
        className="bgContainer h-wFull xl:h-vh "
      >
       
      </BackgroundImage> */}

       <div className=" px-universal w-full">
          <Img className="  w-full" fluid={imageData} />
        </div>
      
        </section>
    )
}

export default Story