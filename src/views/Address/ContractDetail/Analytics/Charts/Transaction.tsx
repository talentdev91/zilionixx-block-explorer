import React from 'react'
import Highcharts from 'highcharts/highstock'
import {
  HighchartsStockChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Legend,
  AreaSplineSeries,
  Navigator,
  HighchartsProvider,
  Tooltip,
  Subtitle,
  RangeSelector,
} from 'react-jsx-highstock'
// import { createRandomData } from './exam'
import useStyles from '../AnalyticStyle'
import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'

interface Props {
  address: any
  loading: boolean
  txnHistoryTotal: any
  txnHistoryBySender: any
  txnHistoryByReceiver: any
}

function Transaction({ address, txnHistoryTotal, txnHistoryBySender, txnHistoryByReceiver }: Props) {
  const classes = useStyles()
  return (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsStockChart className={classes.highChart}>
          <Chart type="column" zoomType="x" />

          <Title>ZNX Balance {address}</Title>
          <Subtitle>Source code znxscan.com</Subtitle>
          <Tooltip />
          <Legend />
          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>
          <YAxis opposite={false}>
            <YAxis.Title>Values</YAxis.Title>
            <AreaSplineSeries id="txns" name="ZNX Transactions" data={txnHistoryTotal} />
            <AreaSplineSeries id="outgoing" name="Unique Outgoing Address" data={txnHistoryBySender} />
            <AreaSplineSeries id="incoming" name="Unique Incoming Address" data={txnHistoryByReceiver} />
          </YAxis>

          <RangeSelector allButtonsEnabled={true} selected={3}>
            <RangeSelector.Button count={1} offsetMin={0} offsetMax={0} type="day">
              1d
            </RangeSelector.Button>
            <RangeSelector.Button count={7} offsetMin={0} offsetMax={0} type="day">
              7d
            </RangeSelector.Button>
            <RangeSelector.Button count={1} offsetMin={0} offsetMax={0} type="month">
              1m
            </RangeSelector.Button>
            <RangeSelector.Button offsetMin={0} offsetMax={0} type="all">
              All
            </RangeSelector.Button>
            <RangeSelector.Input enabled={true} boxBorderColor="#7cb5ec" />
          </RangeSelector>

          <Navigator>
            <Navigator.Series seriesId="txns" />
            <Navigator.Series seriesId="outgoing" />
            <Navigator.Series seriesId="incoming" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  txnHistoryTotal: state.address.txnHistoryTotal,
  txnHistoryBySender: state.address.txnHistoryBySender,
  txnHistoryByReceiver: state.address.txnHistoryByReceiver,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps)(Transaction)
