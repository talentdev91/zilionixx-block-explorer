import React, { useState } from 'react'
import useStyles from '../Authstyle'

import AddressTable from './AddressNoteTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import { connect } from 'react-redux'
import SearchBtn from '../SearchBox/SearchBox'
import { createAddressNote } from '../../../store/actions/user'
import CustomModal from './CustomModal/CustomModal'

interface AddressNoteProps {
  createAddressNote: (username: string, address: string, nameTag: string, privateNote: string, page: 0) => void
}

function WatchList({ createAddressNote }: AddressNoteProps) {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleSubmit = (username: any, address: any, nameTag: any, privateNote: any) => {
    createAddressNote(username, address, nameTag, privateNote, 0)
    setOpen(false)
  }
  const handleClose = () => {
    setOpen(false)
  }
  const addAddress = () => {
    setOpen(true)
  }

  return (
    <StyledPagePager>
      <div className={classes.contactForm}>
        <div className={classes.tableTop}>
          <div>
            My Address Private Notes
            <StyledDarkTooltip title="Add a new address private note" arrow placement="top">
              <span className={classes.profileSelect} onClick={addAddress}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <SearchBtn placeholder="Search Address Private Tags" />
        </div>
      </div>
      <div className={classes.contactFormCon}>
        <AddressTable />
      </div>
      <CustomModal
        handleClick={handleSubmit}
        handleClose={handleClose}
        open={open}
        modalValue1={null}
        modalValue2={null}
        modalTitle="Add a new address note"
      />
    </StyledPagePager>
  )
}

export default connect(null, { createAddressNote })(WatchList)
