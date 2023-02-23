import React from 'react'
import { bigNumberFormat, numberFormat } from '../../../../common/utils'
import { Typography, Box } from '@material-ui/core'

const TableInfo = (totalAccounts: any, totalBalance: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
        A total of {numberFormat(totalAccounts)} accounts found ({bigNumberFormat(totalBalance)} ZNX)
      </Typography>
      <Typography style={{ color: '#77838f', fontSize: '12px' }}>
        (Showing the last 10,000 top accounts only)
      </Typography>
    </Box>
  )
}

export default TableInfo
