import React from 'react'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'
import { Theme, makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => ({
  topTokenCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))

const TableInfo = (totalTokens: any, page: any, rowsPerPage: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <Typography className={classes.topTokenCount}>
        Showing
        {totalTokens > (page + 1) * rowsPerPage ? (
          <strong>&nbsp; {page * rowsPerPage + 1 + ` to ` + (page + 1) * rowsPerPage}&nbsp;</strong>
        ) : (
          <strong>&nbsp;{page * rowsPerPage + 1 + ` to ` + totalTokens} &nbsp;</strong>
        )}
        Token Contracts (From a total of {totalTokens} Token Contracts)
      </Typography>
    </Box>
  )
}

export default TableInfo
