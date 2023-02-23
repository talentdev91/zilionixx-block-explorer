import React from 'react'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'
import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  contractCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#c0d3df!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))
const TableInfo = (totalCounts: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <div>
        <Typography className={classes.contractCount}>
          A total of {totalCounts} internal transactions found
        </Typography>
        <Typography className={classes.smallText}>(Showing the last 10k records)</Typography>
      </div>
    </Box>
  )
}

export default TableInfo
