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
    const [txnHash, setTxnHash] = React.useState('')
    const [txnNote, setTxnNote] = React.useState('')
    const [error, setError] = React.useState(false)
    const handleSubmit = async () => {
        if (!modalValue1) {
            if (!txnHash) {
                setError(true)
            } else {
                handleClick(user.name, txnHash, txnNote)
            }
        } else {
            handleClick(user.name, modalValue1, txnNote)
        }
    }
    useEffect(() => {
        setTxnHash(null)
        setTxnHash(null)
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
                                placeholder="Enter a Txn hash"
                                id="name"
                                fullWidth
                                onChange={(event) => setTxnHash(event.currentTarget.value as string)}
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
                        Please enter a valid Txn hash
                    </div>
                }
                <div className={classes.modalSubtitle}>{modalLabel2}</div>
                <TextareaAutosize
                    className={classes.textField}
                    minRows={2}
                    maxRows={10}
                    required
                    defaultValue={modalValue2}
                    onChange={(event) => setTxnNote(event.currentTarget.value as string)}
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
