import React, { useState } from 'react'
import useStyles from '../Authstyle'

import AbiTable from './AbiTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
import { connect } from 'react-redux'
import { createCustomAbi } from '../../../store/actions/user'
import CustomModal from './CustomModal/CustomModal'

interface CustomABIProps {
  createCustomAbi: (username: string, contractName: string, contractAddress: string, abi: string, page: any) => void
}

function WatchList({ createCustomAbi }: CustomABIProps) {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [modalLabel2, setModalLabel2] = useState('')
  const [modalLabel3, setModalLabel3] = useState('')
  const [open, setOpen] = useState(false)

  const handleSubmit = (username: any, contractName: any, contractAddress: any, abi: any) => {
    createCustomAbi(username, contractName, contractAddress, abi, 0)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addCustomABIs = () => {
    setModalTitle('Add a new Custom ABI');
    setModalLabel1('Name')
    setModalLabel2('Address')
    setModalLabel3('Custom ABI')
    setOpen(true)
  }

  return (
    <StyledPagePager>
      <div className={classes.contactForm}>
        <div className={classes.tableTop}>
          <div>
            My Custom ABIs
            <StyledDarkTooltip title="Create a new Custom ABI entry" arrow placement="top">
              <span className={classes.profileSelect} onClick={addCustomABIs}>
                <i className="fas fa-plus-square"></i>&nbsp;Add
              </span>
            </StyledDarkTooltip>
          </div>
          <SearchBtn placeholder="Search Contract Address" />
        </div>
      </div>
      <div className={classes.contactFormCon}>
        <AbiTable />
      </div>
      <CustomModal handleClick={handleSubmit} handleClose={handleClose} open={open} modalTitle={modalTitle} 
        modalLabel1={modalLabel1} modalLabel2={modalLabel2}  modalLabel3={modalLabel3}
        modalValue1={null} modalValue2={null} modalValue3={null} />
    </StyledPagePager>
  )
}

export default connect(null, { createCustomAbi })(WatchList)
