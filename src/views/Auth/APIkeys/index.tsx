import React, { useState, useEffect } from 'react'
import useStyles from '../Authstyle'

import TxnTable from './TxnTable'
import { StyledDarkTooltip, StyledPagePager } from '../../../Styles'
import SearchBtn from '../SearchBox/SearchBox'
import { connect } from 'react-redux'
import { createApiKey } from '../../../store/actions/user'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase } from '@material-ui/core'
import useModalStyles from './CustomModal/ModalStyle'
import { AppState } from '../../../store/configureStore'
import { useHistory } from 'react-router-dom'

interface TxnNoteProps {
  createApiKey: (username: string, apiKeyName: string) => void
  user: any
}

function WatchList({ createApiKey, user }: TxnNoteProps) {
  const classes = useStyles()
  const [modalTitle, setModalTitle] = useState('')
  const [modalLabel1, setModalLabel1] = useState('')
  const [open, setOpen] = useState(false)
  const history = useHistory()

  const classesModal = useModalStyles()
  const [apiKeyName, setApiKeyName] = React.useState('')

  const handleSubmit = () => {
    createApiKey(user.name, apiKeyName)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const addApiKey = () => {
    setModalTitle('Create a new API-KEY token')
    setModalLabel1('App Name:')
    setOpen(true)
  }

  const linkPaypal = () => {
    history.push('/api')
  }

  return (
    <div>
      <StyledPagePager>
        <div className={classes.contactForm}>
          <div className={classes.tableTop}>
            <div>
              My API Keys
              <StyledDarkTooltip title="Add a new transaction private note" arrow placement="top">
                <span className={classes.profileSelect} onClick={addApiKey}>
                  <i className="fas fa-plus-square"></i>&nbsp;Add
                </span>
              </StyledDarkTooltip>
            </div>
            <SearchBtn placeholder="Search Txn Private Note" />
          </div>
        </div>
        <div className={classes.contactFormCon}>
          <TxnTable/>
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classesModal.dialog}>
          <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
          <DialogContent>
            <div className={classesModal.modalSubtitle}>{modalLabel1}</div>
            <InputBase
              placeholder="Optional"
              id="name"
              fullWidth
              onChange={(event) => setApiKeyName(event.currentTarget.value as string)}
              className={classesModal.inputField}
              value={apiKeyName}
            />

            {/* {error && <div className={classesModal.errorMessage}>Please enter a valid Txn hash</div>} */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classesModal.cancelBtn}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} className={classesModal.continueBtn}>
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </StyledPagePager>
      <br />
      <StyledPagePager>
        <div className={classes.contactForm}>
          <div className={classes.tableTop}>
            <div>
              Current API Plan
            </div>
          </div>
        </div>
        <div className={classes.apiPlan}>
          <p>Current API Plan</p>
          <p>API plan</p>
          <p>FREE API plan</p>
          <p>API calls allow per second</p>
          <p>API plan</p>
          <span className={classes.profileSelect} onClick={linkPaypal}>
            Upgrade plan
          </span>
        </div>
      </StyledPagePager>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
})
export default connect(mapStateToProps, { createApiKey })(WatchList)
