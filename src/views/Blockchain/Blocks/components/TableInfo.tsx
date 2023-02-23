import React from 'react'
import { numberWithCommas } from '../../../../common/utils'
import { Typography, Box } from '@material-ui/core'
import { Theme, makeStyles } from '@material-ui/core/styles'
import TableSpinner from '../../../../components/Spinner/TableSpinner'

export const useStyles = makeStyles((theme: Theme) => ({
  blockCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
  smallText: {
    color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5!important' : '#77838f!important'}`,
    fontSize: '80%',
  },
}))

const TableInfo = (totalAccounts: any, currentPageBlocks: any, rowsPerPage: any, loading: any) => {
  const classes = useStyles()
  return (
    <Box display="flex">
      {loading ? <TableSpinner /> : ''}
      <Typography className={classes.blockCount}>
        Block{' '}
        {currentPageBlocks.length === 0
          ? 0
          : currentPageBlocks.length === rowsPerPage
          ? currentPageBlocks[rowsPerPage - 1].number
          : currentPageBlocks[currentPageBlocks.length - 1].number}{' '}
        to {currentPageBlocks.length === 0 ? 0 : currentPageBlocks[0].number} (Total of{' '}
        {numberWithCommas(totalAccounts)} blocks)
        <br></br>
        {totalAccounts > 100000 && <span className={classes.smallText}>(Showing the last 100k records)</span>}
      </Typography>
    </Box>
  )
}

export default TableInfo
