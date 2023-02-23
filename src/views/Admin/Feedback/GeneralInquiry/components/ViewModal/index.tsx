import React from 'react'
//material-ui components
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, TextareaAutosize } from '@material-ui/core'
import useStyles from './ModalStyle'

interface ViewModalProps {
  name: string
  email: string
  message: string
  response: string
}

export default function ViewModal({ name, email, message, response }: ViewModalProps) {
  const classes = useStyles()

  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <Button onClick={handleOpen} className={classes.viewBtn} disableRipple>
        <span>View</span>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
        <DialogTitle id="form-dialog-title">GENERAL INQUIRY</DialogTitle>
        <DialogContent>
          <div className={classes.modalSubtitle}>Name :</div>
          <InputBase
            placeholder="Enter a address"
            id="name"
            value={name}
            fullWidth
            readOnly
            className={classes.inputField}
          />
          <div className={classes.modalSubtitle}>Email :</div>
          <InputBase id="name" fullWidth value={email} readOnly className={classes.inputField} />
          <div className={classes.modalSubtitle}>Message :</div>
          <TextareaAutosize className={classes.textField} minRows={5} maxRows={5} value={message} readOnly />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.sendBtn} disableRipple>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
