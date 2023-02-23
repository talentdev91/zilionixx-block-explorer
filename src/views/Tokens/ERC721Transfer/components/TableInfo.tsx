import React from 'react'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'
import { numberFormat } from '../../../../common/utils'

import { Theme, makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => ({
  transferCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))

const TableInfo = (totaltxns: any, rowsPerPage: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <div>
        <Typography className={classes.transferCount}>A total of {totaltxns} txns found</Typography>
        <Typography className={classes.smallText}>
          (Showing the last {numberFormat(10000)} records only)
        </Typography>
      </div>
    </Box>
  )
}

export default TableInfo
