import React from 'react'
import { connect } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Highcharts from 'highcharts'
import { HighchartsChart, Chart, XAxis, YAxis, SplineSeries, Tooltip, HighchartsProvider } from 'react-jsx-highcharts'
import { AppState } from '../../../../store/configureStore'
import { getZnxHistory } from '../../../../store/actions/transaction'
import PopIcon from './popper'

interface BlockProps {
  getZnxHistory: VoidFunction
  txnsCntArray: any
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: '1.5rem',
      paddingRight: '1.5rem',
    },
    chip: {
      marginLeft: 'auto',
    },
    chartcolor: {
      color: theme.palette.secondary.main,
    },
    divid: {
      display: 'none',

      [theme.breakpoints.down('sm')]: {
        marginLeft: '0 !important',
        marginRight: '0 !important',
        marginTop: '1.2rem',
        marginBottom: '1.2rem',
        display: 'block',
      },
    },
    section1: {
      marginLeft: '0 !important',
      marginRight: '0 !important',
      marginTop: '1.2rem',
      marginBottom: '1.2rem',
    },
    chart: {
      width: '100%',
    },
    text1: {
      color: `${localStorage.appTheme === 'darkTheme' ? '#8c96a5' : '#77838f'}`,
      fontSize: '.76563rem',
      alignSelf: 'end',
    },
  }),
)

function Price({ getZnxHistory, loading, txnsCntArray }: BlockProps) {
  const classes = useStyles()
  const curThemeName = localStorage.getItem('appTheme') || 'lightTheme'
  var chartBackgroundColor = curThemeName === 'lightTheme' ? 'white' : '#212121'
  var chartLineColor = curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'

  React.useEffect(() => {
    getZnxHistory()
  }, [getZnxHistory, curThemeName])

  const plotOptions = {
    spline: {
      lineWidth: 1,
      states: {
        hover: {
          lineWidth: 1,
        },
      },
      lineColor: chartLineColor,
      marker: {
        enabled: false,
      },
      Tooltip: {
        placement: 'auto',
      },
      YAxis: {
        align: 'left',
        x: 0,
      },
    },
  }

  return (
    <div className={classes.root}>
      <Divider variant="middle" className={classes.divid} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography className={classes.text1}>ZNX TRANSACTION HISTORY LAST 14 DAYS</Typography>
        <PopIcon />
      </div>
      <Grid className={classes.chart}>
        <HighchartsProvider Highcharts={Highcharts}>
          <HighchartsChart plotOptions={plotOptions}>
            <Chart type="spline" height={106} backgroundColor={chartBackgroundColor} />
            <Tooltip valueSuffix="" />

            <XAxis
              type="datetime"
              height={66}
              tickInterval={86400000 * 6}
              lineColor={curThemeName === 'lightTheme' ? '#12161c' : '#c0d3df'}
              labels={{ enabled: true, format: '{value:%b  %d}', align: 'center' }}
            ></XAxis>

            <YAxis minorGridLineWidth={0} gridLineWidth={0} height={51} width={0}>
              <SplineSeries name="Transaction" data={txnsCntArray} />
            </YAxis>
          </HighchartsChart>
        </HighchartsProvider>
      </Grid>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  txnsCntArray: state.transaction.txnsCntArray,
  loading: state.transaction.loading,
})

export default connect(mapStateToProps, { getZnxHistory })(Price)
