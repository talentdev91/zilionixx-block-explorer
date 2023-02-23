import React, { useEffect } from 'react'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, TextareaAutosize } from '@material-ui/core'

import Grid from '@material-ui/core/Grid'

import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

function CustomModal({ ...props }: any) {
  const {
    handleClose,
    handleClick,
    open,
    modalTitle,
    modalLabel1,
    modalLabel2,
    modalLabel3,
    user,
    modalValue1,
    modalValue2,
    modalValue3,
  } = props

  const classes = useStyles()
  const [name, setName] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [abi, setABI] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleSubmit = async () => {
    if (name == null || address == null || abi == null) {
      setError(true)
    } else {
      handleClick(user.name, name, address, abi)
    }
  }
  useEffect(() => {
    setName(modalValue1)
    setAddress(modalValue2)
    setABI(modalValue3)
    setError(false)
  }, [open, modalValue1, modalValue2, modalValue3])

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
      <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
      <DialogContent>
        <Grid container spacing={3} className={classes.dlgconent}>
          <Grid item xs={3}>
            <div className={classes.modalSubtitle}>{modalLabel1}</div>
          </Grid>
          <Grid item xs={9}>
            {!modalValue1 ? (
              <InputBase
                placeholder="e.g. Contract Name"
                fullWidth
                onChange={(event) => setName(event.currentTarget.value as string)}
                className={classes.inputField}
              />
            ) : (
              <InputBase
                id="name"
                fullWidth
                defaultValue={modalValue1}
                className={classes.inputField}
                onChange={(event) => setName(event.currentTarget.value as string)}
              />
            )}
            {error && <div className={classes.errorMessage}>Please enter name</div>}
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.dlgconent}>
          <Grid item xs={3}>
            <div className={classes.modalSubtitle}>{modalLabel2}</div>
          </Grid>
          <Grid item xs={9}>
            {!modalValue2 ? (
              <InputBase
                placeholder="0x..."
                fullWidth
                onChange={(event) => setAddress(event.currentTarget.value as string)}
                className={classes.inputField}
              />
            ) : (
              <InputBase
                id="address"
                fullWidth
                defaultValue={modalValue2}
                className={classes.inputField}
                onChange={(event) => setAddress(event.currentTarget.value as string)}
              />
            )}
            {error && <div className={classes.errorMessage}>Please enter contract address</div>}
          </Grid>
        </Grid>
        <Grid container spacing={3} className={classes.dlgconent}>
          <Grid item xs={3}>
            <div className={classes.modalSubtitle}>{modalLabel3}</div>
          </Grid>
          <Grid item xs={9}>
            {!modalValue3 ? (
              <TextareaAutosize
                placeholder="[{...}]"
                className={classes.textField}
                minRows={3}
                maxRows={10}
                onChange={(event) => setABI(event.currentTarget.value as string)}
              />
            ) : (
              <TextareaAutosize
                placeholder="[{...}]"
                className={classes.textField}
                minRows={3}
                maxRows={10}
                defaultValue={modalValue3}
                onChange={(event) => setABI(event.currentTarget.value as string)}
              />
            )}
            {error && <div className={classes.errorMessage}>Please enter custom ABI</div>}
          </Grid>
        </Grid>
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
