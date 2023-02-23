import React from 'react'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
//material-ui
import { Grid, Divider } from '@material-ui/core'
import { getUserOverview } from '../../../../store/actions/user'

//components
import { useStyles } from '../Style'
interface OverviewProps {
  getUserOverview: (name: string) => void
  confirm: any
  user: any
  loading: boolean
  error: string
  name: string
  email: string
  addressWatchListAlertCnt: number
  txnNotesCnt: number
  addressTagsCnt: number
  emailLimitCnt: number
  totalBalance: number
  lastLogin: any
  isAuthenticated: boolean
}

function Overview({
  getUserOverview,
  confirm,
  user,
  loading,
  error,
  name,
  email,
  addressWatchListAlertCnt,
  txnNotesCnt,
  addressTagsCnt,
  totalBalance,
  emailLimitCnt,
  lastLogin,
  isAuthenticated,
}: OverviewProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getUserOverview(user.name)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.name, isAuthenticated])

  return !loading ? (
    <Grid container>
      <Grid item className={classes.overviewHeadtxt}>
        Below are the username, email and overview information for your account.
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Your Username:
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        {name}
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Your Email Address :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        <span>{email}</span>
        <span className={classes.overviewIcon}>
          <i className="fas fa-pencil-alt"></i>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Address Watch List :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        <span>{addressWatchListAlertCnt} Address Alert(s)</span>
        <span className={classes.overviewIcon}>
          <i className="fas fa-search-plus"></i>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Transaction Notes :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        <span>{txnNotesCnt} out of 1000 available limit</span>
        <span className={classes.overviewIcon}>
          <i className="fas fa-search-plus"></i>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Address Tags :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        <span>{addressTagsCnt} out of 500 available limit</span>
        <span className={classes.overviewIcon}>
          <i className="fas fa-search-plus"></i>
        </span>
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Email Notification Limit :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        {emailLimitCnt} emails sent out 200 daily limit available
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.gridStyle}>
        Total ZNX Balance :
      </Grid>
      <Grid item xs={12} sm={8} className={classes.gridStyle}>
        {totalBalance} ZNX @ ($0.00)
      </Grid>
      <Grid item xs={12}>
        <Divider style={{ color: 'black' }} />
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4} className={classes.gridStyle}>
          Last Login :
        </Grid>
        <Grid item xs={12} sm={8} className={classes.gridStyle}>
          {lastLogin}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div></div>
  )
}
const mapStateToProps = (state: AppState) => ({
  confirm: state.auth.confirm,
  user: state.auth.user,
  loading: state.user.loadingOverview,
  error: state.user.overviewError,
  name: state.user.name,
  email: state.user.email,
  addressWatchListAlertCnt: state.user.addressWatchListAlertCnt,
  txnNotesCnt: state.user.txnNotesCnt,
  addressTagsCnt: state.user.addressTagsCnt,
  emailLimitCnt: state.user.emailLimitCnt,
  totalBalance: state.user.totalBalance,
  lastLogin: state.user.lastLogin,
  isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, { getUserOverview })(Overview)
