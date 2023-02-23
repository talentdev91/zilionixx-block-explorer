import React from 'react'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'
import { Theme, makeStyles } from '@material-ui/core/styles'
export const useStyles = makeStyles((theme: Theme) => ({
  trackerCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '70%',
  }
}))
const TableInfo = (totalERCToken: any, loading: boolean) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <Typography className={classes.trackerCount}>
        A total of {totalERCToken} ERC-721 Token Contracts found
      </Typography>
    </Box>
  )
}

export default TableInfo
