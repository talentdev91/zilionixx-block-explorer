import React, { useState } from 'react'
import useStyles from '../Authstyle'

import TxnTable from './TxnTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
import { connect } from 'react-redux'
import { createTxnNote } from '../../../store/actions/user'
import CustomModal from './CustomModal/CustomModal'

interface TxnNoteProps {
  createTxnNote: (username: string, txnHash: string, txnNote: string) => void
}

function WatchList({ createTxnNote }: TxnNoteProps) {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [modalLabel2, setModalLabel2] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (username: any, txnHash: any, txnNote: any) => {
    createTxnNote(username, txnHash, txnNote)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addTxn = () => {
    setModalTitle('Add a new Txn hash note');
    setModalLabel1('Txn Hash:')
    setModalLabel2(' View / Update Private Note :')
    setOpen(true)
  }

  return (
    <StyledPagePager>
      <div className={classes.contactForm}>
        <div className={classes.tableTop}>
          <div>
            My Transactions Private Notes
            <StyledDarkTooltip title="Add a new transaction private note" arrow placement="top">
              <span className={classes.profileSelect} onClick={addTxn}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <SearchBtn placeholder="Search Txn Private Note" />
        </div>
      </div>
      <div className={classes.contactFormCon}>
        <TxnTable />
      </div>
      <CustomModal handleClick={handleSubmit} handleClose={handleClose} open={open} modalTitle={modalTitle} modalLabel1={modalLabel1} modalLabel2={modalLabel2} modalValue1={null} modalValue2={null} />
    </StyledPagePager>
  )
}

export default connect(null, { createTxnNote })(WatchList)
