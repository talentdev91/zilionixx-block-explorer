import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import useStyles from '../Authstyle'
import { useLocation, useHistory } from 'react-router-dom'
import { Grid, InputBase, RadioGroup, Checkbox, FormControlLabel, Radio } from '@material-ui/core'
import { AppState } from '../../../store/configureStore'
import { connect } from 'react-redux'
import { getOneWatchAddress, deleteWatchAddress, editWatchAddress } from '../../../store/actions/user'
import CustomDeleteModal from './CustomModal/CustomDeleteModal'
import Alert from '../../../components/Alert'

interface WatchListModifyProps {
  getOneWatchAddress: (username: string, address: string) => void
  deleteWatchAddress: (username: string, address: string) => void
  editWatchAddress: (
    username: string,
    address: string,
    watchAddressNote: string,
    notifyOption: string,
    trackERC20Option: boolean,
  ) => void
  watchAddressList: any
  user: any
  loading: any
  msg: string
  error: string
}

function WatchListModify({
  getOneWatchAddress,
  editWatchAddress,
  deleteWatchAddress,
  watchAddressList,
  user,
  loading,
  msg,
  error,
}: WatchListModifyProps) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const address = params.get('a')

  const [addressNote, setWatchAddressNote] = useState('')
  const [notifyOption, setNotification] = useState('1')
  const [trackERC20Option, setChecked] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const [openAlert, setOpenAlert] = useState(false)
  const [alertContent, setAlertContent] = useState('')
  const [alertType, setAlertType] = useState('')

  if (address === null) {
    history.push('/error')
  }

  const handleSave = () => {
    editWatchAddress(user.name, address, addressNote, notifyOption, trackERC20Option)
  }

  const handleReturn = () => {
    history.push('/myaddress')
  }

  const handleCloseAlert = () => {
    setOpenAlert(false)
  }
  const handleDeleteShow = () => {
    setOpenDelete(true)
  }

  const handleDelete = (username: any, address: any) => {
    deleteWatchAddress(username, address)
    setOpenDelete(false)
  }

  const handleDeleteClose = () => {
    setOpenDelete(false)
  }

  useEffect(() => {
    getOneWatchAddress(user.name, address)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  useEffect(() => {
    if (watchAddressList !== undefined) {
      setWatchAddressNote(watchAddressList.watchAddressNote)
      setNotification(watchAddressList.notifyOption)
      setChecked(watchAddressList.trackERC20Option)
    }
    if (error) {
      setAlertContent(error)
      setOpenAlert(true)
      setAlertType('error')
    } else if (msg) {
      console.log(msg)
      if (msg === 'edit') {
        setAlertContent(`Successfully Updated Address ${address} options`)
      }
      setOpenAlert(true)
      setAlertType('success')
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, msg, error])

  return (
    watchAddressList !== undefined && (
      <div>
        <div className={classes.contactForm}>Address Watch Options &nbsp;</div>
        <div className={clsx(classes.contactFormCon, classes.watchListForm)}>
          <Alert
            openAlert={openAlert}
            alertContent={alertContent}
            closeAlert={handleCloseAlert}
            alertType={alertType}
          />
          <Grid container className={classes.watchListForm}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <span>Address</span>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              {watchAddressList.watchAddress}
            </Grid>
          </Grid>
          <Grid container className={classes.watchListForm}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <span>Description</span>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <InputBase
                placeholder="Optional"
                id="name"
                fullWidth
                value={addressNote}
                onChange={(event) => setWatchAddressNote(event.target.value)}
                className={classes.inputField}
              />
            </Grid>
          </Grid>
          <Grid container className={classes.watchListForm}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <span>Notification Settings</span>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
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
            </Grid>
          </Grid>
          <Grid container className={classes.watchListForm}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <span>Other Options</span>
            </Grid>
            <Grid item xs={12} sm={9} md={9} lg={9}>
              <Checkbox checked={trackERC20Option} onChange={() => setChecked(!trackERC20Option)} />
              <span>Also Track ERC-20 Token Transfers (click to Enable)</span>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.profileLastGrid}>
            <div>
              <span onClick={handleSave} className={classes.profileSelect}>
                Save Changes
              </span>
              <span onClick={handleReturn} className={classes.profileCancel}>
                Return
              </span>
            </div>
            <div>
              <span onClick={handleDeleteShow} className={classes.profileDelete}>
                <i className="far fa-trash-alt"></i>&nbsp;Remove
              </span>
            </div>
          </Grid>
        </div>
        <CustomDeleteModal
          handleClick={handleDelete}
          handleClose={handleDeleteClose}
          open={openDelete}
          modalTitle="Are you sure you wish to unlink the address"
          address={address}
        />
      </div>
    )
  )
}
const mapStateToProps = (state: AppState) => ({
  watchAddressList: state.user.watchAddress,
  user: state.auth.user,
  loading: state.user.watchAddressLoading,
  msg: state.user.watchAddressMsg,
  error: state.user.watchAddressError,
})
export default connect(mapStateToProps, { getOneWatchAddress, deleteWatchAddress, editWatchAddress })(WatchListModify)
