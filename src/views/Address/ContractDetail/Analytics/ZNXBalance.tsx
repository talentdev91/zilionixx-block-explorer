import React from 'react'
import { StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import useStyles from './AnalyticStyle'
import Balance from './Charts/Balance'
import { tsToDate } from '../../../../common/utils'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import clsx from 'clsx'

interface Props {
  address: any
  loading: boolean
  maxBalance: number
  maxTime: number
  minBalance: number
  minTime: number
  balanceHistory: any
}

const ZNXBalance: React.FC<Props> = ({
  address,
  loading,
  maxBalance,
  maxTime,
  minBalance,
  minTime,
  balanceHistory,
}) => {
  const classes = useStyles()
  return (
    <StyledPagePager>
      <Card className={classes.root}>
        <div className={classes.znxtop}>
          <span>Time Series: ZNX Balance</span>
          <span className={classes.znxtopright}>
            {balanceHistory.length > 0 ? (
              <>
                {tsToDate(balanceHistory[0][0])} to {tsToDate(balanceHistory[balanceHistory.length - 1][0])}
              </>
            ) : (
              ''
            )}
          </span>
        </div>
        <Grid container style={{ marginBottom: '15px' }}>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className={clsx(classes.chartContent, classes.startContent)}>
              <p className={classes.znxfont1}>
                <span className={classes.circle}>
                  <i className="fas fa-circle"></i>
                </span>
                <span>ZNX Highest Balance</span>
              </p>
              <p className={classes.znxfont2}>
                <span>On {tsToDate(maxTime)}</span>
              </p>
              <p className={classes.znxfont3}>
                <span>{maxBalance} ZNX</span>
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className={clsx(classes.chartContent, classes.middleContent)}>
              <p className={classes.znxfont1}>
                <span className={classes.circle}>
                  <i className="fas fa-circle"></i>
                </span>
                <span>ZNX Lowest Balance</span>
              </p>
              <p className={classes.znxfont2}>
                <span>On On {tsToDate(minTime)}</span>
              </p>
              <p className={classes.znxfont3}>
                <span>{minBalance} ZNX</span>
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className={clsx(classes.chartContent, classes.middleContent)}>
              <p className={classes.znxfont1}>
                <span className={classes.rectangleIcon}>
                  <i className="fas fa-square"></i>
                </span>
                <span>USD Highest Value</span>
              </p>
              <p className={classes.znxfont2}>
                <span>On Mon 17, May 2021</span>
              </p>
              <p className={classes.znxfont3}>
                <span>USD 1.36</span>
              </p>
            </div>
          </Grid>
          <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className={clsx(classes.chartContent, classes.endContent)}>
              <p className={classes.znxfont1}>
                <span className={classes.rectangleIcon}>
                  <i className="fas fa-square"></i>
                </span>
                <span>USD Lowest Value</span>
              </p>
              <p className={classes.znxfont2}>
                <span>On Sun 29, Aug 2021</span>
              </p>
              <p className={classes.znxfont3}>
                <span>USD -1.42</span>
              </p>
            </div>
          </Grid>
        </Grid>
        <Balance address={address} />
      </Card>
    </StyledPagePager>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  maxBalance: state.address.maxBalance,
  maxTime: state.address.maxTime,
  minBalance: state.address.minBalance,
  minTime: state.address.minTime,
  balanceHistory: state.address.balanceHistory,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps)(ZNXBalance)
