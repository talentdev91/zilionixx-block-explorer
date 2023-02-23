import React from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getTopOverview } from '../../../store/actions/statistics'
import ViewPanel from './components/ViewPanel'
import { PanelBody } from './components/ViewPanel/PanelBody'
import { nanoid } from 'nanoid'
import useStyles from './style'

//Mockup data import
import { validatorChildren } from './Mockup'
import SimpleTabs from './components/Tab/SimpleTabs'
import { etherUnits } from '../../../common/consts'

interface ViewStaticsProps {
  getTopOverview: () => void
  topvals: any
  loading: boolean
  toptokens: any
}
const IconType = ['transactions', 'tokens']

function Overview({ getTopOverview, topvals, loading, toptokens }: ViewStaticsProps) {
  var transactionChildren = [
    {
      id: nanoid(),
      topLeftItem: 'Top ZNX Sender',
      topRightItem: 'Total ZNX',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: false,
    },
    {
      id: nanoid(),
      topLeftItem: 'Top ZNX Receiver',
      topRightItem: 'Total ZNX',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: false,
    },
    {
      id: nanoid(),
      topLeftItem: 'Top Txn Count Sent',
      topRightItem: 'Total Txn',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: false,
    },
    {
      id: nanoid(),
      topLeftItem: 'Top Txn Count Received',
      topRightItem: 'Total Txn',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: true,
    },
  ]

  var tokenChildren = React.useMemo(() => {
    return [
      {
        id: nanoid(),
        topLeftItem: 'Top Unique Sender',
        topRightItem: 'Total',
        bottomLeftItem: '',
        bottomRightItem: '',
        url: '/address/',
        isIcon: true,
      },
      {
        id: nanoid(),
        topLeftItem: 'Top Unique Receiver',
        topRightItem: 'Total',
        bottomLeftItem: '',
        bottomRightItem: '',
        url: '/address/',
        isIcon: true,
      },
      {
        id: nanoid(),
        topLeftItem: 'Top Total Uniques',
        topRightItem: 'Total',
        bottomLeftItem: '',
        bottomRightItem: '',
        url: '/address/',
        isIcon: true,
      },
      {
        id: nanoid(),
        topLeftItem: 'Top Txn Count',
        topRightItem: 'Txn Count',
        bottomLeftItem: '',
        bottomRightItem: '',
        url: '/address/',
        isIcon: false,
      },
    ]
  }, [])

  var networkChildren = [
    {
      id: nanoid(),
      topLeftItem: 'Top Gas Used',
      topRightItem: 'Gas Used',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: true,
    },
    {
      id: nanoid(),
      topLeftItem: 'Top Txn Count',
      topRightItem: 'Txn Count',
      bottomLeftItem: '',
      bottomRightItem: '',
      url: '/address/',
      isIcon: true,
    },
  ]

  const [transactionDataWeek, setTransactionDataWeek] = React.useState(transactionChildren)
  const [transactionDataThreeDays, setTransactionDataThreeDays] = React.useState(transactionChildren)
  const [transactionDataDay, setTransactionDataDay] = React.useState(transactionChildren)

  const [tokenDataWeek, setTokenDataWeek] = React.useState(tokenChildren)
  const [tokenDataThreeDays, setTokenDataThreeDays] = React.useState(tokenChildren)
  const [tokenDataDay, setTokenDataDay] = React.useState(tokenChildren)

  const [networkDataWeek, setNetworkDataWeek] = React.useState(networkChildren)
  const [networkDataThreeDays, setNetworkDataThreeDays] = React.useState(networkChildren)
  const [networkDataDay, setNetworkDataDay] = React.useState(networkChildren)

  const validatorDataWeek = validatorChildren
  const validatorDataThreeDays = validatorChildren
  const validatorDataDay = validatorChildren

  var topvalsWeek = React.useRef<any>([]),
    topvalsThreeDays = React.useRef<any>([]),
    topvalsDay = React.useRef<any>([])
  var transactionChildrenWeek = JSON.parse(JSON.stringify(transactionChildren)),
    networkChildrenWeek = JSON.parse(JSON.stringify(networkChildren)),
    transactionChildrenThreeDays = JSON.parse(JSON.stringify(transactionChildren)),
    networkChildrenThreeDays = JSON.parse(JSON.stringify(networkChildren)),
    transactionChildrenDay = JSON.parse(JSON.stringify(transactionChildren)),
    networkChildrenDay = JSON.parse(JSON.stringify(networkChildren))

  React.useEffect(() => {
    getTopOverview()
    if (!loading) {
      if (topvals !== null) {
        if (topvals[2].length > 0) {
          topvalsWeek.current = topvals[2][0]
          if (topvalsWeek.current['TxnTopsender'].length > 0) {
            transactionChildrenWeek[0].bottomLeftItem = topvalsWeek.current['TxnTopsender'][0]['_id']
            transactionChildrenWeek[0].bottomRightItem =
              topvalsWeek.current['TxnTopsender'][0]['total'] / etherUnits.ETHER
            transactionChildrenWeek[0].url += topvalsWeek.current['TxnTopsender'][0]['_id']
          } else {
            transactionChildrenWeek[0].bottomLeftItem = 'No xxxx'
            transactionChildrenWeek[0].url = '#'
          }

          if (topvalsWeek.current['TxnTopSendCount'].length > 0) {
            transactionChildrenWeek[2].bottomLeftItem = topvalsWeek.current['TxnTopSendCount'][0]['_id']
            transactionChildrenWeek[2].bottomRightItem = topvalsWeek.current['TxnTopSendCount'][0]['count']
            transactionChildrenWeek[2].url += topvalsWeek.current['TxnTopSendCount'][0]['_id']
          } else {
            transactionChildrenWeek[2].bottomLeftItem = 'No transactions'
            transactionChildrenWeek[2].url = '#'
          }

          if (topvalsWeek.current['TxnTopReceiver'].length > 0) {
            transactionChildrenWeek[1].bottomLeftItem = topvalsWeek.current['TxnTopReceiver'][0]['_id']
            transactionChildrenWeek[1].bottomRightItem =
              topvalsWeek.current['TxnTopReceiver'][0]['total'] / etherUnits.ETHER
            transactionChildrenWeek[1].url += topvalsWeek.current['TxnTopReceiver'][0]['_id']
          } else {
            transactionChildrenWeek[1].bottomLeftItem = 'No receivers'
            transactionChildrenWeek[1].url = '#'
          }

          if (topvalsWeek.current['TxnTopReceiveCount'].length > 0) {
            transactionChildrenWeek[3].bottomLeftItem = topvalsWeek.current['TxnTopReceiveCount'][0]['_id']
            transactionChildrenWeek[3].bottomRightItem = topvalsWeek.current['TxnTopReceiveCount'][0]['count']
            transactionChildrenWeek[3].url += topvalsWeek.current['TxnTopReceiveCount'][0]['_id']
          } else {
            transactionChildrenWeek[3].bottomLeftItem = 'No transactions'
            transactionChildrenWeek[3].url = '#'
          }

          if (topvalsWeek.current['TopGas'].length > 0) {
            networkChildrenWeek[0].bottomLeftItem = topvalsWeek.current['TopGas'][0]['_id']
            networkChildrenWeek[0].bottomRightItem = topvalsWeek.current['TopGas'][0]['total']
            networkChildrenWeek[0].url = topvalsWeek.current['TopGas'][0]['_id']
          } else {
            networkChildrenWeek[0].bottomLeftItem = 'No gas used'
            networkChildrenWeek[0].url = '#'
          }
        }
        if (topvals[1].length > 0) {
          topvalsThreeDays.current = topvals[1][0]
          if (topvalsThreeDays.current['TxnTopsender'].length > 0) {
            transactionChildrenThreeDays[0].bottomLeftItem = topvalsThreeDays.current['TxnTopsender'][0]['_id']
            transactionChildrenThreeDays[0].bottomRightItem =
              topvalsThreeDays.current['TxnTopsender'][0]['total'] / etherUnits.ETHER
            transactionChildrenThreeDays[0].url += topvalsThreeDays.current['TxnTopsender'][0]['_id']
          } else {
            transactionChildrenThreeDays[0].bottomLeftItem = 'No senders'
            transactionChildrenThreeDays[0].url = '#'
          }

          if (topvalsThreeDays.current['TxnTopSendCount'].length > 0) {
            transactionChildrenThreeDays[2].bottomLeftItem = topvalsThreeDays.current['TxnTopSendCount'][0]['_id']
            transactionChildrenThreeDays[2].bottomRightItem = topvalsThreeDays.current['TxnTopSendCount'][0]['count']
            transactionChildrenThreeDays[2].url += topvalsThreeDays.current['TxnTopSendCount'][0]['_id']
          } else {
            transactionChildrenThreeDays[2].bottomLeftItem = 'No transactions'
            transactionChildrenThreeDays[2].url = '#'
          }

          if (topvalsThreeDays.current['TxnTopReceiver'].length > 0) {
            transactionChildrenThreeDays[1].bottomLeftItem = topvalsThreeDays.current['TxnTopReceiver'][0]['_id']
            transactionChildrenThreeDays[1].bottomRightItem =
              topvalsThreeDays.current['TxnTopReceiver'][0]['total'] / etherUnits.ETHER
            transactionChildrenThreeDays[1].url += topvalsThreeDays.current['TxnTopReceiver'][0]['_id']
          } else {
            transactionChildrenThreeDays[1].bottomLeftItem = 'No receivers'
            transactionChildrenThreeDays[1].url = '#'
          }

          if (topvalsThreeDays.current['TxnTopReceiveCount'].length > 0) {
            transactionChildrenThreeDays[3].bottomLeftItem = topvalsThreeDays.current['TxnTopReceiveCount'][0]['_id']
            transactionChildrenThreeDays[3].bottomRightItem = topvalsThreeDays.current['TxnTopReceiveCount'][0]['count']
            transactionChildrenThreeDays[3].url += topvalsThreeDays.current['TxnTopReceiveCount'][0]['_id']
          } else {
            transactionChildrenThreeDays[3].bottomLeftItem = 'No transactions'
            transactionChildrenThreeDays[3].url = '#'
          }

          if (topvalsThreeDays.current['TopGas'].length > 0) {
            networkChildrenThreeDays[0].bottomLeftItem = topvalsThreeDays.current['TopGas'][0]['_id']
            networkChildrenThreeDays[0].bottomRightItem = topvalsThreeDays.current['TopGas'][0]['total']
            networkChildrenThreeDays[0].url = topvalsThreeDays.current['TopGas'][0]['_id']
          } else {
            networkChildrenThreeDays[0].bottomLeftItem = 'No gas used'
            networkChildrenThreeDays[0].url = '#'
          }
        }
        if (topvals[0].length > 0) {
          topvalsDay.current = topvals[0][0]
          if (topvalsDay.current['TxnTopsender'].length > 0) {
            transactionChildrenDay[0].bottomLeftItem = topvalsDay.current['TxnTopsender'][0]['_id']
            transactionChildrenDay[0].bottomRightItem =
              topvalsDay.current['TxnTopsender'][0]['total'] / etherUnits.ETHER
            transactionChildrenDay[0].url += topvalsDay.current['TxnTopsender'][0]['_id']
          } else {
            transactionChildrenDay[0].bottomLeftItem = 'No senders'
            transactionChildrenDay[0].url = '#'
          }

          if (topvalsDay.current['TxnTopSendCount'].length > 0) {
            transactionChildrenDay[2].bottomLeftItem = topvalsDay.current['TxnTopSendCount'][0]['_id']
            transactionChildrenDay[2].bottomRightItem = topvalsDay.current['TxnTopSendCount'][0]['count']
            transactionChildrenDay[2].url += topvalsDay.current['TxnTopSendCount'][0]['_id']
          } else {
            transactionChildrenDay[2].bottomLeftItem = 'No transactions'
            transactionChildrenDay[2].url = '#'
          }

          if (topvalsDay.current['TxnTopReceiver'].length > 0) {
            transactionChildrenDay[1].bottomLeftItem = topvalsDay.current['TxnTopReceiver'][0]['_id']
            transactionChildrenDay[1].bottomRightItem =
              topvalsDay.current['TxnTopReceiver'][0]['total'] / etherUnits.ETHER
            transactionChildrenDay[1].url += topvalsDay.current['TxnTopReceiver'][0]['_id']
          } else {
            transactionChildrenDay[1].bottomLeftItem = 'No receivers'
            transactionChildrenDay[1].url = '#'
          }

          if (topvalsDay.current['TxnTopReceiveCount'].length > 0) {
            transactionChildrenDay[3].bottomLeftItem = topvalsDay.current['TxnTopReceiveCount'][0]['_id']
            transactionChildrenDay[3].bottomRightItem = topvalsDay.current['TxnTopReceiveCount'][0]['count']
            transactionChildrenDay[3].url += topvalsDay.current['TxnTopReceiveCount'][0]['_id']
          } else {
            transactionChildrenDay[3].bottomLeftItem = 'No transactions'
            transactionChildrenDay[3].url = '#'
          }

          if (topvalsDay.current['TopGas'].length > 0) {
            networkChildrenDay[0].bottomLeftItem = topvalsDay.current['TopGas'][0]['_id']
            networkChildrenDay[0].bottomRightItem = topvalsDay.current['TopGas'][0]['total']
            networkChildrenDay[0].url = topvalsDay.current['TopGas'][0]['_id']
          } else {
            networkChildrenDay[0].bottomLeftItem = 'No gas used'
          }
        }
      }
      if (toptokens !== null && toptokens !== undefined && toptokens !== {}) {
        var tokenChildrenWeek = JSON.parse(JSON.stringify(tokenChildren))
        var tokenChildrenThreeDays = JSON.parse(JSON.stringify(tokenChildren))
        var tokenChildrenDay = JSON.parse(JSON.stringify(tokenChildren))

        var toptokensWeek = toptokens['week']
        var toptokensThreeDays = toptokens['threeDays']
        var toptokensDay = toptokens['day']
        if (toptokensWeek.hasOwnProperty('sortBySender')) {
          if (toptokensWeek['sortBySender']['tokenAddress'].length > 0) {
            tokenChildrenWeek[0].bottomLeftItem = toptokensWeek['sortBySender']['tokenAddress'][0]
            tokenChildrenWeek[0].bottomRightItem = toptokensWeek['sortBySender']['senderCount']
            tokenChildrenWeek[0].url += toptokensWeek['sortBySender']['tokenAddress'][0]
          } else {
            tokenChildrenWeek[0].bottomLeftItem = 'No token transactions'
          }
          if (toptokensWeek['sortByReceiver']['tokenAddress'].length > 0) {
            tokenChildrenWeek[1].bottomLeftItem = toptokensWeek['sortByReceiver']['tokenAddress'][0]
            tokenChildrenWeek[1].bottomRightItem = toptokensWeek['sortByReceiver']['receiverCount']
            tokenChildrenWeek[1].url += toptokensWeek['sortByReceiver']['tokenAddress'][0]
          } else {
            tokenChildrenWeek[1].bottomLeftItem = 'No token transactions'
          }
          if (toptokensWeek['sortByTotal']['tokenAddress'].length > 0) {
            tokenChildrenWeek[2].bottomLeftItem = toptokensWeek['sortByTotal']['tokenAddress'][0]
            tokenChildrenWeek[2].bottomRightItem = toptokensWeek['sortByTotal']['senderCount']
            tokenChildrenWeek[2].url += toptokensWeek['sortByTotal']['tokenAddress'][0]
          } else {
            tokenChildrenWeek[2].bottomLeftItem = 'No token transactions'
          }
          if (toptokensWeek['sortByTxnCount']['tokenAddress'].length > 0) {
            tokenChildrenWeek[3].bottomLeftItem = toptokensWeek['sortByTxnCount']['tokenAddress'][0]
            tokenChildrenWeek[3].bottomRightItem = toptokensWeek['sortByTxnCount']['senderCount']
            tokenChildrenWeek[3].url += toptokensWeek['sortByTxnCount']['tokenAddress'][0]
          } else {
            tokenChildrenWeek[3].bottomLeftItem = 'No token transactions'
          }
        }
        setTokenDataWeek(tokenChildrenWeek)
        if (toptokensThreeDays.hasOwnProperty('sortBySender')) {
          if (
            toptokensThreeDays['sortBySender'].hasOwnProperty('tokenAddress') &&
            toptokensThreeDays['sortBySender']['tokenAddress'].length > 0
          ) {
            tokenChildrenThreeDays[0].bottomLeftItem = toptokensThreeDays['sortBySender']['tokenAddress'][0]
            tokenChildrenThreeDays[0].bottomRightItem = toptokensThreeDays['sortBySender']['senderCount']
            tokenChildrenThreeDays[0].url += toptokensThreeDays['sortBySender']['tokenAddress'][0]
          } else {
            tokenChildrenThreeDays[0].bottomLeftItem = 'No token transactions'
          }
          if (toptokensThreeDays['sortByReceiver']['tokenAddress'].length > 0) {
            tokenChildrenThreeDays[1].bottomLeftItem = toptokensThreeDays['sortByReceiver']['tokenAddress'][0]
            tokenChildrenThreeDays[1].bottomRightItem = toptokensThreeDays['sortByReceiver']['receiverCount']
            tokenChildrenThreeDays[1].url += toptokensThreeDays['sortByReceiver']['tokenAddress'][0]
          } else {
            tokenChildrenThreeDays[1].bottomLeftItem = 'No token transactions'
          }
          if (toptokensThreeDays['sortByTotal']['tokenAddress'].length > 0) {
            tokenChildrenThreeDays[2].bottomLeftItem = toptokensThreeDays['sortByTotal']['tokenAddress'][0]
            tokenChildrenThreeDays[2].bottomRightItem = toptokensThreeDays['sortByTotal']['senderCount']
            tokenChildrenThreeDays[2].url += toptokensThreeDays['sortByTotal']['tokenAddress'][0]
          } else {
            tokenChildrenThreeDays[2].bottomLeftItem = 'No token transactions'
          }
          if (toptokensThreeDays['sortByTxnCount']['tokenAddress'].length > 0) {
            tokenChildrenThreeDays[3].bottomLeftItem = toptokensThreeDays['sortByTxnCount']['tokenAddress'][0]
            tokenChildrenThreeDays[3].bottomRightItem = toptokensThreeDays['sortByTxnCount']['senderCount']
            tokenChildrenThreeDays[3].url += toptokensThreeDays['sortByTxnCount']['tokenAddress'][0]
          } else {
            tokenChildrenThreeDays[3].bottomLeftItem = 'No token transactions'
          }
        }
        setTokenDataThreeDays(tokenChildrenThreeDays)

        if (tokenChildrenDay.hasOwnProperty('sortBySender')) {
          if (toptokensDay['sortBySender']['tokenAddress'].length > 0) {
            tokenChildrenDay[0].bottomLeftItem = toptokensDay['sortBySender']['tokenAddress'][0]
            tokenChildrenDay[0].bottomRightItem = toptokensDay['sortBySender']['senderCount']
            tokenChildrenDay[0].url += toptokensDay['sortBySender']['tokenAddress'][0]
          } else {
            tokenChildrenDay[0].bottomLeftItem = 'No token transactions'
          }
          if (toptokensDay['sortByReceiver']['tokenAddress'].length > 0) {
            tokenChildrenDay[1].bottomLeftItem = toptokensDay['sortByReceiver']['tokenAddress'][0]
            tokenChildrenDay[1].bottomRightItem = toptokensDay['sortByReceiver']['receiverCount']
            tokenChildrenDay[1].url += toptokensDay['sortByReceiver']['tokenAddress'][0]
          } else {
            tokenChildrenDay[1].bottomLeftItem = 'No token transactions'
          }
          if (toptokensDay['sortByTotal']['tokenAddress'].length > 0) {
            tokenChildrenDay[2].bottomLeftItem = toptokensDay['sortByTotal']['tokenAddress'][0]
            tokenChildrenDay[2].bottomRightItem = toptokensDay['sortByTotal']['senderCount']
            tokenChildrenDay[2].url += toptokensDay['sortByTotal']['tokenAddress'][0]
          } else {
            tokenChildrenDay[2].bottomLeftItem = 'No token transactions'
          }
          if (toptokensDay['sortByTxnCount']['tokenAddress'].length > 0) {
            tokenChildrenDay[3].bottomLeftItem = toptokensDay['sortByTxnCount']['tokenAddress'][0]
            tokenChildrenDay[3].bottomRightItem = toptokensDay['sortByTxnCount']['senderCount']
            tokenChildrenDay[3].url += toptokensDay['sortByTxnCount']['tokenAddress'][0]
          } else {
            tokenChildrenDay[3].bottomLeftItem = 'No token transactions'
          }
        }
        setTokenDataDay(tokenChildrenDay)
      }
    }
    setTransactionDataWeek(transactionChildrenWeek)
    setNetworkDataWeek(networkChildrenWeek)
    setTransactionDataThreeDays(transactionChildrenThreeDays)
    setNetworkDataThreeDays(networkChildrenThreeDays)
    setTransactionDataDay(transactionChildrenDay)
    setNetworkDataDay(networkChildrenDay)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading])

  //day data
  var panelBody1 = <PanelBody type={IconType[0]} panelItems={transactionDataDay} />

  var transactions = {
    type: 'LabelAndUrl',
    label: 'Transactions',
    url: '/topstat#transaction',
    children: panelBody1,
  }

  var panelBody2 = <PanelBody type={IconType[1]} panelItems={tokenDataDay} />

  var tokens = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#token',
    children: panelBody2,
  }

  var panelBody3 = <PanelBody type={IconType[0]} panelItems={networkDataDay} />

  var networks = {
    type: 'LabelAndUrl',
    label: 'Network',
    url: '/topstat#network',
    children: panelBody3,
  }

  var panelBody4 = <PanelBody type={IconType[1]} panelItems={validatorDataDay} />

  var validators = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#Transaction',
    children: panelBody4,
  }

  //week data
  panelBody1 = <PanelBody type={IconType[0]} panelItems={transactionDataWeek} />

  var transactionsWeek = {
    type: 'LabelAndUrl',
    label: 'Transactions',
    url: '/topstat#transaction',
    children: panelBody1,
  }

  panelBody2 = <PanelBody type={IconType[1]} panelItems={tokenDataWeek} />

  var tokensWeek = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#token',
    children: panelBody2,
  }

  panelBody3 = <PanelBody type={IconType[0]} panelItems={networkDataWeek} />

  var networksWeek = {
    type: 'LabelAndUrl',
    label: 'Network',
    url: '/topstat#network',
    children: panelBody3,
  }

  panelBody4 = <PanelBody type={IconType[1]} panelItems={validatorDataWeek} />

  var validatorsWeek = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#Transaction',
    children: panelBody4,
  }

  // three days data
  panelBody1 = <PanelBody type={IconType[0]} panelItems={transactionDataThreeDays} />

  var transactionsThreeDays = {
    type: 'LabelAndUrl',
    label: 'Transactions',
    url: '/topstat#transaction',
    children: panelBody1,
  }

  panelBody2 = <PanelBody type={IconType[1]} panelItems={tokenDataThreeDays} />

  var tokensThreeDays = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#token',
    children: panelBody2,
  }

  panelBody3 = <PanelBody type={IconType[0]} panelItems={networkDataThreeDays} />

  var networksThreeDays = {
    type: 'LabelAndUrl',
    label: 'Network',
    url: '/topstat#network',
    children: panelBody3,
  }

  panelBody4 = <PanelBody type={IconType[1]} panelItems={validatorDataThreeDays} />

  var validatorsThreeDays = {
    type: 'LabelAndUrl',
    label: 'Tokens',
    url: '/topstat#Transaction',
    children: panelBody4,
  }
  const classes = useStyles()

  var child1 = !loading ? (
    <div className={classes.root}>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={transactions['type']}
              label={transactions['label']}
              url={transactions['url']}
              children={transactions['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={tokens['type']}
              label={tokens['label']}
              url={tokens['url']}
              children={tokens['children']}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={networks['type']}
              label={networks['label']}
              url={networks['url']}
              children={networks['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={validators['type']}
              label={validators['label']}
              url={validators['url']}
              children={validators['children']}
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
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={transactionsThreeDays['type']}
              label={transactionsThreeDays['label']}
              url={transactionsThreeDays['url']}
              children={transactionsThreeDays['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={tokensThreeDays['type']}
              label={tokensThreeDays['label']}
              url={tokensThreeDays['url']}
              children={tokensThreeDays['children']}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={networksThreeDays['type']}
              label={networksThreeDays['label']}
              url={networksThreeDays['url']}
              children={networksThreeDays['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={validatorsThreeDays['type']}
              label={validatorsThreeDays['label']}
              url={validatorsThreeDays['url']}
              children={validatorsThreeDays['children']}
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
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={transactions['type']}
              label={transactions['label']}
              url={transactions['url']}
              children={transactionsWeek['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={tokens['type']}
              label={tokens['label']}
              url={tokens['url']}
              children={tokensWeek['children']}
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={networksWeek['type']}
              label={networksWeek['label']}
              url={networksWeek['url']}
              children={networksWeek['children']}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ViewPanel
              type={validatorsWeek['type']}
              label={validatorsWeek['label']}
              url={validatorsWeek['url']}
              children={validatorsWeek['children']}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  )

  var overviewContent = [
    {
      id: nanoid(),
      children: child1,
      label: '24 Hours',
      index: 0,
      suburl: 'overview',
    },
    {
      id: nanoid(),
      children: child2,
      label: '3 Days',
      index: 1,
      suburl: 'overviewDay3',
    },
    {
      id: nanoid(),
      children: child3,
      label: '7 Days',
      index: 2,
      suburl: 'overviewDay7',
    },
  ]
  var val = 0

  var overviewTabContent = <SimpleTabs val={val} tabs={overviewContent} />

  return <div>{overviewTabContent}</div>
}
const mapStateToProps = (state: AppState) => ({
  topvals: state.statistics.topvalues,
  loading: state.statistics.loadingOverview,
  toptokens: state.statistics.toptokens,
})

export default connect(mapStateToProps, { getTopOverview })(Overview)
