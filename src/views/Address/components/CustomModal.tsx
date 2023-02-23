import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, TextareaAutosize } from '@material-ui/core'
import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'

function CustomModal({ ...props }: any) {
    const {
        handleClose,
        handleClick,
        open,
        user,
        modalValue1,
        modalValue2,
        modalType,
    } = props;
    const classes = useStyles()
    const [nameTag, setNameTag] = React.useState('')
    const [privateNote, setPrivateNote] = React.useState('')
    const handleSubmit = async () => {
        handleClick(user.name, nameTag, privateNote, modalType)
    }
    useEffect(() => {
        setNameTag(modalValue1)
        setPrivateNote(modalValue2)
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open])
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
            <DialogTitle id="form-dialog-title">My Address - Private Name Tag or Note [View All]</DialogTitle>
            <DialogContent>
                <div className={classes.modalSubtitle}>My Name Tag:</div>
                <InputBase
                    id="name"
                    fullWidth
                    defaultValue={nameTag}
                    className={classes.inputField}
                    onChange={(event) => setNameTag(event.currentTarget.value as string)}
                />
                <span className={classes.smallTitle}>
                    Private Name Tags (up to 35 characters) can be used for easy identification of addresses
                </span>
                <div className={classes.modalSubtitle}>Private Note :</div>
                <TextareaAutosize
                    className={classes.textField}
                    minRows={10}
                    maxRows={10}
                    required
                    defaultValue={privateNote}
                    onChange={(event) => setPrivateNote(event.currentTarget.value as string)}
                />
                <span className={classes.smallTitle}>
                    A private note (up to 500 characters) can be attached to this address.
                    <br />
                    Please DO NOT store any passwords or private keys here.
                </span>
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
    );
}

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
})
export default connect(mapStateToProps)(CustomModal)
