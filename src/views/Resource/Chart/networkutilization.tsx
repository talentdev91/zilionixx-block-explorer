import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
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
import { AppState } from '../../../store/configureStore'
import { getUtilization } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

interface DailyTxnsProps {
  getUtilization: VoidFunction
  utilization: any
  loading: boolean
}

function GasUtilization({ getUtilization, utilization, loading }: DailyTxnsProps) {
  React.useEffect(() => {
    getUtilization()
  }, [getUtilization])
  const classes = useStyles()
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
        pointFormat: `{series.name}:{utilization}  <b>{point.y:,.0f}%</b>`,
      },
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
          <span>Zilionixx Network Utilization Chart</span>
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
              The Zilionixx Network Utilization Chart shows the average gas used over the gas limit in percentage.
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
                    <Title style={{ color: titleColor }}>Zilionixx Network Utilization Chart</Title>
                    <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix="" />

                    <XAxis type="datetime" labels={{ enabled: true }}></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}>Average Gas Used/Gas Limit(Percentage %)</YAxis.Title>
                      <LineSeries name="Network Utilization" data={utilization} color={chartLineColor} />
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
  utilization: state.chart.utilization,
  loading: state.chart.loading,
})

export default connect(mapStateToProps, { getUtilization })(GasUtilization)
