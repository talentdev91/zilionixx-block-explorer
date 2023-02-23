import React from 'react'
import { Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import useStyles from '../styles'

interface CodeProps {
  children?: React.ReactNode
}

export const CodePaper: React.FC<CodeProps> = (props) => {
  const { children } = props
  const classes = useStyles()
  return (
    <Paper className={classes.paper} variant="outlined">
      <Box p={2}>{children}</Box>
    </Paper>
  )
}
