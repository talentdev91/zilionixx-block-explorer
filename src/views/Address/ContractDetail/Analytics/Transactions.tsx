import React from 'react'
import { StyledPageContainer, StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Divider from '@material-ui/core/Divider'
import useStyles from './AnalyticStyle'
import Transaction from './Charts/Transaction'
import { tsToDate } from '../../../../common/utils'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

interface Props {
  address: any
  txnHistoryTotal: any
}

const TransactionsAnalytics: React.FC<Props> = ({ address, txnHistoryTotal }) => {
  const classes = useStyles()
  return (
    <StyledPageContainer>
      <StyledPagePager>
        <Card className={classes.root}>
          <div className={classes.znxtop}>
            <span>Time Series: Zilionixx Transactions</span>
            <span className={classes.znxtopright}>
              {txnHistoryTotal.length > 0 ? (
                <>
                  {tsToDate(txnHistoryTotal[0][0])} to {tsToDate(txnHistoryTotal[txnHistoryTotal.length - 1][0])}
                </>
              ) : (
                ''
              )}
            </span>
          </div>
          <Divider />
          <Transaction address={address} />
        </Card>
      </StyledPagePager>
    </StyledPageContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  txnHistoryTotal: state.address.txnHistoryTotal,
})

export default connect(mapStateToProps)(TransactionsAnalytics)
