import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TableSpinner from '../../../../../components/Spinner/TableSpinner'

export const useStyles = makeStyles((theme: Theme) => ({
  tokenCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  },
  // price: {
  //   color: `${localStorage.appTheme === 'darkTheme' ? '#e5ecf3' : '#8c98a4'}`,
  //   fontSize: 11.2,
  //   fontWeight: 400,
  // },
}))

const TableInfo = (transferCnt: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? <TableSpinner /> : ''}
      <div>
        <Typography className={classes.tokenCount}>A total of {transferCnt} transactions found</Typography>
        {/* <Typography className={classes.smallText}>(Showing the last 100k records)</Typography> */}
      </div>
    </Box>
  )
}

export default TableInfo
