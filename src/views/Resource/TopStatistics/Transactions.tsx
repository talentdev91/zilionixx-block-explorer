import React from 'react'
import Grid from '@material-ui/core/Grid'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { getTopTxns } from '../../../store/actions/statistics'
import SimpleTabs from './components/Tab/SimpleTabs'
import { AppState } from '../../../store/configureStore'
import ViewPanel from './components/ViewPanel'
import CustomTransactionsTable from './components/CustomTable/CustomTransactionsTable'
import { Theme, makeStyles } from '@material-ui/core/styles'

import { topZNXSendersCols, topZNXSendersRows } from './Mockup'

interface topTxnsProps {
  getTopTxns: () => void
  getTopTxnStatics: any
  totaltxns: any
  totalZnx: any
  loading: boolean
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {},
  row: {
    marginBottom: 10,
  },
}))

let topZNXSenders = {
  type: 'Label',
  label: 'Top ZNX Senders',
  url: '',
  children: <CustomTransactionsTable cols={topZNXSendersCols} rows={topZNXSendersRows} />,
}

const makeTableData = (topTokensInDurationWithType: any, totaltxns: any) => {
  var rows = []
  for (let i = 0; i < topTokensInDurationWithType.length; i++) {
    let row = { col1: 0, col2: '', col3: 0, col4: 0, url: '' }
    row['col1'] = i + 1
    row['col2'] = topTokensInDurationWithType[i]['_id']
    row['col3'] = topTokensInDurationWithType[i]['count']
    row['col4'] = (topTokensInDurationWithType[i]['count'] / totaltxns) * 100
    row['url'] = '/address/' + topTokensInDurationWithType[i]['_id']
    rows.push(row)
  }
  return rows
}

const makeZnxTableData = (topTokensInDurationWithType: any, totaltxns: any) => {
  var rows = []
  for (let i = 0; i < topTokensInDurationWithType.length; i++) {
    let row = { col1: 0, col2: '', col3: 0, col4: 0, url: '' }
    row['col1'] = i + 1
    row['col2'] = topTokensInDurationWithType[i]['_id']
    row['col3'] = topTokensInDurationWithType[i]['count'] / Math.pow(10, 18)
    row['col4'] = (topTokensInDurationWithType[i]['count'] / (totaltxns * Math.pow(10, 18))) * 100
    row['url'] = '/address/' + topTokensInDurationWithType[i]['_id']
    rows.push(row)
  }
  return rows
}

