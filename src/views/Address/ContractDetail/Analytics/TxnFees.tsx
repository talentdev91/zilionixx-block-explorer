import React from 'react'
import { StyledPageContainer, StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import useStyles from './AnalyticStyle'
import Txn from './Charts/Txn'
import { tsToDate } from '../../../../common/utils'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import clsx from 'clsx'

interface Props {
  address: any
  txnFeeUsed: any
  txnFeeSpent: any
}

const TxnFees: React.FC<Props> = ({ address, txnFeeUsed, txnFeeSpent }: Props) => {
  const classes = useStyles()

  const [totalFeeUsed, setTotalFeeUsed] = React.useState(0)
  const [totalFeeSpent, setTotalFeeSpent] = React.useState(0)

  React.useEffect(() => {
    var totalUsed = 0,
      totalSpent = 0
    if (txnFeeUsed.length > 0) {
      for (let i = 0; i < txnFeeUsed.length; i++) {
        totalUsed += txnFeeUsed[i][1]
      }
      setTotalFeeUsed(totalUsed)
    }

    if (txnFeeSpent.length > 0) {
      for (let i = 0; i < txnFeeSpent.length; i++) {
        totalSpent += txnFeeSpent[i][1]
      }
      setTotalFeeSpent(totalSpent)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [txnFeeUsed.length, txnFeeSpent.length])

  return (
    <StyledPageContainer>
      <StyledPagePager>
        <Card className={classes.root}>
          <div className={classes.znxtop}>
            <span>Time Series: ZNX Balance</span>
            <span className={classes.znxtopright}>
              {txnFeeUsed.length > 0 ? (
                <>
                  {tsToDate(txnFeeUsed[0][0])} to {tsToDate(txnFeeUsed[txnFeeUsed.length - 1][0])}
                </>
              ) : (
                ''
              )}
            </span>
          </div>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={clsx(classes.chartContent, classes.startContent)}>
                <p className={classes.znxfont1}>
                  <span className={classes.circle}>
                    <i className="fas fa-circle"></i>
                  </span>
                  <span>Total Fees Spent (As a Sender)</span>
                </p>
                <p className={classes.znxfont2}>
                  <span>{totalFeeSpent} ZNX</span>
                </p>
                <p className={classes.znxfont3}>
                  <span>USD 0.00 (Adjusted) | USD 0.00 (Current)</span>
                </p>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className={clsx(classes.chartContent, classes.endContent)}>
                <p className={classes.znxfont1}>
                  <span className={classes.circle}>
                    <i className="fas fa-circle"></i>
                  </span>
                  <span>Total Fees Used (As a recipient)</span>
                </p>
                <p className={classes.znxfont2}>
                  <span>{totalFeeUsed} ZNX</span>
                </p>
                <p className={classes.znxfont3}>
                  <span>USD 0.00 (Adjusted) | USD 0.00 (Current)</span>
                </p>
              </div>
            </Grid>
          </Grid>
          <Txn address={address} />
        </Card>
      </StyledPagePager>
    </StyledPageContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  txnFeeUsed: state.address.txnFeeUsed,
  txnFeeSpent: state.address.txnFeeSpent,
})

export default connect(mapStateToProps)(TxnFees)
