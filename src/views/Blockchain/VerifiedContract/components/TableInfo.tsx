import React from 'react'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { Typography, Box } from '@material-ui/core'

export const useStyles = makeStyles((theme: Theme) => ({
  verifyCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))
const TableInfo = () => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="column">
      <Typography className={classes.verifyCount}>
        Showing the last 500 verified contracts source code
      </Typography>
    </Box>
  )
}

export default TableInfo
