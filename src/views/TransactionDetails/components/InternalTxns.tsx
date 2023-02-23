import React from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
// material-ui components
import { Box } from '@material-ui/core'
// components
import InternalTable from './Table'
import { useStyles, StyledTextOverflow, StyledLink } from '../Style'

const columns = ['Type Trace Address', 'From', '', 'To', 'Value', 'Gas Limit']

interface InternalTxnsProps {
  transaction: any
}

function InternalTxns({ transaction }: InternalTxnsProps) {
  const classes = useStyles()

  return (
    <Box>
      <Box className={classes.logsTitle}>
        <i className={classnames(classes.styleIcon, 'fas fa-puzzle-piece')} />
        &nbsp;The contract call <b>&nbsp;From&nbsp;</b>
        <StyledLink to="/txs">
          <StyledTextOverflow> {transaction.from} </StyledTextOverflow>
        </StyledLink>
        <b>&nbsp;To&nbsp;</b>
        <StyledLink to="/txs">
          <StyledTextOverflow> {transaction.to} </StyledTextOverflow>
        </StyledLink>
        produced 2 Internal Transactions produced 2 Internal Transactions produced 2 Internal Transactions
      </Box>
      <InternalTable columns={columns} />
    </Box>
  )
}
const mapStateToProps = (state: AppState) => ({
  transaction: state.transaction.transaction,
})

export default connect(mapStateToProps)(InternalTxns)
