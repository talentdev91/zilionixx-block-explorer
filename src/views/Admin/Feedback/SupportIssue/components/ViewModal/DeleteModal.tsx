import React from 'react'
import { connect } from 'react-redux'
//material-ui components
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import useStyles from './ModalStyle'
import { sendMessage } from '../../../../../../store/actions/admin'

interface SendModalProps {
  open: boolean
  handleSubmit: () => void
  handleClose: () => void
}

function SendModal({ open, handleClose, handleSubmit }: SendModalProps) {
  const classes = useStyles()
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title">Close Feedback</DialogTitle>
        <DialogContent>
          <p className={classes.modalSubtitle}>Are you sure you wish to Close the Feedback?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} className={classes.viewBtn} disableRipple>
            Close Feedback
          </Button>
          <Button onClick={handleClose} className={classes.sendBtn} disableRipple>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default connect(null, { sendMessage })(SendModal)
