import React from 'react'
import { Link } from 'react-router-dom'
import Highcharts from 'highcharts'
import { connect } from 'react-redux'
import {
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Tooltip,
  Title,
  LineSeries,
  Subtitle,
  HighchartsProvider,
} from 'react-jsx-highcharts'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import useStyles from './chartstyle'
import { AppState } from '../../../store/configureStore'
import { getDailyTxns } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import { StyledContainer } from '../../../components/StyledContainer'

interface DailyTxnsProps {
  getDailyTxns: VoidFunction
  txnsCntArrays: any
  loading: boolean
}

function Txchart({ getDailyTxns, txnsCntArrays, loading }: DailyTxnsProps) {
  const classes = useStyles()
  React.useEffect(() => {
    getDailyTxns()
  }, [getDailyTxns])

  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = 'transparent'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'
  var subtitleColor = curThemeName === 'lightTheme' ? '#666666' : '#c0d3df'
  const pathname = window.location.pathname

  const plotOptions = {
    line: {
      tooltip: {
        placement: 'auto',
        pointFormat: `{series.name}:{txnsCntArray}  <b>{point.y:,.0f}</b><br/>Avg Block Time:<b>0.70</b><br />Avg Block Size: <b>2364</b><br />Total Block Count: <b>112886</b><br />New Address Seen:<b>0</b>`,
      },
      lineColor: chartLineColor,
      YAxis: {
        align: 'left',
        x: 0,
      },
    },
  }

  return (
    <StyledContainer>
      <div className={classes.chartroot}>
        <h1 className={clsx(classes.toptitle, classes.bottomboder)}>
          <span>Zilionixx Daily Transactions Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link> / Zilionixx Daily Transactions
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The chart highlights the total number of transactions on the Zilionixx blockchain with daily individual
              breakdown for average difficulty, estimated hash rate, average block time and size, total block and uncle
              block count and total new address seen.
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.carditem3}>
            <CardContent className={classes.itemheader}>
              <Grid container>
                <Grid item md={6} sm={12} className={classes.gridborder}>
                  <p className={classes.gridtext}>
                    <i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>
                    Highest number of 1,169,019 transactions on Monday, August 30, 2021
                  </p>
                </Grid>
                <Grid item md={6} sm={12}>
                  <p className={classes.gridtext}>
                    <i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>
                    Lowest number of 1,500 transactions on Wednesday, September 16, 2020
                  </p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              <HighchartsProvider Highcharts={Highcharts}>
                {loading ? (
                  <div>
                    <Spinner />
                  </div>
                ) : (
                  <HighchartsChart plotOptions={plotOptions}>
                    <Chart type="line" zoomType="x" height={550} backgroundColor={chartBackgroundColor} />
                    <Title style={{ color: titleColor }}>Zilionixx Daily Transactions Chart</Title>
                    <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix="" shared />
                    <XAxis
                      type="datetime"
                      labels={{ enabled: true, format: '{value:%b  %d}', align: 'center' }}
                    ></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}>Transactions per Day</YAxis.Title>
                      <LineSeries name="Total Transactions" data={txnsCntArrays} />
                    </YAxis>
                  </HighchartsChart>
                )}
              </HighchartsProvider>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.footerText}>
        <span className={classes.download}>Download: <Link to={`${pathname}?output=csv`} className={classes.link}>CSV Data</Link> (Attribution Required)</span>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  txnsCntArrays: state.chart.txnsCntArrays,
  loading: state.chart.loading,
})

export default connect(mapStateToProps, { getDailyTxns })(Txchart)
