import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { getLatestChainInfo } from '../../../../store/actions/block'
//material-ui
import { Grid, Divider, Typography } from '@material-ui/core'
//components
import Bluetool from './bluetooltip'
import { useStyles } from './style'
import Spinner from '../../../../components/Spinner/Spinner'

interface BlockProps {
  getLatestChainInfo: VoidFunction
  latestChainInfo: any
  loading: boolean
}

function Block({ getLatestChainInfo, latestChainInfo, loading }: BlockProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getLatestChainInfo()
  }, [getLatestChainInfo])

  return (
    <div className={classes.secondPart}>
      <Divider className={classes.divid} />
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <>
          <Grid container alignItems="center">
            <Grid>
              <img src="/images/Home/HomeBanner/latest.svg" className={classes.img} alt="latest" />
            </Grid>

            <Grid>
              <Typography className={classes.text1}>LATEST BLOCK</Typography>

              <div style={{ display: 'flex' }}>
                <Bluetool title="The latest Block No">
                  <Link className={classes.link} to="/block">
                    {latestChainInfo.lastBlockNumber}
                  </Link>
                </Bluetool>

                <Bluetool title="Average Block Time(The latest 5000 blocks)" placement="right">
                  <Link
                    className={classes.link}
                    style={{ fontSize: '80%', marginLeft: '4px', alignSelf: 'center' }}
                    to="/chart/blocktime"
                  >
                    ({latestChainInfo.avgBlockTime}s)
                  </Link>
                </Bluetool>
              </div>
            </Grid>

            <Grid className={classes.chip}>
              <Typography className={classes.text1}>TRANSACTIONS</Typography>

              <div style={{ display: 'flex' }}>
                <Bluetool title="Total Transactions Counter(Update every 5 mins)" placement="left">
                  <Link className={classes.link} to="/txs/list">
                    {latestChainInfo.totalTxnsCnt >= 1000000
                      ? latestChainInfo.totalTxnsCnt / 1000000 + 'M'
                      : latestChainInfo.totalTxnsCnt}
                  </Link>
                </Bluetool>

                <Bluetool title="Transactions per Second">
                  <Typography className={classes.tpsText}>({latestChainInfo.tps} TPS)</Typography>
                </Bluetool>
              </div>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container alignItems="center">
            <Grid>
              <img src="/images/Home/HomeBanner/validator.svg" className={classes.img} alt="validator" />
            </Grid>

            <Grid>
              <Typography className={classes.text1}>ACTIVE VALIDATOR</Typography>

              <div style={{ display: 'flex' }}>
                <Bluetool title="Total Active Validators">
                  <Link className={classes.link} to="/validators">
                    {latestChainInfo.activeValidatorCnt}
                  </Link>
                </Bluetool>
              </div>
            </Grid>

            <Grid className={classes.chip}>
              <Typography className={classes.text1}>CURRENT EPOCH</Typography>

              <div style={{ display: 'flex' }}>
                <Bluetool title="View All Epochs">
                  <Link className={classes.link} to="/epochs">
                    {latestChainInfo.lastEpochNumber}
                  </Link>
                </Bluetool>
              </div>
            </Grid>
          </Grid>
        </>
      )}
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  latestChainInfo: state.block.latestChainInfo,
  loading: state.block.loading,
})

export default connect(mapStateToProps, { getLatestChainInfo })(Block)
