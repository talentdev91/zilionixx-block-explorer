import React from 'react'
import { numberFormat } from '../../../../common/utils'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'

import { Theme, makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => ({
  accountCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))

const TableInfo = (totalAccounts: any, totalBalance: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <div>
        <Typography className={classes.accountCount}>
          A total of {numberFormat(totalAccounts)} accounts found ({numberFormat(totalBalance)} ZNX)
        </Typography>
        <Typography className={classes.smallText}>
          (Showing the last 10,000 top accounts only)
        </Typography>
      </div>
    </Box>
  )
}

export default TableInfo
