import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import ReactLoading from "react-loading";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: 'center',
      marginTop: '10px',
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    spinner: {
      '& div': {
        background: `${theme.palette.info.main} !important`
      },
      width: '30px!important',
    }
  }),
)

export default function Spinner(props: any) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ReactLoading type='bars' color="#3498db" className={classes.spinner} />
    </div>
  )
}
