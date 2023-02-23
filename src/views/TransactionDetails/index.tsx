import React from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { AppState } from '../../store/configureStore'
import { getTxDetailByTxHash } from '../../store/actions/transaction'
import { useStyles, StyledPageTitle, StyledPageContainer } from './Style'
// material-ui components
import { Divider } from '@material-ui/core'
// components
import Overview from './components/Overview'
import InternalTxns from './components/InternalTxns'
import Logs from './components/Logs'
import Comments from './components/Comments'
import TxDetailPage from './components/TxDetailPage'

interface TransactionDetailProps {
  getTxDetailByTxHash: (txHash: any) => void
  transaction: any
  txLogsCnt: any
  match: any
}

function TransactionDetail({ getTxDetailByTxHash, transaction, txLogsCnt, match }: TransactionDetailProps) {
  const classes = useStyles()
  const txHash = match.params.transaction

  React.useEffect(() => {
    getTxDetailByTxHash(txHash)
  }, [txHash, getTxDetailByTxHash])

  const val = 0

  const parentTmp1 = <Overview />
  const parentTmp2 = <InternalTxns />
  const parentTmp3 = <Logs />
  const parentTmp4 = <Comments />

  var parentTabContent = [
    {
      id: nanoid(),
      children: parentTmp1,
      label: 'Overview',
      visible: true,
      index: 0,
    },
    {
      id: nanoid(),
      children: parentTmp2,
      label: 'Internal Txns',
      visible: transaction.input === '0x' ? true : false,
      index: 1,
    },
    {
      id: nanoid(),
      children: parentTmp3,
      label: `Logs ${txLogsCnt === 0 ? '' : `(${txLogsCnt})`}`,
      visible: txLogsCnt === 0 ? false : true,
      index: 2,
    },
    // {
    //   id: nanoid(),
    //   children: parentTmp4,
    //   label: 'Comments',
    //   visible: true,
    //   index: 3,
    // },
  ]

  return (
    <StyledPageContainer>
      {/* <div className={classes.txnDetailRoot}> */}
      <StyledPageTitle>Transaction Details</StyledPageTitle>
      <Divider style={{ marginBottom: '50px' }} />
      <div className={classes.stylePage}>
        <TxDetailPage val={val} tabs={parentTabContent} />
      </div>
      {/* </div> */}
    </StyledPageContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  transaction: state.transaction.transaction,
  txLogsCnt: state.transaction.txLogsCnt,
})

export default connect(mapStateToProps, { getTxDetailByTxHash })(TransactionDetail)
