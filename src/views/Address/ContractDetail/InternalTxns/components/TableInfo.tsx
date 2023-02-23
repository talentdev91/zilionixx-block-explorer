import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
//material-ui
import { Typography, Box } from '@material-ui/core'
//components
import { StyledTooltip } from '../TableStyle'
import { useStyles } from '../TableStyle'

interface TableInfoProps {
  internalTransactions: any
  internalTransactionsCount: any
}

const TableInfo = ({ internalTransactions, internalTransactionsCount }: TableInfoProps) => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="column">
      <Typography className={classes.tableInfo}>
        <StyledTooltip placement="top" title="Oldest First" arrow>
          <span>
            <i className="fas fa-sort-amount-down-alt"></i>
          </span>
        </StyledTooltip>
        &nbsp;Latest {internalTransactions.length} from a total of {internalTransactionsCount} transactions
      </Typography>
    </Box>
  )
}

const mapStateToProps = (state: AppState) => ({
  internalTransactions: state.address.internalTransactions,
  internalTransactionsCount: state.address.internalTransactionsCount,
})

export default connect(mapStateToProps)(TableInfo)
