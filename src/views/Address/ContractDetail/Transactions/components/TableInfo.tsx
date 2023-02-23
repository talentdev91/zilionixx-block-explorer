import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import { Typography, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { StyledTooltip } from '../TableStyle'
import { useStyles } from '../TableStyle'

interface TableInfoProps {
  transactionCnt: any
}

const TableInfo = ({ transactionCnt }: TableInfoProps) => {
  const classes = useStyles()
  return (
    <Box display="flex" flexDirection="column">
      <Typography className={classes.tableInfo}>
        <StyledTooltip placement="top" title="Oldest First" arrow>
          <span>
            <i className="fas fa-sort-amount-down-alt"></i>
          </span>
        </StyledTooltip>
        &nbsp;Latest {transactionCnt >= 25 ? '25' : transactionCnt} from a total of
        <StyledTooltip placement="top" title="Click to view full list" arrow>
          <Link to="#" style={{ color: '#3498db', textDecoration: 'none' }}>
            <span>&nbsp; {transactionCnt}&nbsp; </span>
          </Link>
        </StyledTooltip>
        transactions
      </Typography>
    </Box>
  )
}

const mapStateToProps = (state: AppState) => ({
  transactionCnt: state.address.transactionCnt,
})

export default connect(mapStateToProps)(TableInfo)
