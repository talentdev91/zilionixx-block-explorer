import React from 'react'
import { numberFormat } from '../../../../../common/utils'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (totalCount: any, count: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
        A total of {numberFormat(totalCount)} accounts found ({count} Token)
      </Typography>
    </Box>
  )
}

export default TableInfo
