import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, Checkbox, Grid } from '@material-ui/core'
import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'

function CustomModal({ ...props }: any) {
  const { handleClose, handleClick, open, user, modalValue1, modalValue2, modalValue3, modalValue4, modalTitle } = props
  const classes = useStyles()
  const [watchAddress, setToken] = React.useState(modalValue1)
  const [watchAddressNote, setTokenNote] = React.useState(modalValue2)
  const [notifyOption, setNotification] = React.useState(modalValue3)
  const [trackERC20Option, setChecked] = React.useState(modalValue4)
  const handleSubmit = async () => {
    handleClick(user.name, watchAddress, watchAddressNote, notifyOption, trackERC20Option)
  }
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
      <DialogTitle id="form-dialog-title">
        <span className={classes.title}>{modalTitle}</span>
      </DialogTitle>
      <DialogContent>
        <Grid container className={classes.formItem}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <span>ZNX Address :</span>
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            {!watchAddress ? (
              <InputBase
                placeholder="Please enter a valid Token Contract address"
                id="name"
                fullWidth
                onChange={(event) => setToken(event.currentTarget.value as string)}
                className={classes.inputField}
              />
            ) : (
              <InputBase id="name" fullWidth defaultValue={watchAddress} className={classes.inputField} readOnly />
            )}
          </Grid>
        </Grid>
        <Grid container className={classes.formItem}>
          <Grid item xs={12} sm={3} md={3} lg={3}>
            <span>Description :</span>
          </Grid>
          <Grid item xs={12} sm={9} md={9} lg={9}>
            <InputBase
              placeholder="Optional"
              id="name"
              fullWidth
              defaultValue={watchAddressNote}
              onChange={(event) => setTokenNote(event.currentTarget.value as string)}
              className={classes.inputField}
            />
          </Grid>
        </Grid>
        <p>
          You can monitor and receive an alert when an address on your watch list receives an incoming ZNX Transaction.
        </p>
        <FormLabel component="legend" className={classes.modalSubtitle}>
          Please select your notifyOption method below :
        </FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={notifyOption}
          onChange={(event) => setNotification(event.currentTarget.value as string)}
        >
          <FormControlLabel value="1" control={<Radio />} label="No Notification" />
          <FormControlLabel value="2" control={<Radio />} label="Notify on Incoming & Outgoing Txns" />
          <FormControlLabel value="3" control={<Radio />} label="Notify on Incoming (Receive) Txns Only" />
          <FormControlLabel value="4" control={<Radio />} label="Notify on Outgoing (Sent) Txns Only" />
        </RadioGroup>
        <FormLabel component="legend" className={classes.modalSubtitle}>
          Other Options
        </FormLabel>
        <Checkbox checked={trackERC20Option} onChange={() => setChecked(!trackERC20Option)} />
        <span>Also Track ERC-20 Token Transfers (click to Enable)</span>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="secondary">
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
