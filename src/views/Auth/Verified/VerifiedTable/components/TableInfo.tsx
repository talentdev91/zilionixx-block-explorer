import React from 'react'
import { Typography, Box } from '@material-ui/core'

const VerifiedInfo = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>0 used (Out of 1000 max quota)</Typography>
    </Box>
  )
}

export default VerifiedInfo
