import React from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

export default function OutlinedCard() {
  const classes = useStyles()

  return (
    <StyledContainer>
      <div className={classes.chartroot}>
        <h1 className={classes.toptitle}>
          Zilionixx Charts & Statistics<span className={classes.lefttoptext}>Charts & Stats</span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.root}>
            <CardHeader title={<h2 className={classes.cardheader}>Blockchain Data</h2>} className={classes.cardhead} />
            <CardContent className={classes.content}>
              <Grid container spacing={3} className={classes.carditemheader}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/tx" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Daily Transactions Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/daily-transaction.svg" className={classes.grap} alt="dailytrans" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/erc20txns" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>ERC-20 Daily Token Transfer Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/daily-token.svg" alt="dtoken" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                {/* <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/address" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Unique Addresses Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/address.svg" className={classes.grap} alt="address" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid> */}
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/blocksize" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Average Block Size Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/blocksize.svg" className={classes.grap} alt="blocksize" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/blocktime" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Average Block Time Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/blocktime.svg" className={classes.grap} alt="blocktime" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/gasprice" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Average Gas Price Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/gasprice.svg" className={classes.grap} alt="gasprice" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/gasused" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Daily Gas Used Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/gasused.svg" className={classes.grap} alt="gasused" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/blocks" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Block Count and Rewards Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/blockcount.svg" className={classes.grap} alt="blockcount" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {/* <Card variant="outlined" className={classes.root}>
            <CardHeader title={<h2 className={classes.cardheader}>Network Data</h2>} className={classes.cardhead} />
            <CardContent className={classes.content}>
              <Grid container spacing={3} className={classes.carditemheader}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/pendingtx" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Network Pending Transactions Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/pending.svg" className={classes.grap} alt="dailytrans" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/transactionfee" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Network Transaction Fee Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/transactionfee.svg" className={classes.grap} alt="dtoken" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/networkutilization" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Network Utilization Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/networkutilization.svg" className={classes.grap} alt="address" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.root}>
            <CardHeader title={<h2 className={classes.cardheader}>Contracts Data</h2>} className={classes.cardhead} />
            <CardContent className={classes.content}>
              <Grid container spacing={3} className={classes.carditemheader}>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Link to="/chart/verified-contracts" className={classes.link}>
                    <Card variant="outlined" className={classes.carditem}>
                      <CardHeader
                        title={<h2 className={classes.carditemheader}>Verified Contracts Chart</h2>}
                        className={classes.itembackground}
                      />
                      <CardContent className={classes.itembody}>
                        <img src="/images/Charts/verified-contacts.svg" className={classes.grap} alt="dailytrans" />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </StyledContainer>
  )
}
