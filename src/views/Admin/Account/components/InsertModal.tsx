import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

//material-ui components
import {
  Grid,
  Box,
  Typography,
  Divider,
} from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import { BootstrapInput, useStyles, StyledPendingSearchBtn } from '../TableStyle'
import { updateAddress } from '../../../../store/actions/address'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

export default function KeepMountedModal() {
  const classes = useStyles()
  const dispatch = useDispatch()

  const [address, setAddress] = useState('')
  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [addressType, setType] = useState('')

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = {
      address,
      name,
      balance,
      addressType,
    }
    dispatch(updateAddress(data))

    setAddress('')
    setName('')
    setBalance('')
    setType('')
    setOpen(false)
  }

  return (
    <div>
      <StyledPendingSearchBtn onClick={handleOpen}>
        <span className={classes.addBtn}>
          <AddCircleOutlineIcon />
          Add
        </span>
      </StyledPendingSearchBtn>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={classes.modal}>
          <Grid container>
            <Grid item xs={12}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Account Modal
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Address:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                  className={classes.modalinput}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Name:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  className={classes.modalinput}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Balance:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput
                  value={balance}
                  onChange={(e) => {
                    setBalance(e.target.value)
                  }}
                  className={classes.modalinput}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Type:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput
                  value={addressType}
                  onChange={(e) => {
                    setType(e.target.value)
                  }}
                  className={classes.modalinput}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <StyledPendingSearchBtn onClick={handleSubmit}>
                <span className={classes.modalBtn}>Save</span>
              </StyledPendingSearchBtn>
              <StyledPendingSearchBtn onClick={handleClose}>
                <span className={classes.modalBtn}>Cancel</span>
              </StyledPendingSearchBtn>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
