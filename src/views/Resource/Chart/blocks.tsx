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
import { blockCountReward } from '../../../store/actions/chart'
import Spinner from '../../../components/Spinner/Spinner'
import useStyles from './chartstyle'
import { StyledContainer } from '../../../components/StyledContainer'

interface BlockRewardProps {
  blockCountReward: VoidFunction
  totalblockreward: any
  loading: boolean
}

function BlockReward({ blockCountReward, totalblockreward, loading }: BlockRewardProps) {
  const classes = useStyles()
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = curThemeName === 'lightTheme' ? 'white' : '#252525'
  var chartLineColor = curThemeName === 'lightTheme' ? '#7CB5EC' : '#3F3F3F'
  var titleColor = curThemeName === 'lightTheme' ? '#000' : '#fff'
  const pathname = window.location.pathname

  console.log(curThemeName, localStorage)
  React.useEffect(() => {
    blockCountReward()
  }, [blockCountReward, curThemeName])

  const plotOptions = {
    column: {
      tooltip: {
        placement: 'auto',
        pointFormat: `{series.name}:{totalblockreward}  <b>{point.y:,.0f}</b><br/>Total Daily Block Rewards:<b>0.70</b>`,
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
          <span>Zilionixx Block Count and Rewards Chart</span>
          <span className={classes.lefttoptext}>
            <Link to="/chart" className={classes.link}>
              Charts & Stats&nbsp;
            </Link>
            /
            <Link to="/chart" className={classes.link}>
              &nbsp;Blockchain Data&nbsp;
            </Link> / Zilionixx Block Count and Rewards Chart
          </span>
        </h1>
        <div>
          <Card variant="outlined" className={classes.carditem2}>
            <CardContent className={classes.itemheader}>
              The Zilionixx Block Count and Rewards Chart shows the historical number of blocks procduced daily on the
              and the total block reward.
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
                    <Title style={{ color: titleColor }}>Zilionixx Block Count and Rewards Chart</Title>
                    <Subtitle> Click and drag in the plot area to zoom in</Subtitle>
                    <Tooltip />

                    <XAxis type="datetime" labels={{ enabled: true }}></XAxis>

                    <YAxis>
                      <YAxis.Title style={{ color: titleColor }}> Blocks Per Day</YAxis.Title>
                      <ColumnSeries name="Total Blocks" data={totalblockreward} color={chartLineColor} />
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
  loading: state.chart.loading,
  totalblockreward: state.chart.totalblockreward,
})

export default connect(mapStateToProps, { blockCountReward })(BlockReward)
