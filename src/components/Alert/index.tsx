import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            margin: '10px 0px',
            '& .MuiAlert-icon': {
                display: 'none'
            },
            '& .MuiAlert-standardError': {
                color: '#de4437!important',
            }
        },
    }),
);

interface AlertProps {
    openAlert: boolean
    alertContent: string
    alertType: string
    closeAlert: () => void
}

export default function Alerts({ openAlert, alertContent, alertType, closeAlert }: AlertProps) {
    const classes = useStyles();
    const handleClose = () => {
        closeAlert()
    }
    return (
        <div className={classes.root}>
            <Collapse in={openAlert}>
                <Alert
                    severity={alertType === "error" ? "error" : "info"}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                >
                    <strong>Status:</strong> {alertContent}
                </Alert>
            </Collapse>
        </div>
    );
}
