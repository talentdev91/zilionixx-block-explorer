import React from 'react'
import { StyledPagePager } from '../../../../Styles'
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import useStyles from './AnalyticStyle'
import OverviewChart from './Charts/OverviewChart'
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

const Overview: React.FC<Props> = ({ address, loading, maxBalance, maxTime, minBalance, minTime, balanceHistory }) => {
  const classes = useStyles()
  return (
    <StyledPagePager>
      <Card className={classes.root}>
        <div className={classes.znxtop}>
          <span>Time Series: Token Contract Overview</span>
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
        <OverviewChart address={address} />
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

export default connect(mapStateToProps)(Overview)
