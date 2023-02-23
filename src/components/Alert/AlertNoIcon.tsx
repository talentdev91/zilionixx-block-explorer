import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

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
                color: `${localStorage.appTheme === 'darkTheme' ? '#de4437' : '#73231d'}`,
                backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(222,68,55,.1)' : '#f8dad7'}`,
            },
            '& .MuiAlert-standardSuccess': {
                backgroundColor: `${localStorage.appTheme === 'darkTheme' ? 'rgba(0,201,167,.1)' : '#ccf4ed'}`,
                color: `${localStorage.appTheme === 'darkTheme' ? '#00c9a7' : '#006957'}`,
            },
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
                    severity={alertType === "error" ? "error" : "success"}
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={handleClose}>
                        </IconButton>
                    }
                >
                <i className="fas fa-check-circle"></i>&nbsp;
                <strong>Error:</strong> {alertContent}
                </Alert>
            </Collapse>
        </div>
    );
}
