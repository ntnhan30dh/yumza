import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import CountryList from './countrylist'
import orderNow from "../images/orderNow_pink.png"


function OrderNow(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={props.toggleMenu}>
        <div className=" w-24  lg:w-32 sm:ml-10 py-4 xxsm:pb-1/5 sm:py-0">

        <img src={orderNow} alt="order now" />
        </div>
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
