import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (totalTokens: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
        Showing {totalTokens} Token Contracts (From a total of 10,633 Token Contracts)
      </Typography>
    </Box>
  )
}

export default TableInfo
