import React from 'react'
import Highcharts from 'highcharts/highstock'
import {
  HighchartsStockChart,
  Chart,
  XAxis,
  YAxis,
  Title,
  Legend,
  ColumnSeries,
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

interface Props {
  address: any
  loading: boolean
  error: string
  tokenTransferAmount: any
  tokenTransferCount: any
  tokenTransferUniqueSenders: any
  tokenTransferUniqueReceivers: any
  tokenTransferUniqueTotals: any
}

function OverviewChart({
  address,
  loading,
  error,
  tokenTransferAmount,
  tokenTransferCount,
  tokenTransferUniqueSenders,
  tokenTransferUniqueReceivers,
  tokenTransferUniqueTotals,
}: Props) {
  React.useEffect(() => {}, [loading, address])
  const classes = useStyles()
  return (
    <div>
      <HighchartsProvider Highcharts={Highcharts}>
        <HighchartsStockChart className={classes.highChart}>
          <Chart type="column" zoomType="x" />
          <Title>Token Contract {address}</Title>
          <Subtitle>Source code znxscan.com</Subtitle>
          <Tooltip />
          <Legend />
          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>
          <YAxis>
            <YAxis.Title>Amount</YAxis.Title>
            <ColumnSeries id="transferAmount" name="Transfer Amount" data={tokenTransferAmount} />
          </YAxis>

          <YAxis opposite={true}>
            <YAxis.Title>Transaction count</YAxis.Title>
            <SplineSeries id="transfersCount" name="Transfers Count" data={tokenTransferCount} />
            <SplineSeries id="uniqueSenders" name="Unique Senders" data={tokenTransferUniqueSenders} />
            <SplineSeries id="uniqueReceivers" name="Unique Receivers" data={tokenTransferUniqueReceivers} />
            <SplineSeries id="uniqueTotals" name="Unique Totals" data={tokenTransferUniqueTotals} />
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
            <Navigator.Series seriesId="transferAmount" />
            <Navigator.Series seriesId="transfersCount" />
            <Navigator.Series seriesId="uniqueSenders" />
            <Navigator.Series seriesId="uniqueReceivers" />
            <Navigator.Series seriesId="uniqueTotals" />
          </Navigator>
        </HighchartsStockChart>
      </HighchartsProvider>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  loading: state.token.loadingTokenDetailAnalyze,
  error: state.token.tokenDetailAnalyzeError,
  tokenTransferAmount: state.token.tokenTransferAmount,
  tokenTransferCount: state.token.tokenTransferCount,
  tokenTransferUniqueSenders: state.token.tokenTransferUniqueSenders,
  tokenTransferUniqueReceivers: state.token.tokenTransferUniqueReceivers,
  tokenTransferUniqueTotals: state.token.tokenTransferUniqueTotals,
})

export default connect(mapStateToProps)(OverviewChart)
