import React from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { getTopNetwork } from '../../../store/actions/statistics'
import { AppState } from '../../../store/configureStore'
import SimpleTabs from './components/Tab/SimpleTabs'
import CustomTokensTable from './components/CustomTable/CustomTokensTable'
import { Theme, makeStyles } from '@material-ui/core/styles'
import { topNetworkAddressCols, topNetworkTxnCols } from './Mockup'

// Import Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

interface topNetworksProps {
  getTopNetwork: () => void
  topAccountsByTxnCountAndGasUsed: any
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .highcharts-background': {
      fill: theme.palette.primary.light,
    },
    '& .highcharts-title': {
      fill: `${theme.typography.body2.color}!important`,
    }
  },
  row: {
    marginBottom: 10,
  },
}))

const makeTableData = (topTokensInDurationWithType: any, dataType: string) => {
  var rows = []
  for (let i = 0; i < topTokensInDurationWithType.length; i++) {
    let row = { col1: 0, col2: '', col3: '', url: '', imgUrl: './components/spookyswap-boo_32.png' }
    row['col1'] = i + 1
    row['col2'] = topTokensInDurationWithType[i]['_id']
    row['col3'] = topTokensInDurationWithType[i][dataType]
    row['url'] = '/address/' + topTokensInDurationWithType[i]['_id']
    rows.push(row)
  }
  return rows
}

const makePieChartByGasUsedOption = (topAccountsByTxnCountAndGasUsed: string | any[]) => {
  var pieChartData = [],
    totalGasOfTopAccounts = 0
  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    totalGasOfTopAccounts += topAccountsByTxnCountAndGasUsed[i]['totalGasused']
    pieChartData.push({
      name: '#' + i.toString(),
      address: topAccountsByTxnCountAndGasUsed[i]['_id'],
      gasUsed: topAccountsByTxnCountAndGasUsed[i]['totalGasused'],
      y: 0,
    })
  }

  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    pieChartData[i].y = (pieChartData[i].gasUsed * 100) / totalGasOfTopAccounts
  }

  var options = {
    chart: {
      type: 'pie',
      events: {
        render() { },
      },
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Account vs Gas used',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
      },
    },
    series: [
      {
        type: 'pie',
        data: pieChartData,
        tooltip: {
          pointFormat:
            '<b>Top Accounts By Gas Used</b><br> <table><tbody><tr><td>Contract<br>Address: </td><td><b>{point.address}</b></td></tr></tbody></table><br><br><table><tbody><tr><td>Gas Used: </td><td><b>{point.gasUsed}</b></td></tr></tbody></table> <br>',
        },
      },
    ],
  }
  return options
}

const makePieChartByTxnOption = (topAccountsByTxnCountAndGasUsed: string | any[]) => {
  var pieChartData = [],
    totalGasOfTopAccounts = 0
  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    totalGasOfTopAccounts += topAccountsByTxnCountAndGasUsed[i]['txnCount']
    pieChartData.push({
      name: '#' + i.toString(),
      address: topAccountsByTxnCountAndGasUsed[i]['_id'],
      gasUsed: topAccountsByTxnCountAndGasUsed[i]['txnCount'],
      y: 0,
    })
  }

  for (let i = 0; i < topAccountsByTxnCountAndGasUsed.length; i++) {
    pieChartData[i].y = (pieChartData[i].gasUsed * 100) / totalGasOfTopAccounts
  }

  var options = {
    chart: {
      type: 'pie',
      events: {
        render() { },
      },
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
    },
    title: {
      text: 'Account vs Txn Count',
    },

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 35,
      },
    },
    series: [
      {
        type: 'pie',
        data: pieChartData,
        tooltip: {
          pointFormat:
            '<b>Top Accounts By Txn Count</b><br> <table><tbody><tr><td>Address: </td><td><b>{point.address}</b></td></tr></tbody></table><br><br><table><tbody><tr><td>Txn Count: </td><td><b>{point.gasUsed}</b></td></tr></tbody></table> <br>',
        },
      },
    ],
  }
  return options
}

