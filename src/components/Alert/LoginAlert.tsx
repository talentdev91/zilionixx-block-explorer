import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

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
                color: '#73231d!important',
            }
        },
    }),
);

interface AlertProps {
    openAlert: boolean
}

export default function Alerts({ openAlert }: AlertProps) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Collapse in={openAlert}>
                <Alert
                    severity="error"
                >
                    Invalid login information.
                </Alert>
            </Collapse>
        </div>
    );
}
