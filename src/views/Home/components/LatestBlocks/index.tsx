import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppState } from '../../../../store/configureStore'

// functions
import { getLatestTenBlocks } from '../../../../store/actions/block'
import { pastTime, duringTime } from '../../../../common/utils'

// material-ui
import { Paper, Typography, Divider, Grid, Box, Tooltip } from '@material-ui/core'
// components
import { useStyles, StyledRibbon } from '../style'
import Spinner from '../../../../components/Spinner/Spinner'
import { StyledEmptyRowBox } from '../../../../Styles'

interface LatestBlocksProps {
  getLatestTenBlocks: VoidFunction
  latestTenBlockReward: any
  intervalID: any
  latestBlocks: any
  loading: boolean
}

function LatestBlocks({
  getLatestTenBlocks,
  latestTenBlockReward,
  intervalID,
  latestBlocks,
  loading,
}: LatestBlocksProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getLatestTenBlocks()
  }, [getLatestTenBlocks])

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.backgroundPaper}>
        <div style={{ padding: '0.75rem' }}>
          <Typography className={classes.title}>Latest Blocks</Typography>
        </div>

        <Divider className={classes.dividerColor} />

        {loading ? (
          <div className={classes.spinner}>
            <Spinner />
          </div>
        ) : latestBlocks.length === 0 ? (
          <StyledEmptyRowBox>
            <Typography style={{ fontSize: '14px' }}>There is no block</Typography>
          </StyledEmptyRowBox>
        ) : (
          <>
            <div className={classes.paper}>
              {latestBlocks.map((row: any, index: any) => (
                <div className={classes.tableContainer} key={index}>
                  <Grid container style={{ padding: '10px 0' }}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                      <Grid container spacing={2}>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                          <Paper variant="outlined" className={classes.blockicon}>
                            <span className={classes.blockSpan}>Bk</span>
                          </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} style={{ textAlign: 'left' }}>
                          <div style={{ lineHeight: 1.5 }}>
                            <Link to={`/block/${row['blockNumber']}`} className={classes.link}>
                              {row['blockNumber']}
                            </Link>
                            <Typography variant="body2" className={classes.timeNotion}>
                              {pastTime(row['blockAge'])}
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <Box display="flex" justifyContent="space-between">
                        <Grid container>
                          <Grid item xs={12} sm={9} md={9} lg={9}>
                            <div>
                              <Typography
                                variant="body1"
                                style={{
                                  whiteSpace: 'nowrap',
                                  overflow: 'hidden',
                                  textOverflow: 'ellipsis',
                                  lineHeight: 1.5,
                                  width: '250px',
                                }}
                              >
                                Validated by&nbsp;
                                <Link to={`/address/${row['validateAccount']}`} className={classes.link}>
                                  {row['validateAccount']}
                                </Link>
                              </Typography>

                              <Box display="flex">
                                <Link to="#" className={classes.link}>
                                  {row['transactionCount']} txns
                                </Link>
                                &nbsp;
                                <Typography variant="body2" className={classes.timeNotion}>
                                  {duringTime(row['blockTme'])}
                                </Typography>
                              </Box>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={3} md={3} lg={3} style={{ textAlign: 'right' }}>
                            <Tooltip title="Block Reward" className={classes.tooltip}>
                              <StyledRibbon>{parseFloat(latestTenBlockReward[index].toFixed(6))} ZNX</StyledRibbon>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                  <Divider className={classes.dividerColor} />
                </div>
              ))}
            </div>
            <div className={classes.footer}>
              <Link className={classes.viewAllButton} to="/block">
                View all blocks
              </Link>
            </div>
          </>
        )}
      </Paper>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  latestBlocks: state.block.latestBlocks,
  intervalID: state.block.intervalID,
  loading: state.block.loadingLatestBlocks,
  latestTenBlockReward: state.block.latestTenBlockReward,
})

export default connect(mapStateToProps, { getLatestTenBlocks })(LatestBlocks)
