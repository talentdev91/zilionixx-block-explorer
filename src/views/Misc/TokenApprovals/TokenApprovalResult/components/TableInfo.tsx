import React from 'react'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (count: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: `${localStorage.appTheme === 'darkTheme' ? '#fff' : '#6c757e'}`, fontSize: '14px' }}>
        Showing {count} Token Contracts (From a total of {count} Token Contracts)
      </Typography>
    </Box>
  )
}

export default TableInfo
