import React from 'react'
import { Link } from 'react-router-dom'
import Highcharts from 'highcharts'
import {
  HighchartsChart,
  Chart,
  XAxis,
  YAxis,
  Tooltip,
  Title,
  AreaSeries,
  Subtitle,
  HighchartsProvider,
} from 'react-jsx-highcharts'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'
import data from './data'

function Txchart() {
  const classes = useStyles()
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = 'transparent'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'
  var subtitleColor = curThemeName === 'lightTheme' ? '#666666' : '#c0d3df'
  const pathname = window.location.pathname
  const plotOptions = {
    line: {
      Tooltip: {
        placement: 'auto',
      },
      YAxis: {
        align: 'left',
        x: 0,
      },
      areaColor: chartLineColor,
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
          <span>Zilionixx Unique Addresses Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link>{' '}
            / Zilionixx Unique Addresses Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The chart shows the total distinct numbers of address on the Zilionixx and the increase in the number of
              address daily.
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.carditem3}>
            <CardContent className={classes.itemheader}>
              <Grid container>
                <Grid item md={6} sm={12} className={classes.gridborder}>
                  <p className={classes.gridtext}>
                    <i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>
                    Highest increase of 40,478 new addresses was recorded on Saturday, June 26, 2021
                  </p>
                </Grid>
                <Grid item md={6} sm={12}>
                  <p className={classes.gridtext}>
                    <i className="fas fa-lightbulb" style={{ marginRight: '10px' }}></i>
                    Lowest increase of 7 new addresses was recorded on Wednesday, November 4, 2020
                  </p>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                  <Chart type="area" zoomType="x" height={550} backgroundColor={chartBackgroundColor} />
                  <Title style={{ color: titleColor }}>Zilionixx Unique Addresses Chart</Title>
                  <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                  <Tooltip valueSuffix="" />
                  <XAxis type="datetime" labels={{ enabled: true, format: '{value:%b  %d}', align: 'center' }}></XAxis>

                  <YAxis>
                    <YAxis.Title style={{ color: titleColor }}>Zilionixx Cumulative Address Growth</YAxis.Title>
                    <AreaSeries name="Total Distinct Address" data={data2[0]} color={chartLineColor} />
                  </YAxis>
                </HighchartsChart>
              </HighchartsProvider>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.footerText}>
        <span className={classes.download}>
          Download:{' '}
          <Link to={`${pathname}?output=csv`} className={classes.link}>
            CSV Data
          </Link>{' '}
          (Attribution Required)
        </span>
      </div>
    </StyledContainer>
  )
}

export default Txchart
