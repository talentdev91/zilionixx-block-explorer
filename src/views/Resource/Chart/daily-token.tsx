import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { connect } from 'react-redux'
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
import { AppState } from '../../../store/configureStore'
import { getTokenTransfer } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

interface DailyTxnsProps {
  getTokenTransfer: VoidFunction
  tokenArrays: any
  loading: boolean
}

function Txchart({ getTokenTransfer, tokenArrays, loading }: DailyTxnsProps) {
  const classes = useStyles()
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = 'transparent'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'
  var subtitleColor = curThemeName === 'lightTheme' ? '#666666' : '#c0d3df'

  React.useEffect(() => {
    getTokenTransfer()
  }, [getTokenTransfer])

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
  return (
    <StyledContainer>
      <div className={classes.chartroot}>
        <h1 className={clsx(classes.toptitle, classes.bottomboder)}>
          <span>ERC-20 Daily Token Transfer Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link>
            / ERC-20 Daily Token Transfer Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The chart shows the number of ERC-20 tokens transferred daily.
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
                    <Title style={{ color: titleColor }}>ERC-20 Daily Token Transfer Chart</Title>
                    <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix="" />
                    <XAxis
                      type="datetime"
                      labels={{ enabled: true, format: '{value:%b  %d}', align: 'center' }}
                    ></XAxis>
                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}>ERC-20 Daily Token Transfer Count per Day</YAxis.Title>
                      <LineSeries name="Total token transfer" data={tokenArrays} />
                    </YAxis>
                  </HighchartsChart>
                )}
              </HighchartsProvider>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.footerText}>
        <span className={classes.download}>Download: CSV Data (Attribution Required)</span>
      </div>
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  tokenArrays: state.chart.tokenArrays,
  loading: state.chart.loading,
})
export default connect(mapStateToProps, { getTokenTransfer })(Txchart)
