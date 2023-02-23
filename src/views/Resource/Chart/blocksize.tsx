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
import { averageBlockSize } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

interface AverageBlockProps {
  averageBlockSize: VoidFunction
  averageblock: any
  loading: boolean
}

function BlockSizeChart({ averageBlockSize, averageblock, loading }: AverageBlockProps) {
  const classes = useStyles()
  React.useEffect(() => {
    averageBlockSize()
  }, [averageBlockSize])
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
        pointFormat: `[{series.name}:{averageblock}  <b>{point.y:,.0f}</b>]`,
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
          <span>Zilionixx Average Block Size Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link> / Zilionixx Average Block Size Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The Zilionixx Average Block Size Chart indicates the historical average block size in bytes of the
              blockchain.
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
                    <Title style={{ color: titleColor }}>Zilionixx Average Block Size Chart</Title>
                    <Subtitle style={{ color: subtitleColor }}> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip valueSuffix="" />

                    <XAxis type="datetime" labels={{ enabled: true }}></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}> Block Size in Bytes</YAxis.Title>
                      <ColumnSeries name="BlockSize (Bytes)" data={averageblock} color={chartLineColor} />
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
  averageblock: state.chart.averageblock,
  loading: state.chart.loading,
})

export default connect(mapStateToProps, { averageBlockSize })(BlockSizeChart)
