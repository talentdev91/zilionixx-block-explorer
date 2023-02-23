import React from 'react'
import Highcharts from 'highcharts/highstock'
import {
  HighchartsStockChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Legend,
  Navigator,
  HighchartsProvider,
  Tooltip,
  Subtitle,
  LineSeries,
  ColumnSeries,
  RangeSelector,
} from 'react-jsx-highstock'

import { connect } from 'react-redux'
import { AppState } from '../../../../../store/configureStore'
import useStyles from '../AnalyticStyle'

interface Props {
  address: any
  loading: boolean
  totalTokenTransfersCount: any
  tokenContractsCount: any
  outBoundCount: any
  inBoundCount: any
  uniqueAddressSent: any
  uniqueAddressReceived: any
}

function Token({
  address,
  totalTokenTransfersCount,
  tokenContractsCount,
  outBoundCount,
  inBoundCount,
  uniqueAddressSent,
  uniqueAddressReceived,
}: Props) {
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
          <YAxis>
            <YAxis.Title>Token Contracts Count</YAxis.Title>
            <ColumnSeries id="total" name="Token Transfers" data={totalTokenTransfersCount} />
            <LineSeries id="contract" name="Token Contracts Count" data={tokenContractsCount} />
            <LineSeries id="outbound" name="Outbound Transfers" data={outBoundCount} />
            <LineSeries id="inbound" name="Inbound Transfers" data={inBoundCount} />
          </YAxis>

          <YAxis>
            <LineSeries id="uniquesent" name="Unique Address Sent" data={uniqueAddressSent} />
            <LineSeries id="uniquereceived" name="Unique Address Received" data={uniqueAddressReceived} />
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
            <Navigator.Series seriesId="total" />
            <Navigator.Series seriesId="contract" />
            <Navigator.Series seriesId="outbound" />
            <Navigator.Series seriesId="inbound" />
            <Navigator.Series seriesId="uniquesent" />
            <Navigator.Series seriesId="uniquereceived" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  totalTokenTransfersCount: state.address.totalTokenTransfersCount,
  tokenContractsCount: state.address.tokenContractsCount,
  outBoundCount: state.address.outBoundCount,
  inBoundCount: state.address.inBoundCount,
  uniqueAddressSent: state.address.uniqueAddressSent,
  uniqueAddressReceived: state.address.uniqueAddressReceived,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps)(Token)
