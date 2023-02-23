import React from 'react'
import { connect } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

import { AppState } from '../../../../store/configureStore'
import { getEpochDetails } from '../../../../store/actions/epoch'
import useStyles from './epochstyle'

import { StyledDarkTooltip } from '../../../../Styles'

interface EpochDetailProps {
  getEpochDetails: (epochNumber: any) => void
  epoch: any
  loading: any
  epochNumber: any
  lastEpochNumber: any
}

function Overview({ getEpochDetails, epoch, loading, epochNumber, lastEpochNumber }: EpochDetailProps) {
  React.useEffect(() => {
    getEpochDetails(epochNumber)
  }, [epochNumber, getEpochDetails])
  const classes = useStyles()
  const epochEndTime = () => {
    const date = new Date(epoch.endTime * 1000)
    const year = date.getUTCFullYear()
    const month = date.toLocaleString('default', { month: 'short' })
    const day = date.getUTCDate()
    let hours = date.getHours()
    const minutes = date.getMinutes()
    const ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12 // the hour '0' should be '12'
    const minuteStr = minutes < 10 ? '0' + minutes : minutes
    const seconds = date.getUTCSeconds()
    const timeformat = `${month}-${day}-${year} ${hours}:${minuteStr}:${seconds} ${ampm} +UTC`

    return timeformat
  }

  return (
    <List className={classes.root}>
      <ListItem className={classes.listItem} alignItems="flex-start">
        <Grid container>
          <Grid item md={3} sm={3} xs={12}>
            &nbsp; Epoch:
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.blockno}>
            {epoch.epoch}
            <StyledDarkTooltip title="View previous block" placement="top">
              <Link to={epoch.epoch > 1 ? `/epoch/${epoch.epoch - 1}` : `/epoch/1`} className={classes.leftarrow}>
                <i className="fas fa-chevron-left" style={{ width: '13px', height: '13px' }}></i>
              </Link>
            </StyledDarkTooltip>
            <StyledDarkTooltip title="View next block" placement="top">
              <Link
                to={epoch.epoch < lastEpochNumber ? `/epoch/${epoch.epoch + 1}` : `/epoch/${lastEpochNumber}`}
                className={classes.rightarrow}
              >
                <i className="fas fa-chevron-right" style={{ width: '13px', height: '13px' }}></i>
              </Link>
            </StyledDarkTooltip>
          </Grid>
        </Grid>
      </ListItem>
      <Divider className={classes.dividers} />
      <ListItem className={classes.listItem} alignItems="flex-start">
        <Grid container>
          <Grid item md={3} sm={3} xs={12}>
            End Time:
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.items}>
            <i className="far fa-clock"></i>
            &nbsp;
            {epochEndTime()}
          </Grid>
        </Grid>
      </ListItem>
      <Divider className={classes.dividers} />

      <ListItem className={classes.listItem} alignItems="flex-start">
        <Grid container>
          <Grid item md={3} sm={3} xs={12}>
            Total Base Reward Weight:
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.items}>
            {epoch.totalBaseRewardWeight / Math.pow(10, 18)} ZNX
          </Grid>
        </Grid>
      </ListItem>
      <Divider className={classes.dividers} />
      <ListItem className={classes.listItem} alignItems="flex-start">
        <Grid container>
          <Grid item md={3} sm={3} xs={12}>
            Total Fee:
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.items}>
            {epoch.epochFee / Math.pow(10, 18)} ZNX
          </Grid>
        </Grid>
      </ListItem>
      <Divider className={classes.dividers} />
      <ListItem className={classes.listItem} alignItems="flex-start">
        <Grid container>
          <Grid item md={3} sm={3} xs={12}>
            Total Tx Reward Weight:
          </Grid>
          <Grid item md={9} sm={9} xs={12} className={classes.items}>
            {epoch.totalTxRewardWeight / Math.pow(10, 18)} ZNX
          </Grid>
        </Grid>
      </ListItem>
    </List>
  )
}

const mapStateToProps = (state: AppState) => ({
  epoch: state.epoch.epoch,
  loading: state.block.loading,
  lastEpochNumber: state.epoch.lastEpochNumber,
})
export default connect(mapStateToProps, { getEpochDetails })(Overview)
