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
  Subtitle,
  ColumnSeries,
  HighchartsProvider,
} from 'react-jsx-highcharts'
import { AppState } from '../../../store/configureStore'
import { averageGasPrice } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

interface AverageGasPriceProps {
  averageGasPrice: VoidFunction
  gasprice: any
  loading: boolean
}

function AverageGasPrice({ averageGasPrice, gasprice, loading }: AverageGasPriceProps) {
  const classes = useStyles()
  React.useEffect(() => {
    averageGasPrice()
  }, [averageGasPrice])
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = 'transparent'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'
  var subtitleColor = curThemeName === 'lightTheme' ? '#666666' : '#c0d3df'
  const pathname = window.location.pathname
  const plotOptions = {
    column: {
      tooltip: {
        placement: 'auto',
        pointFormat: `[{series.name}:{gasprice}<b>{point.y:,.0f}100 Gwei</b>]<br /><span>Max Gas Price:<b>100 Gwei</b></span><br /><span>Min Gas Price:<b>100 Gwei</b></span>`,
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
          <span>Zilionixx Average Gas Price Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link> / Zilionixx Average Gas Price Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The Zilionixx Average Gas Price Chart shows the daily average gas price used of the network.
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
                    <Chart type="column" zoomType="x" height={550} backgroundColor={chartBackgroundColor} />
                    <Title style={{ color: titleColor }}>Zilionixx Average Gas Price Chart</Title>
                    <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix=" Gwei" />

                    <XAxis type="datetime" labels={{ enabled: true }}></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}> Gas Price in Gwei</YAxis.Title>
                      <ColumnSeries name="AVG Gas Price" data={gasprice} color={chartLineColor} />
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
  gasprice: state.chart.gasprice,
  loading: state.chart.loading,
})

export default connect(mapStateToProps, { averageGasPrice })(AverageGasPrice)
