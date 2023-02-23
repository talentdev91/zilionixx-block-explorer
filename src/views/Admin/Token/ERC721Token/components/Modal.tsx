import React from 'react'
//material-ui components
import { Grid, Box, Typography, Divider } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'
import { BootstrapInput, useStyles, StyledPendingSearchBtn } from '../TableStyle'

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'

export default function KeepMountedModal() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
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
                ERC-20Token Modal
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Address:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput className={classes.modalinput}> </BootstrapInput>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Name:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput className={classes.modalinput}> </BootstrapInput>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Symbol:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput className={classes.modalinput}> </BootstrapInput>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <Grid item xs={12}>
                <span className={classes.modaltext}>Type:</span>
              </Grid>
              <Grid item xs={12}>
                <BootstrapInput className={classes.modalinput}> </BootstrapInput>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.modalline}>
              <StyledPendingSearchBtn onClick={handleOpen}>
                <span className={classes.modalBtn}>Save</span>
              </StyledPendingSearchBtn>
              <StyledPendingSearchBtn onClick={handleOpen}>
                <span className={classes.modalBtn}>Cancel</span>
              </StyledPendingSearchBtn>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}
