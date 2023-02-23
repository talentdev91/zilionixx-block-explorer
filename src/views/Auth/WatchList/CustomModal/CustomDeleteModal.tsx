import React from 'react';
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import { Button } from '@material-ui/core'
import useStyles from './ModalStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

function CustomDeleteModal({ ...props }: any) {
    const {
        handleClose,
        handleClick,
        address,
        open,
        user,
        modalTitle,
    } = props;
    const classes = useStyles()
    const handleSubmit = async () => {
        handleClick(user.name, address)
    }

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={classes.dialog}>
            <DialogTitle id="form-dialog-title">Confirmation Required</DialogTitle>
            <DialogContent>
                <p className={classes.modalSubtitle}>{modalTitle}</p>
                {address}
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
    );
}

const mapStateToProps = (state: AppState) => ({
    user: state.auth.user,
})
export default connect(mapStateToProps)(CustomDeleteModal)