function Network({ getTopNetwork, topAccountsByTxnCountAndGasUsed, loading }: topNetworksProps) {
  const classes = useStyles()

  const rows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []

  const [topAccountsByGasUsedWeek, setTopAccountsByGasUsedWeek] = React.useState(rows)
  const [topAccountsByTxnCountWeek, setTopAccountsByTxnCountWeek] = React.useState(rows)
  const [pieChartOption, setPieChartOption] = React.useState({})
  const [pieChartTxnOption, setPieChartTxnOption] = React.useState({})

  const [topAccountsByGasUsedThree, setTopAccountsByGasUsedThree] = React.useState(rows)
  const [topAccountsByTxnCountThree, setTopAccountsByTxnCountThree] = React.useState(rows)
  const [pieChartOption3, setPieChartOption3] = React.useState({})
  const [pieChartTxnOption3, setPieChartTxnOption3] = React.useState({})

  const [topAccountsByGasUsedSeven, setTopAccountsByGasUsedSeven] = React.useState(rows)
  const [topAccountsByTxnCountSeven, setTopAccountsByTxnCountSeven] = React.useState(rows)
  const [pieChartOption7, setPieChartOption7] = React.useState({})
  const [pieChartTxnOption7, setPieChartTxnOption7] = React.useState({})

  React.useEffect(() => {
    var gasUsedRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var pieChartOptions = {}
    var pieChartTxnOptions = {}
    var gasUsedRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var pieChartOptions3 = {}
    var pieChartTxnOptions3 = {}
    var gasUsedRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var pieChartOptions7 = {}
    var pieChartTxnOptions7 = {}
    getTopNetwork()

    if (!loading) {
      gasUsedRows = makeTableData(topAccountsByTxnCountAndGasUsed['day']['sortByGasUsed'], 'totalGasused')
      txnCountRows = makeTableData(topAccountsByTxnCountAndGasUsed['day']['sortByTxnCount'], 'txnCount')
      pieChartOptions = makePieChartByGasUsedOption(topAccountsByTxnCountAndGasUsed['day']['sortByGasUsed'])
      pieChartTxnOptions = makePieChartByTxnOption(topAccountsByTxnCountAndGasUsed['day']['sortByTxnCount'])

      gasUsedRows3 = makeTableData(topAccountsByTxnCountAndGasUsed['threeDays']['sortByGasUsed'], 'totalGasused')
      txnCountRows3 = makeTableData(topAccountsByTxnCountAndGasUsed['threeDays']['sortByTxnCount'], 'txnCount')
      pieChartOptions3 = makePieChartByGasUsedOption(topAccountsByTxnCountAndGasUsed['threeDays']['sortByGasUsed'])
      pieChartTxnOptions3 = makePieChartByTxnOption(topAccountsByTxnCountAndGasUsed['threeDays']['sortByTxnCount'])

      gasUsedRows7 = makeTableData(topAccountsByTxnCountAndGasUsed['week']['sortByGasUsed'], 'totalGasused')
      txnCountRows7 = makeTableData(topAccountsByTxnCountAndGasUsed['week']['sortByTxnCount'], 'txnCount')
      pieChartOptions7 = makePieChartByGasUsedOption(topAccountsByTxnCountAndGasUsed['week']['sortByGasUsed'])
      pieChartTxnOptions7 = makePieChartByTxnOption(topAccountsByTxnCountAndGasUsed['week']['sortByTxnCount'])
    }

    setTopAccountsByGasUsedWeek(gasUsedRows)
    setTopAccountsByTxnCountWeek(txnCountRows)
    setPieChartOption(pieChartOptions)
    setPieChartTxnOption(pieChartTxnOptions)

    setTopAccountsByGasUsedThree(gasUsedRows3)
    setTopAccountsByTxnCountThree(txnCountRows3)
    setPieChartOption3(pieChartOptions3)
    setPieChartTxnOption3(pieChartTxnOptions3)

    setTopAccountsByGasUsedSeven(gasUsedRows7)
    setTopAccountsByTxnCountSeven(txnCountRows7)
    setPieChartOption7(pieChartOptions7)
    setPieChartTxnOption7(pieChartTxnOptions7)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, getTopNetwork])

  var child1 = !loading ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartOption} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkAddressCols} rows={topAccountsByGasUsedWeek} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartTxnOption} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkTxnCols} rows={topAccountsByTxnCountWeek} />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )

  var child2 = !loading ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartOption3} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkAddressCols} rows={topAccountsByGasUsedThree} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartTxnOption3} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkTxnCols} rows={topAccountsByTxnCountThree} />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )

  var child3 = !loading ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartOption7} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkAddressCols} rows={topAccountsByGasUsedSeven} />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <HighchartsReact highcharts={Highcharts} options={pieChartTxnOption7} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomTokensTable cols={topNetworkTxnCols} rows={topAccountsByTxnCountSeven} />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
  var tokenContent = [
    {
      id: nanoid(),
      children: child1,
      label: '24 Hours',
      index: 0,
      suburl: 'network',
    },
    {
      id: nanoid(),
      children: child2,
      label: '3 Days',
      index: 1,
      suburl: 'networkDay3',
    },
    {
      id: nanoid(),
      children: child3,
      label: '7 Days',
      index: 2,
      suburl: 'networkDay7',
    },
  ]
  var val = 0

  var tokenTabContent = <SimpleTabs val={val} tabs={tokenContent} />

  return <div>{tokenTabContent}</div>
}

const mapStateToProps = (state: AppState) => ({
  topAccountsByTxnCountAndGasUsed: state.statistics.topAccountsByTxnCountAndGasUsed,
  loading: state.statistics.loadingNetwork,
})

export default connect(mapStateToProps, { getTopNetwork })(Network)
