import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'
import IconButton from '@material-ui/core/IconButton'
import Collapse from '@material-ui/core/Collapse'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
)

interface AlertProps {
  children?: React.ReactNode
  type: string
  open: boolean
  updateOpen: any
}
export const CustomAlert: React.FC<AlertProps> = ({ children, type, open, updateOpen }) => {
  const classes = useStyles()
  const handleChangeOpen = () => {
    updateOpen(false)
  }
  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          severity={type}
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={handleChangeOpen}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {children}
        </Alert>
      </Collapse>
    </div>
  )
}
