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
  SplineSeries,
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
import { GetAddressDetailAnalytics } from '../../../../../store/actions/address'

interface Props {
  address: any
  loading: boolean
  balanceHistory: any
  txnCountsHistory: any
  analyticsError: any
}

function Balance({ address, loading, balanceHistory, txnCountsHistory, analyticsError }: Props) {
  React.useEffect(() => { }, [loading, address])
  const classes = useStyles()
  return (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsStockChart className={classes.highChart}>
          <Chart type="column" zoomType="x" />
          <Title >ZNX Balance {address}</Title>
          <Subtitle>Source code znxscan.com</Subtitle>
          <Tooltip />
          <Legend />
          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>
          <YAxis>
            <YAxis.Title>ZNX Balance</YAxis.Title>
            <AreaSplineSeries id="balance" name="ZNX Account Balance" data={balanceHistory} />
          </YAxis>

          <YAxis opposite={true}>
            <YAxis.Title>Transaction count</YAxis.Title>
            <SplineSeries id="txncount" name="Txn count" data={txnCountsHistory} />
          </YAxis>
          {/* <YAxis>
            <SplineSeries id="current" name="Current USD Val" data={testChartData.data3} />
          </YAxis>
          <YAxis>
            <YAxis.Title>Txn Count</YAxis.Title>
            <SplineSeries id="txn" name="Txn count" data={testChartData.data4} />
          </YAxis> */}

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
            <Navigator.Series seriesId="balance" />
            <Navigator.Series seriesId="txncount" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  balanceHistory: state.address.balanceHistory,
  txnCountsHistory: state.address.txnCountsHistory,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps, { GetAddressDetailAnalytics })(Balance)