function Transactions({ getTopTxns, getTopTxnStatics, loading, totaltxns, totalZnx }: topTxnsProps) {
  const classes = useStyles()

  const rows: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []

  const [topTokensBySendersWeek, setTopTokensBySendersWeek] = React.useState(rows)
  const [topTokensByReceiversWeek, setTopTokensByReceiversWeek] = React.useState(rows)
  const [topTokensCountBySendersWeek, setTopTokensCountBySendersWeek] = React.useState(rows)
  const [topTokensCountByReceiversWeek, setTopTokensCountByReceiversWeek] = React.useState(rows)

  const [topTokensBySendersThree, setTopTokensBySendersThree] = React.useState(rows)
  const [topTokensByReceiversThree, setTopTokensByReceiversThree] = React.useState(rows)
  const [topTokensCountBySendersThree, setTopTokensCountBySendersThree] = React.useState(rows)
  const [topTokensCountByReceiversThree, setTopTokensCountByReceiversThree] = React.useState(rows)

  const [topTokensBySendersSeven, setTopTokensBySendersSeven] = React.useState(rows)
  const [topTokensByReceiversSeven, setTopTokensByReceiversSeven] = React.useState(rows)
  const [topTokensCountBySendersSeven, setTopTokensCountBySendersSeven] = React.useState(rows)
  const [topTokensCountByReceiversSeven, setTopTokensCountByReceiversSeven] = React.useState(rows)

  React.useEffect(() => {
    var senderRows: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverRows: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var senderTxnRows: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverTxnRows: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var senderRows3: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverRows3: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var senderTxnRows3: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverTxnRows3: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var senderRows7: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverRows7: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var senderTxnRows7: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    var receiverTxnRows7: { col1: number; col2: string; col3: number; col4: number; url: string }[] = []
    getTopTxns()
    if (!loading) {
      var topZnxBySendersInWeek = getTopTxnStatics[1][0].TxnTopsender
      var topZnxByReceiversInWeek = getTopTxnStatics[1][0].TxnTopReceiver
      var topTxnBySendersInWeek = getTopTxnStatics[1][0].TxnTopSendCount
      var topTxnByReceiversInWeek = getTopTxnStatics[1][0].TxnTopReceiveCount
      senderRows = makeZnxTableData(topZnxBySendersInWeek, totalZnx)
      senderTxnRows = makeTableData(topTxnBySendersInWeek, totaltxns)
      receiverTxnRows = makeTableData(topTxnByReceiversInWeek, totaltxns)
      receiverRows = makeZnxTableData(topZnxByReceiversInWeek, totalZnx)

      var topZnxBySendersInThree = getTopTxnStatics[1][0].TxnTopsender
      var topZnxByReceiversInThree = getTopTxnStatics[1][0].TxnTopReceiver
      var topTxnBySendersInThree = getTopTxnStatics[1][0].TxnTopSendCount
      var topTxnByReceiversInThree = getTopTxnStatics[1][0].TxnTopReceiveCount
      senderRows3 = makeZnxTableData(topZnxBySendersInThree, totalZnx)
      senderTxnRows3 = makeTableData(topTxnBySendersInThree, totaltxns)
      receiverTxnRows3 = makeTableData(topTxnByReceiversInThree, totaltxns)
      receiverRows3 = makeZnxTableData(topZnxByReceiversInThree, totalZnx)

      var topZnxBySendersInSeven = getTopTxnStatics[2][0].TxnTopsender
      var topZnxByReceiversInSeven = getTopTxnStatics[2][0].TxnTopReceiver
      var topTxnBySendersInSeven = getTopTxnStatics[2][0].TxnTopSendCount
      var topTxnByReceiversInSeven = getTopTxnStatics[2][0].TxnTopReceiveCount
      senderRows7 = makeZnxTableData(topZnxBySendersInSeven, totalZnx)
      senderTxnRows7 = makeTableData(topTxnBySendersInSeven, totaltxns)
      receiverTxnRows7 = makeTableData(topTxnByReceiversInSeven, totaltxns)
      receiverRows7 = makeZnxTableData(topZnxByReceiversInSeven, totalZnx)
    }
    setTopTokensBySendersWeek(senderRows)
    setTopTokensByReceiversWeek(receiverRows)
    setTopTokensCountBySendersWeek(senderTxnRows)
    setTopTokensCountByReceiversWeek(receiverTxnRows)

    setTopTokensBySendersThree(senderRows3)
    setTopTokensByReceiversThree(receiverRows3)
    setTopTokensCountBySendersThree(senderTxnRows3)
    setTopTokensCountByReceiversThree(receiverTxnRows3)

    setTopTokensBySendersSeven(senderRows7)
    setTopTokensByReceiversSeven(receiverRows7)
    setTopTokensCountBySendersSeven(senderTxnRows7)
    setTopTokensCountByReceiversSeven(receiverTxnRows7)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])
  var child1 = !loading ? (
    <div className={classes.root}>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensBySendersWeek} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensByReceiversWeek} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountBySendersWeek} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountByReceiversWeek} />}
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensBySendersThree} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensByReceiversThree} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountBySendersThree} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountByReceiversThree} />}
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
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensBySendersSeven} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensByReceiversSeven} />}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.row}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountBySendersSeven} />}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <ViewPanel
              type={topZNXSenders['type']}
              label={topZNXSenders['label']}
              url={topZNXSenders['url']}
              children={<CustomTransactionsTable cols={topZNXSendersCols} rows={topTokensCountByReceiversSeven} />}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )
  var transactionsContent = [
    {
      id: nanoid(),
      children: child1,
      label: '24 Hours',
      index: 0,
      suburl: 'transaction',
    },
    {
      id: nanoid(),
      children: child2,
      label: '3 Days',
      index: 1,
      suburl: 'transactionDay3',
    },
    {
      id: nanoid(),
      children: child3,
      label: '7 Days',
      index: 2,
      suburl: 'transactionDay7',
    },
  ]
  var val = 0

  var tokenTabContent = <SimpleTabs val={val} tabs={transactionsContent} />

  return <div>{tokenTabContent}</div>
}
const mapStateToProps = (state: AppState) => ({
  getTopTxnStatics: state.statistics.topTxnvalues,
  totaltxns: state.statistics.totaltxns,
  totalZnx: state.statistics.totalZnx,
  loading: state.statistics.loading,
})

export default connect(mapStateToProps, { getTopTxns })(Transactions)
