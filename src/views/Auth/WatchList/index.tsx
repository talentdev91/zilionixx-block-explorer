import React, { useState } from 'react'
import useStyles from '../Authstyle'
import CustomModal from './CustomModal/CustomModal'
import { StyledPagePager } from '../../../Styles'
import WatchTable from './WatchTable'
import { StyledDarkTooltip } from '../../../Styles'
import { connect } from 'react-redux'
import { createWatchAddress } from '../../../store/actions/user'
import { useLocation } from 'react-router-dom'
import WatchListModify from './watchListModify'

interface TokenProps {
  createWatchAddress: (username: string, watchAddress: string, watchAddressNote: string, notifyOption: string, trackERC20Option: boolean, page: any) => void
}

function WatchList({ createWatchAddress }: TokenProps) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const location = useLocation();

  const handleSubmit = (username: any, watchAddress: any, watchAddressNote: any, notifyOption: any, trackERC20Option: any) => {
    createWatchAddress(username, watchAddress, watchAddressNote, notifyOption, trackERC20Option, 0)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addWatchAddress = () => {
    setOpen(true)
  }

  return (
    <StyledPagePager>
      {
        location.pathname === '/myaddress' &&
        <div>
          <div className={classes.contactForm}>
            My Watch List&nbsp;
            <StyledDarkTooltip title="Add a new address to your watch list" arrow placement="top">
              <span className={classes.profileSelect} onClick={addWatchAddress}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <div className={classes.contactFormCon}>
            <WatchTable />
          </div>
          <CustomModal modalTitle="Add a New Address to your Watch List" handleClick={handleSubmit} handleClose={handleClose} open={open} modalValue1={null} modalValue2={null} modalValue3='1' modalValue4={false} />
        </div>
      }
      {
        location.pathname === '/myaddress_modify' &&
        <WatchListModify />
      }
    </StyledPagePager>
  )
}

export default connect(null, { createWatchAddress })(WatchList)
