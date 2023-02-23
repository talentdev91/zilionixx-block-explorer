import React from 'react'
import Grid from '@material-ui/core/Grid'
import ViewPanel from './components/ViewPanel'
import SimpleTabs from './components/Tab/SimpleTabs'
import { nanoid } from 'nanoid'

import CustomTokensTable from './components/CustomTable/CustomTokensTable'
import { Theme, makeStyles } from '@material-ui/core/styles'
import {
  topTokensByUniqueSenderCols,
  topTokensByUniqueSenderRows,
  topTokensByUniqueReceiverCols,
  topTokensbyTotalUniquesCols,
  topTokensbyTxnCountCols,
} from './Mockup'
import { getTopToken } from '../../../store/actions/statistics'

import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'

// Import Highcharts
import Highcharts from 'highcharts'
import wordCloud from 'highcharts/modules/wordcloud.js'
import HighchartsReact from 'highcharts-react-official'

wordCloud(Highcharts)

Highcharts.seriesTypes.wordcloud.prototype.deriveFontSize = function (relativeWeight: number) {
  var maxFontSize = 25
  // Will return a fontSize between 0px and 25px.
  return Math.floor(maxFontSize * relativeWeight)
}

interface topTokensProps {
  getTopToken: () => void
  topTokensByUniqueTotals: any
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

let topTokensByUniqueSender = {
  type: 'Label',
  label: 'Top Tokens by Unique Senders',
  url: '',
  children: <CustomTokensTable cols={topTokensByUniqueSenderCols} rows={topTokensByUniqueSenderRows} />,
}
let topTokensByUniqueReceiver = {
  type: 'Label',
  label: 'Top Tokens by Unique Receivers',
  url: '',
  children: <CustomTokensTable cols={topTokensByUniqueReceiverCols} rows={topTokensByUniqueSenderRows} />,
}
let topTokensbyTotalUniques = {
  type: 'Label',
  label: 'Top Tokens by Total Uniques',
  url: '',
  children: <CustomTokensTable cols={topTokensbyTotalUniquesCols} rows={topTokensByUniqueSenderRows} />,
}
let topTokensbyTxnCount = {
  type: 'Label',
  label: 'Top Tokens by Txn Count',
  url: '',
  children: <CustomTokensTable cols={topTokensbyTxnCountCols} rows={topTokensByUniqueSenderRows} />,
}

let topTokensByWordCloud = {
  type: 'Label',
  label: 'Transactions',
  url: '',
  children: <div></div>,
}

const makeTableData = (topTokensInDurationWithType: any, dataType: string) => {
  var rows = []
  for (let i = 0; i < topTokensInDurationWithType.length; i++) {
    let row = { col1: 0, col2: '', col3: '', url: '', imgUrl: './components/spookyswap-boo_32.png' }
    row['col1'] = i + 1
    row['col2'] = topTokensInDurationWithType[i]['tokenName']
    row['col3'] = topTokensInDurationWithType[i][dataType]
    row['url'] = '/address/' + topTokensInDurationWithType[i]['tokenAddress']
    rows.push(row)
  }
  return rows
}

const makeWordCloundOptions = (topTokensData: string | any[]) => {
  var wordCloudData = []
  for (let i = 0; i < topTokensData.length; i++) {
    wordCloudData.push({
      name: topTokensData[i]['tokenName'],
      weight: topTokensData[i]['txnCount'],
      rank: (i + 1).toString(),
      address: topTokensData[i]['tokenAddress'][0],
    })
  }

  const options = {
    title: {
      text: '',
    },
    plotOptions: {
      series: {
        cursor: 'pointer',
        events: {
          click: function (event: any) {
            let clickedTokenName = event.point.name[0]
            for (let i = 0; i < topTokensData.length; i++) {
              if (topTokensData[i]['tokenName'][0] === clickedTokenName) {
                window.open('/token/' + topTokensData[i]['tokenAddress'][0])
              }
            }
          },
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        type: 'wordcloud',
        //   spiral: 'archimedean',
        data: wordCloudData,
        rotation: {
          from: 0,
          to: 0,
        },
        title: {
          text: 'Top Tokens',
          align: 'center',
          style: {
            color: 'Red',
            fontSize: '60px',
          },
        },
        minFontSize: 10,
        name: 'Occurrences',

        tooltip: {
          shared: true,
          useHTML: true,
          pointFormat:
            'Top <b>{point.rank}</b> Token<hr><br><br> <table><tbody><tr><td>Contract<br>Address: </td><td><b>{point.address}</b></td></tr></tbody></table><br><br><table><tbody><tr><td>Total<br>Transactions: </td><td><b>{point.weight}</b></td></tr></tbody></table>',
          footerFormat: '</table>',
        },
      },
    ],
  }
  return options
}

const Tokens: React.FC<topTokensProps> = ({ getTopToken, topTokensByUniqueTotals, loading }) => {
  const classes = useStyles()

  const rows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []

  const [topTokensBySendersWeek, setTopTokensBySendersWeek] = React.useState(rows)
  const [topTokensByReceiversWeek, setTopTokensByReceiversWeek] = React.useState(rows)
  const [topTokensByTotalsWeek, setTopTokensByTotalsWeek] = React.useState(rows)
  const [topTokensByTxnCountWeek, setTopTokensByTxnCountWeek] = React.useState(rows)
  const [wordCloudOption, setWordCloudOption] = React.useState({})
  const [topTokensBySendersThree, setTopTokensBySendersThree] = React.useState(rows)
  const [topTokensByReceiversThree, setTopTokensByReceiversThree] = React.useState(rows)
  const [topTokensByTotalsThree, setTopTokensByTotalsThree] = React.useState(rows)
  const [topTokensByTxnCountThree, setTopTokensByTxnCountThree] = React.useState(rows)
  const [wordCloudOption3, setWordCloudOptionThree] = React.useState({})
  const [topTokensBySendersSeven, setTopTokensBySendersSeven] = React.useState(rows)
  const [topTokensByReceiversSeven, setTopTokensByReceiversSeven] = React.useState(rows)
  const [topTokensByTotalsSeven, setTopTokensByTotalsSeven] = React.useState(rows)
  const [topTokensByTxnCountSeven, setTopTokensByTxnCountSeven] = React.useState(rows)
  const [wordCloudOption7, setWordCloudOptionSeven] = React.useState({})

  React.useEffect(() => {
    getTopToken()

    var senderRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var receiverRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var totalRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var wordCloudOptions = {}
    var senderRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var receiverRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var totalRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows3: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var wordCloudOptions3 = {}
    var senderRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var receiverRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var totalRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var txnCountRows7: { col1: number; col2: string; col3: string; url: string; imgUrl: string }[] = []
    var wordCloudOptions7 = {}

    if (!loading) {
      var topTokensBySendersInWeek = topTokensByUniqueTotals['week']['sortBySender']
      senderRows = makeTableData(topTokensBySendersInWeek, 'senderCount')
      receiverRows = makeTableData(topTokensByUniqueTotals['week']['sortByReceiver'], 'receiverCount')
      totalRows = makeTableData(topTokensByUniqueTotals['week']['sortByTotal'], 'totalCount')
      txnCountRows = makeTableData(topTokensByUniqueTotals['week']['sortByTxnCount'], 'txnCount')

      wordCloudOptions = makeWordCloundOptions(topTokensByUniqueTotals['week']['sortByTxnCount'])
      var topTokensBySendersInThree = topTokensByUniqueTotals['threeDays']['sortBySender']
      senderRows3 = makeTableData(topTokensBySendersInThree, 'senderCount')
      receiverRows3 = makeTableData(topTokensByUniqueTotals['threeDays']['sortByReceiver'], 'receiverCount')
      totalRows3 = makeTableData(topTokensByUniqueTotals['threeDays']['sortByTotal'], 'totalCount')
      txnCountRows3 = makeTableData(topTokensByUniqueTotals['threeDays']['sortByTxnCount'], 'txnCount')
      wordCloudOptions3 = makeWordCloundOptions(topTokensByUniqueTotals['threeDays']['sortByTxnCount'])
      var topTokensBySendersInSeven = topTokensByUniqueTotals['week']['sortBySender']
      senderRows7 = makeTableData(topTokensBySendersInSeven, 'senderCount')
      receiverRows7 = makeTableData(topTokensByUniqueTotals['week']['sortByReceiver'], 'receiverCount')
      totalRows7 = makeTableData(topTokensByUniqueTotals['week']['sortByTotal'], 'totalCount')
      txnCountRows7 = makeTableData(topTokensByUniqueTotals['week']['sortByTxnCount'], 'txnCount')
      wordCloudOptions7 = makeWordCloundOptions(topTokensByUniqueTotals['week']['sortByTxnCount'])
    }
    setTopTokensBySendersWeek(senderRows)
    setTopTokensByReceiversWeek(receiverRows)
    setTopTokensByTotalsWeek(totalRows)
    setTopTokensByTxnCountWeek(txnCountRows)
    setWordCloudOption(wordCloudOptions)
    setTopTokensBySendersThree(senderRows3)
    setTopTokensByReceiversThree(receiverRows3)
    setTopTokensByTotalsThree(totalRows3)
    setTopTokensByTxnCountThree(txnCountRows3)
    setWordCloudOptionThree(wordCloudOptions3)

    setTopTokensBySendersSeven(senderRows7)
    setTopTokensByReceiversSeven(receiverRows7)
    setTopTokensByTotalsSeven(totalRows7)
    setTopTokensByTxnCountSeven(txnCountRows7)
    setWordCloudOptionSeven(wordCloudOptions7)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, getTopToken])

  var child1 = !loading ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueSender['type']}
              label={topTokensByUniqueSender['label']}
              url={topTokensByUniqueSender['url']}
              children={<CustomTokensTable cols={topTokensByUniqueSenderCols} rows={topTokensBySendersWeek} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueReceiver['type']}
              label={topTokensByUniqueReceiver['label']}
              url={topTokensByUniqueReceiver['url']}
              children={<CustomTokensTable cols={topTokensByUniqueReceiverCols} rows={topTokensByReceiversWeek} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensbyTotalUniques['type']}
              label={topTokensbyTotalUniques['label']}
              url={topTokensbyTotalUniques['url']}
              children={<CustomTokensTable cols={topTokensbyTotalUniquesCols} rows={topTokensByTotalsWeek} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensByWordCloud['type']}
              label={topTokensByWordCloud['label']}
              url={topTokensByWordCloud['url']}
              children={<HighchartsReact highcharts={Highcharts} options={wordCloudOption} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensbyTxnCount['type']}
              label={topTokensbyTxnCount['label']}
              url={topTokensbyTxnCount['url']}
              children={<CustomTokensTable cols={topTokensbyTxnCountCols} rows={topTokensByTxnCountWeek} />}
            />
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
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueSender['type']}
              label={topTokensByUniqueSender['label']}
              url={topTokensByUniqueSender['url']}
              children={<CustomTokensTable cols={topTokensByUniqueSenderCols} rows={topTokensBySendersThree} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueReceiver['type']}
              label={topTokensByUniqueReceiver['label']}
              url={topTokensByUniqueReceiver['url']}
              children={<CustomTokensTable cols={topTokensByUniqueReceiverCols} rows={topTokensByReceiversThree} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensbyTotalUniques['type']}
              label={topTokensbyTotalUniques['label']}
              url={topTokensbyTotalUniques['url']}
              children={<CustomTokensTable cols={topTokensbyTotalUniquesCols} rows={topTokensByTotalsThree} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensByWordCloud['type']}
              label={topTokensByWordCloud['label']}
              url={topTokensByWordCloud['url']}
              children={<HighchartsReact highcharts={Highcharts} options={wordCloudOption3} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensbyTxnCount['type']}
              label={topTokensbyTxnCount['label']}
              url={topTokensbyTxnCount['url']}
              children={<CustomTokensTable cols={topTokensbyTxnCountCols} rows={topTokensByTxnCountThree} />}
            />
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
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueSender['type']}
              label={topTokensByUniqueSender['label']}
              url={topTokensByUniqueSender['url']}
              children={<CustomTokensTable cols={topTokensByUniqueSenderCols} rows={topTokensBySendersSeven} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensByUniqueReceiver['type']}
              label={topTokensByUniqueReceiver['label']}
              url={topTokensByUniqueReceiver['url']}
              children={<CustomTokensTable cols={topTokensByUniqueReceiverCols} rows={topTokensByReceiversSeven} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <ViewPanel
              type={topTokensbyTotalUniques['type']}
              label={topTokensbyTotalUniques['label']}
              url={topTokensbyTotalUniques['url']}
              children={<CustomTokensTable cols={topTokensbyTotalUniquesCols} rows={topTokensByTotalsSeven} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensByWordCloud['type']}
              label={topTokensByWordCloud['label']}
              url={topTokensByWordCloud['url']}
              children={<HighchartsReact highcharts={Highcharts} options={wordCloudOption7} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topTokensbyTxnCount['type']}
              label={topTokensbyTxnCount['label']}
              url={topTokensbyTxnCount['url']}
              children={<CustomTokensTable cols={topTokensbyTxnCountCols} rows={topTokensByTxnCountSeven} />}
            />
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
      suburl: 'token',
    },
    {
      id: nanoid(),
      children: child2,
      label: '3 Days',
      index: 1,
      suburl: 'tokenDay3',
    },
    {
      id: nanoid(),
      children: child3,
      label: '7 Days',
      index: 2,
      suburl: 'tokenDay7',
    },
  ]
  var val = 0

  var tokenTabContent = <SimpleTabs val={val} tabs={tokenContent} />

  return <div>{tokenTabContent}</div>
}

const mapStateToProps = (state: AppState) => ({
  topTokensByUniqueTotals: state.statistics.topTokensByUniqueTotals,
  loading: state.statistics.loadingTopToken,
})

export default connect(mapStateToProps, { getTopToken })(Tokens)
