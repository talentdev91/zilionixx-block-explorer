import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (totalAccounts: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>{totalAccounts} used (Out of 1000 max quota)</Typography>
    </Box>
  )
}

export default TableInfo
