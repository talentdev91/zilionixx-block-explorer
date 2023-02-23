import React from 'react'
import { Box, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import { Divider } from '@material-ui/core'
import useStyles from '../styles'

interface TabContentProps {
  children?: React.ReactNode
  title: string
}

export const TitlePaper: React.FC<TabContentProps> = (props) => {
  const classes = useStyles()
  const { children, title } = props

  return (
    <div>
      <CssBaseline />
      <Paper className={classes.tabPane} variant="outlined">
        <Box m={1} mb={0}>
          <Typography className={classes.mainTitle} variant="h6" style={{ textAlign: 'left' }}>
            {title}
          </Typography>
        </Box>
        <Divider />
        <Box pt={5} pl={2} pr={2} pb={4} style={{ textAlign: 'left' }}>
          {children}
        </Box>
      </Paper>
    </div>
  )
}
