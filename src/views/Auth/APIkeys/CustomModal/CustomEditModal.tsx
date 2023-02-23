import React, { useEffect } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, TextareaAutosize } from '@material-ui/core'
import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

function CustomModal({ ...props }: any) {
  const { handleClose, handleClick, open, user, modalTitle, modalValue1, modalValue2, modalValue3 } = props
  const classes = useStyles()
  const [address, setAddress] = React.useState('')
  const [nameTag, setNameTag] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleSubmit = async () => {
    if (!modalValue1) {
      if (!address) {
        setError(true)
      } else {
        handleClick(user.name, address, nameTag)
      }
    } else {
      handleClick(user.name, modalValue1, nameTag)
    }
  }
  useEffect(() => {
    setNameTag(modalValue2)
  }, [open])
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
      <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
      <DialogContent>
        <div className={classes.modalSubtitle}>Address :</div>
        {!modalValue1 ? (
          <InputBase
            placeholder="Enter a address"
            id="name"
            fullWidth
            onChange={(event) => setAddress(event.currentTarget.value as string)}
            className={classes.inputField}
          />
        ) : (
          <InputBase id="name" fullWidth defaultValue={modalValue1} className={classes.inputField} readOnly />
        )}
        {error && <div className={classes.errorMessage}>Please enter a valid address</div>}
        <div className={classes.modalSubtitle}>Name Tag :</div>
        <InputBase
          id="name"
          fullWidth
          defaultValue={nameTag}
          className={classes.inputField}
          onChange={(event) => setNameTag(event.currentTarget.value as string)}
        />
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
