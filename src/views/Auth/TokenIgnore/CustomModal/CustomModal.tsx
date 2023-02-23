import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button, InputBase, TextareaAutosize } from '@material-ui/core'
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
        user,
        modalValue1,
        modalValue2,
    } = props;
    const classes = useStyles()
    const [token, setToken] = React.useState('')
    const [tokenNote, setTokenNote] = React.useState('')
    const [error, setError] = React.useState(false)
    const handleSubmit = async () => {
        if (!modalValue1) {
            if (!token) {
                setError(true)
            } else {
                handleClick(user.name, token, tokenNote)
            }
        } else {
            handleClick(user.name, modalValue1, tokenNote)
        }
    }
    useEffect(() => {
        setToken(null)
        setTokenNote(null)
        setError(false)
    }, [open])

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
            <DialogTitle id="form-dialog-title"> {modalTitle}</DialogTitle>
            <DialogContent>
                <div className={classes.modalSubtitle}>{modalLabel1}</div>
                {
                    !modalValue1 ?
                        (
                            <InputBase
                                placeholder="Please enter a valid Token Contract address"
                                id="name"
                                fullWidth
                                onChange={(event) => setToken(event.currentTarget.value as string)}
                                className={classes.inputField}
                            />
                        ) :
                        (
                            <InputBase
                                id="name"
                                fullWidth
                                defaultValue={modalValue1}
                                className={classes.inputField}
                                readOnly
                            />
                        )
                }
                {
                    error &&
                    <div className={classes.errorMessage}>
                        Please enter a valid Token
                    </div>
                }
                <div className={classes.modalSubtitle}>{modalLabel2}</div>
                <TextareaAutosize
                    className={classes.textField}
                    minRows={3}
                    maxRows={10}
                    required
                    defaultValue={modalValue2}
                    onChange={(event) => setTokenNote(event.currentTarget.value as string)}
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
    );
}

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
})
export default connect(mapStateToProps)(CustomModal)
