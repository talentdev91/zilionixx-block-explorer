import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TableSpinner from '../../../../components/Spinner/TableSpinner'

export const useStyles = makeStyles((theme: Theme) => ({
  pendingCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
}))

const TableInfo = (totalAccounts: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <Typography className={classes.pendingCount}>
        A total of {totalAccounts} pending txns found
      </Typography>
    </Box>
  )
}

export default TableInfo
