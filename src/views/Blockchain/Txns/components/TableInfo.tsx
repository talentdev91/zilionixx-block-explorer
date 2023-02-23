import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TableSpinner from '../../../../components/Spinner/TableSpinner'

export const useStyles = makeStyles((theme: Theme) => ({
  txnCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '80%',
  },
}))

const TableInfo = (totalTxnsCnt: any, blocknumber: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? <TableSpinner /> : ''}
      {totalTxnsCnt >= 100000 ? (
        <Box>
          <Typography className={classes.txnCount}>More than {'>'} 1000000 transactions found</Typography>
          <Typography className={classes.smallText}>(Showing the last 100k records)</Typography>
        </Box>
      ) : (
        <Typography className={classes.txnCount}>A total of {totalTxnsCnt} transactions found</Typography>
      )}
    </Box>
  )
}

export default TableInfo
