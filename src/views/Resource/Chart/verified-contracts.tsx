import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Highcharts from 'highcharts'
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
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'
import data from './data'

function VerifyChart() {
  const classes = useStyles()
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = 'transparent'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'
  const pathname = window.location.pathname
  const plotOptions = {
    line: {
      Tooltip: {
        placement: 'auto',
      },
      lineColor: chartLineColor,
      YAxis: {
        align: 'left',
        x: 0,
      },
      pointInterval: 86400000, // one hour
      pointStart: Date.UTC(2021, 7, 1, 0, 0, 0),
    },
  }
  const data2 = [
    data.map((e) => {
      return e.High
    }),
  ]
  return (
    <StyledContainer>
      <div className={classes.chartroot}>
        <h1 className={clsx(classes.toptitle, classes.bottomboder)}>
          <span>Zilionixx Daily Verified Contracts Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link> / Zilionixx Network Utilization Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The chart shows the total number of contracts verified daily. Check out the 500 most recent{' '}
              <Link to="/contractsVerified" className={classes.link}>
                <span>verified contracts!</span>
              </Link>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                  <Chart type="line" zoomType="x" height={550} backgroundColor={chartBackgroundColor} />
                  <Title style={{ color: titleColor }}>Zilionixx Daily Verified Contracts Chart</Title>
                  <Subtitle style={{ color: titleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                  <Tooltip valueSuffix="" />

                  <XAxis type="datetime" labels={{ enabled: true }}></XAxis>

                  <YAxis>
                    <YAxis.Title style={{ color: titleColor }}>Total Verified Contracts per Day</YAxis.Title>
                    <LineSeries name="Total Verified Contracts" data={data2[0]} />
                  </YAxis>
                </HighchartsChart>
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

export default VerifyChart
