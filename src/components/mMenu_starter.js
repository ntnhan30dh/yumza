import React from 'react'
import MobileSlick from './mobileSlick'
import MMenuItem from './mMenuItem'

const MMenuStarter = (props) =>{
    const borderColour = props.bg ==='bg-pink'?'border-red':'border-pink'
return (
    <div className={`${props.bg}`}>
    <MobileSlick >
       <MMenuItem borderColour = {borderColour} pic="MeSoHappy" name ="ME SO HAPPY"/>  
       <MMenuItem borderColour = {borderColour} pic="RiceAndShine"/>   
    </MobileSlick> 
    </div>
)

}

export default MMenuStarter