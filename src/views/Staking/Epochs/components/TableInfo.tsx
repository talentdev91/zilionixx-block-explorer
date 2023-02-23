import React from 'react'
import { Typography, Box } from '@material-ui/core'
import TableSpinner from '../../../../components/Spinner/TableSpinner'
import { Theme, makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => ({
  epochsCount: {
    color: theme.palette.primary.contrastText,
    fontSize: '.875rem',
  },
}))

const TableInfo = (totalEpochs: any, page: any, rowsPerPage: any, loading: boolean) => {
  const [from, setFrom] = React.useState(page * rowsPerPage + 1)
  const [to, setTo] = React.useState(page * rowsPerPage + rowsPerPage)
  const classes = useStyles()
  React.useEffect(() => {
    setFrom(page * rowsPerPage + 1)
    if (totalEpochs - (page + 1) * rowsPerPage < 0) {
      setTo(totalEpochs)
    } else {
      setTo(page * rowsPerPage + rowsPerPage)
    }
  }, [page, rowsPerPage, totalEpochs])

  return (
    <Box display="flex">
      {loading ? (<TableSpinner />) : ''}
      <Typography className={classes.epochsCount}>
        Showing {from} to {to} of {totalEpochs} epochs found
      </Typography>
    </Box>
  )
}

export default TableInfo
