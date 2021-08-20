import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CountryList from './countrylist'
import orderNow from "../images/orderNow_pink.png"
import circle_red from "../images/oderNow_bgRed.png"
import circle_pink from "../images/oderNow_bgPink.png"


function OrderNow(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={props.toggleMenu}>
       {props.color==="pink" &&<div className=" w-24  lg:w-32 sm:ml-10 py-4 xxsm:pb-1/5 sm:py-0">
        <img src={orderNow} alt="order now" />
        </div>}
        {props.color==="red"&& <div className="absolute circleDiv relative w-28 h-28 lg:w-44 lg:h-44 xl:w-48 xl:h-48 lg:top-10 lg:left-2"  >
            {" "}
            <div className={`absolute w-full h-full spin  `}>
              <img src={circle_red }  alt="circle_red}" />
            </div>
            <div className={`content absolute top-0 w-full h-full flex items-center justify-center transform rotate-12	`}>
              {" "}
              <span className={`text-center uppercase px-4 text-xxs md:text-base lg:text-3xl md:px-8 lg:px-4 xl:px-8 font-bold text-white `}> order <br /> now</span>
            </div>
          </div>}

          {props.color==="pink_spin"&& <div className=" circleDiv relative w-24 h-24 lg:w-32 lg:h-32 sm:ml-10 py-4 xxsm:pb-1/5 sm:py-0"  >
            {" "}
            <div className={`absolute top-0 w-full h-full spin  `}>
              <img src={circle_pink }  alt="circle_pink}" />
            </div>
            <div className={`content absolute top-0 w-full h-full flex items-center justify-center transform rotate-12	`}>
              {" "}
              <span className={`text-center uppercase px-4 text-xxs md:text-base lg:text-2xl md:px-8 lg:px-4 xl:px-8 font-bold text-white `}> order <br /> now</span>
            </div>
          </div>}
        </Button>}
        
    >
      <Modal.Header>Please select the country</Modal.Header>
      <Modal.Content >
        <Modal.Description>
        </Modal.Description>
        <CountryList/>
      </Modal.Content>
    </Modal>
  )
}

export default OrderNow
