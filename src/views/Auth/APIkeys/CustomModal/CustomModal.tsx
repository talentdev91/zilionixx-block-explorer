import React, { useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase } from '@material-ui/core'
import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

function CustomModal({ ...props }: any) {
  const { handleSubmit, handleClose, open, modalTitle, modalLabel1, user, modalValue1 } = props
  const classes = useStyles()
  const [txnHash, setTxnHash] = React.useState('')

  useEffect(() => {
    setTxnHash(null)
    setTxnHash(null)
  }, [open])

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
      <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
      <DialogContent>
        <div className={classes.modalSubtitle}>{modalLabel1}</div>
        {!modalValue1 ? (
          <InputBase
            placeholder="Optional"
            id="name"
            fullWidth
            onChange={(event) => setTxnHash(event.currentTarget.value as string)}
            className={classes.inputField}
          />
        ) : (
          <InputBase id="name" fullWidth defaultValue={modalValue1} className={classes.inputField} readOnly />
        )}
        {/* {error && <div className={classes.errorMessage}>Please enter a valid Txn hash</div>} */}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} className={classes.cancelBtn}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} className={classes.continueBtn}>
          Continue
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = (state: AppState) => ({
  user: state.auth.user,
})
export default connect(mapStateToProps)(CustomModal)
