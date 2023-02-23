import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getAllTransactions } from '../../../store/actions/transaction'
import { getBlockTransactions } from '../../../store/actions/block'
//components
import ViewTxnsTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import TableInfo from './components/TableInfo'
import { StyledPageTitle } from './TableStyle'
import { useStyles } from './TableStyle'

interface ViewTxnsProps {
  getBlockTransactions: (page: any, rowsPerPage: any, blockNumber: any) => void
  getAllTransactions: (page: any, rowsPerPage: any) => void
  txns: any
  txnstimestamp: any
  blockConfirmation: any
  totalTxnsCnt: any
  match: any
  loading: boolean
  requestStatus: boolean
}

function ViewTxns({
  getBlockTransactions,
  getAllTransactions,
  txns,
  txnstimestamp,
  blockConfirmation,
  totalTxnsCnt,
  match,
  loading,
  requestStatus,
}: ViewTxnsProps) {
  const classes = useStyles()
  const columns = ['', 'Txn Hash', 'Method', 'Block', 'Age', 'From', '', 'To', 'Value', '[Txn Fee]']
  const { blocknumber } = match.params

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)
  const pathName = window.location.pathname

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    if (pathName === '/txs/list') {
      getAllTransactions(page, rowsPerPage)
    } else {
      getBlockTransactions(page, rowsPerPage, blocknumber)
    }
  }, [blocknumber, page, rowsPerPage, pathName, getAllTransactions, getBlockTransactions])

  return (
    <StyledContainer>
      {blocknumber === 'list' ? (
        <StyledPageTitle>Transactions</StyledPageTitle>
      ) : (
        <StyledPageTitle>
          Trnasactions
          <br />
          <span className={classes.block}>
            For Block{' '}
            <Link to={`/txs/${blocknumber}`} className={classes.blocknumber}>
              {blocknumber}
            </Link>
          </span>
        </StyledPageTitle>
      )}
      <ViewTxnsTable
        tableInfo={() => TableInfo(totalTxnsCnt, blocknumber, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        blocknumber={blocknumber}
        rows={txns}
        txnstimestamp={txnstimestamp}
        totalTxnsCnt={blocknumber === 'list' ? (totalTxnsCnt <= 500000 ? totalTxnsCnt : 500000) : totalTxnsCnt}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        blockConfirmationCnt={blockConfirmation}
        status={requestStatus}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  txns: state.transaction.txns,
  txnstimestamp: state.transaction.txnstimestamp,
  totalTxnsCnt: state.transaction.totalTxnsCnt,
  blockConfirmation: state.transaction.blockConfirmation,
  loading: state.transaction.loading,
  requestStatus: state.transaction.requestInternalTxns,
})

export default connect(mapStateToProps, { getAllTransactions, getBlockTransactions })(ViewTxns)
