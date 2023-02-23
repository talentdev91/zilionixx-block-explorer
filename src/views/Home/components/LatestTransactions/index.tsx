import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'

//material-ui
import { Paper, Typography, Divider, Grid, Box, Tooltip } from '@material-ui/core'

//functions
import { getLatestTransactions } from '../../../../store/actions/transaction'
import { pastTime } from '../../../../common/utils'

//components
import Spinner from '../../../../components/Spinner/Spinner'
import { useStyles, StyledRibbon } from '../style'
import { StyledEmptyRowBox } from '../../../../Styles'

interface LatestTransactionProps {
  getLatestTransactions: VoidFunction
  latestTransactions: any
  intervalID: any
  loading: boolean
}

function LatestTransactions({
  getLatestTransactions,
  latestTransactions,
  intervalID,
  loading,
}: LatestTransactionProps) {
  const classes = useStyles()

  React.useEffect(() => {
    getLatestTransactions()
  }, [getLatestTransactions])

  // React.useEffect(() => {
  //   return () => {
  //     clearInterval(intervalID)
  //   }
  // }, [intervalID])
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.backgroundPaper}>
        <div style={{ padding: '0.75rem' }}>
          <Typography className={classes.title}>Latest Transactions</Typography>
        </div>

        <Divider className={classes.dividerColor} />
        {loading ? (
          <div className={classes.spinner}>
            <Spinner />
          </div>
        ) : latestTransactions.length === 0 ? (
          <StyledEmptyRowBox>There is no transaction</StyledEmptyRowBox>
        ) : (
          <>
            <div className={classes.paper}>
              {latestTransactions.map((row: any, index: any) => (
                <div key={index} className={classes.listBox}>
                  <Grid container style={{ padding: '10px 0' }}>
                    <Grid item xs={12} sm={4} md={4} lg={4}>
                      <Grid container spacing={5}>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                          <Paper variant="outlined" className={classes.transactionIcon}>
                            <span className={classes.transactionSpan}>Tx</span>
                          </Paper>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} style={{ textAlign: 'left' }}>
                          <div
                            style={{
                              lineHeight: 1.5,
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              width: 125,
                            }}
                          >
                            <Link to={`/tx/${row['txHash']}`} className={classes.link}>
                              {row['txHash']}
                            </Link>
                            <Typography variant="body2" className={classes.timeNotion}>
                              {pastTime(row['txAge'])}
                            </Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} md={8} lg={8}>
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
                                From&nbsp;
                                <Link to={`/address/${row.from}`} className={classes.link}>
                                  {row['from']}
                                </Link>
                              </Typography>

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
                                To&nbsp;
                                {row['to'] !== null ? (
                                  <Link to={`/address/${row.to}`} className={classes.link}>
                                    {row['to']}
                                  </Link>
                                ) : (
                                  <Link to={`/address/${row.contractAddress}`} className={classes.link}>
                                    Contract creation
                                  </Link>
                                )}
                              </Typography>
                            </div>
                          </Grid>
                          <Grid item xs={12} sm={3} md={3} lg={3} style={{ textAlign: 'right' }}>
                            <Tooltip title="Amount" className={classes.tooltip}>
                              <StyledRibbon>{parseFloat(row['value'].toFixed(6))} ZNX</StyledRibbon>
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
              <Link className={classes.viewAllButton} to="txs/list">
                View all transactions
              </Link>
            </div>
          </>
        )}
      </Paper>
    </div>
  )
}
const mapStateToProps = (state: AppState) => ({
  latestTransactions: state.transaction.latestTransactions,
  intervalID: state.transaction.intervalID,
  loading: state.transaction.loadingLatestTxns,
})
export default connect(mapStateToProps, { getLatestTransactions })(LatestTransactions)
