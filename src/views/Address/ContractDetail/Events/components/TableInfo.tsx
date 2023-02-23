import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { StyledTooltip, StyledLink } from '../TableStyle'
const TableInfo = (count: any) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
        <StyledTooltip placement="top" title="Oldest First" arrow>
          <span>
            <i className="fas fa-sort-amount-down-alt"></i>
          </span>
        </StyledTooltip>
        &nbsp;Latest {count} Contract Events
      </Typography>
      <Typography style={{ color: '#77838f', fontSize: '80%' }}>
        Tip: <StyledLink to="#">Logs</StyledLink> are used by developers/external UI providers for keeping track of
        contract actions and for auditing
      </Typography>
    </Box>
  )
}

export default TableInfo
