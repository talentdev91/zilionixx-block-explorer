import React from 'react'
import { Typography, Box } from '@material-ui/core'
import { StyledTooltip } from '../TableStyle'

interface TableInfoProps {
  erc20TokenTransactoins: any
}

const TableInfo = ({ erc20TokenTransactoins }: TableInfoProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography style={{ color: '#6c757e', fontSize: '14px' }}>
        <StyledTooltip placement="top" title="Oldest First" arrow>
          <span>
            <i className="fas fa-sort-amount-down-alt"></i>
          </span>
        </StyledTooltip>
        &nbsp; Latest {erc20TokenTransactoins.length} ERC-20 Token Transfer Events from total
      </Typography>
    </Box>
  )
}

export default TableInfo
