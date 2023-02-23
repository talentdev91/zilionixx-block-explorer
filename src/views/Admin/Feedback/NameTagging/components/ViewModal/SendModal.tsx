import React, { useState } from 'react'
import { connect } from 'react-redux'
//material-ui components
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import {
    Button, InputBase, TextareaAutosize
} from '@material-ui/core'
import useStyles from './ModalStyle'
import { sendMessage } from '../../../../../../store/actions/admin'

interface SendModalProps {
    id: string
    email: string
    sendMessage: (id: string, message: string) => void
}

function SendModal({ id, email, sendMessage }: SendModalProps) {
    const classes = useStyles()

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleSubmit = async () => {
        if (!message) {
            setError(true)
        } else {
            sendMessage(id, message)
        }
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpen} className={classes.sendBtn} disableRipple>
                <span>Send</span>
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
                <DialogTitle id="form-dialog-title">SEND MESSAGE</DialogTitle>
                <DialogContent>
                    <div className={classes.modalSubtitle}>Email :</div>
                    <InputBase
                        id="name"
                        fullWidth
                        value={email}
                        readOnly
                        className={classes.inputField}
                    />
                    <div className={classes.modalSubtitle}>Message :</div>
                    <TextareaAutosize
                        className={classes.textField}
                        minRows={5}
                        maxRows={5}
                        onChange={(event) => setMessage(event.currentTarget.value as string)}
                    />
                    {
                        error &&
                        <div className={classes.errorMessage}>
                            Please enter message
                        </div>
                    }
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} className={classes.viewBtn} disableRipple>
                        Send
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
