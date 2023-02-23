import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TableSpinner from '../../../../../components/Spinner/TableSpinner'

export const useStyles = makeStyles((theme: Theme) => ({
  watchCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
}))

const TableInfo = (totalAccounts: any, loading: any) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <Typography className={classes.watchCount}>{totalAccounts} used (Out of 25 max quota)</Typography>
    </Box>
  )
}

export default TableInfo
