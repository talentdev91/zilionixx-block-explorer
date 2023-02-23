import React, { useState } from 'react'
import useStyles from '../Authstyle'

import TokenIgnoreTable from './TokenIgnoreTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
import { connect } from 'react-redux'
import { createIgnoreToken } from '../../../store/actions/user'
import CustomModal from './CustomModal/CustomModal'

interface TokenProps {
  createIgnoreToken: (username: string, token: string, tokenNote: string, page: any) => void
}

function WatchList({ createIgnoreToken }: TokenProps) {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [modalLabel2, setModalLabel2] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (username: any, token: any, tokenNote: any) => {
    createIgnoreToken(username, token, tokenNote, 0)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addIgnoreTokens = () => {
    setModalTitle('Create a new Token Ignore note');
    setModalLabel1('Token Address:')
    setModalLabel2(' Note(optional) ')
    setOpen(true)
  }

  return (
    <StyledPagePager>
      <div className={classes.contactForm}>
        <div className={classes.tableTop}>
          <div>
            My Token Ignore List
            <StyledDarkTooltip title="Create a new Ignore Token entry" arrow placement="top">
              <span className={classes.profileSelect} onClick={addIgnoreTokens}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <SearchBtn placeholder="Search Token Ignore" />
        </div>
      </div>
      <div className={classes.contactFormCon}>
        <TokenIgnoreTable />
      </div>
      <CustomModal handleClick={handleSubmit} handleClose={handleClose} open={open} modalTitle={modalTitle} modalLabel1={modalLabel1} modalLabel2={modalLabel2} modalValue1={null} modalValue2={null} />
    </StyledPagePager>
  )
}

export default connect(null, { createIgnoreToken })(WatchList)
