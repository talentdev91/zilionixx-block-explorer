import React from 'react'
import { Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useStyles } from '../../../styles'

const TableInfo = (totalAccounts: any) => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="column">
      <span className={classes.price}>
        Exchange Data Source:
        <Link to="#" style={{ textDecoration: 'none', color: '#3498db' }}>
          <span>Coingecko</span>
        </Link>
      </span>
    </Box>
  )
}

export default TableInfo
