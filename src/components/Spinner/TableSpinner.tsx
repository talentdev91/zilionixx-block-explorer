import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ReactLoading from "react-loading";
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
        spinner: {
            '& div': {
                background: `${theme.palette.info.main} !important`
            },
            width: '20px!important',
            height: '0px!important',
            marginRight: '10px',
        }
    }),
)

export default function Spinner(props: any) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <ReactLoading type='spinningBubbles' color="#3498db" className={classes.spinner} />
        </div>
    )
}