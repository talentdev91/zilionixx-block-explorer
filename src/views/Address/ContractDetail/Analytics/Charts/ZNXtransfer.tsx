import React from 'react'
import Highcharts from 'highcharts/highstock'
import {
  HighchartsStockChart,
  Chart,
  HighchartsProvider,
  XAxis,
  YAxis,
  Title,
  Legend,
  Navigator,
  Tooltip,
  Subtitle,
  ColumnSeries,
  RangeSelector,
} from 'react-jsx-highstock'

import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import useStyles from '../AnalyticStyle'

interface Props {
  address: any
  loading: boolean
  transfersSent: any
  transfersReceived: any
}

function ZNXtransfer({ address, loading, transfersSent, transfersReceived }: Props) {
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
            <YAxis.Title>Transaction Amounts</YAxis.Title>
            <ColumnSeries id="txnOut" name="Sent (Out)" data={transfersSent} />
            <ColumnSeries id="txnIn" name="Receive (In)" data={transfersSent} />
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
            <Navigator.Series seriesId="txnOut" />
            <Navigator.Series seriesId="txnIn" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  transfersSent: state.address.transfersSent,
  transfersReceived: state.address.transfersReceived,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps)(ZNXtransfer)
