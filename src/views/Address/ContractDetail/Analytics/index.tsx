import React from 'react'
import ZNXBalance from './ZNXBalance'
import TransactionsAnalytics from './Transactions'
import TxnFees from './TxnFees'
import ZNXTransfers from './ZNXTransfers'
import TokenTransfers from './TokenTransfers'
import SimpleTabs from '../../../Resource/TopStatistics/components/Tab/SimpleTabs'
import { nanoid } from 'nanoid'

import { connect } from 'react-redux'
import { AppState } from '../../../../store/configureStore'
import { GetAddressDetailAnalytics } from '../../../../store/actions/address'

interface Props {
  GetAddressDetailAnalytics: (address: any) => void
  address: any
  loading: boolean
  balanceHistory: any
  txnCountsHistory: any
  analyticsError: string
}

function Analaytics({
  GetAddressDetailAnalytics,
  address,
  loading,
  balanceHistory,
  txnCountsHistory,
  analyticsError,
}: Props) {
  const [content, setContent] = React.useState(<div></div>)
  React.useEffect(() => {
    GetAddressDetailAnalytics(address)
    if (!loading) {
      var analyticsContent = [
        {
          id: nanoid(),
          children: <ZNXBalance address={address} />,
          label: 'ZNX Balance',
          index: 0,
          suburl: 'analytics',
        },
        {
          id: nanoid(),
          children: <TransactionsAnalytics address={address} />,
          label: 'Transactions',
          index: 1,
          suburl: 'transactions',
        },
        {
          id: nanoid(),
          children: <TxnFees address={address} />,
          label: 'TxnFees',
          index: 2,
          suburl: 'txnfees',
        },
        {
          id: nanoid(),
          children: <ZNXTransfers address={address} />,
          label: 'ZNX Transfers',
          index: 3,
          suburl: 'ZNXtransfers',
        },
        {
          id: nanoid(),
          children: <TokenTransfers address={address} />,
          label: 'Token Transfers',
          index: 4,
          suburl: 'tokentransfers',
        },
      ]
      var analyticsTabContent = <SimpleTabs val={val} tabs={analyticsContent} />

      setContent(analyticsTabContent)
    } else {
      setContent(<div>Loading...</div>)
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  var val = 0

  return <div>{content}</div>
}

const mapStateToProps = (state: AppState) => ({
  loading: state.address.loadingAnalytics,
  balanceHistory: state.address.balanceHistory,
  txnCountsHistory: state.address.txnCountsHistory,
  analyticsError: state.address.analyticsError,
})

export default connect(mapStateToProps, { GetAddressDetailAnalytics })(Analaytics)
