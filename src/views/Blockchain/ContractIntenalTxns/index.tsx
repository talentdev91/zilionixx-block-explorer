import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getInternalTransactions } from '../../../store/actions/transaction'

//components
import ViewTxnsTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
// import { rows, columns, totaltransactions } from './data'
import TableInfo from './components/TableInfo'
import { StyledPageTitle } from './TableStyle'

interface ViewInternalTxnsProps {
  getInternalTransactions: (page: any, rowsPerPage: any) => void
  rows: any
  totalCounts: any
  loading: boolean
}

function ViewInternalTxns({ getInternalTransactions, rows, totalCounts, loading }: ViewInternalTxnsProps) {
  const columns = ['Block', 'Age', 'Parent Txn Hash', 'Type', 'From', '', 'To', 'Value']
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(50)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getInternalTransactions(page, rowsPerPage)
  }, [page, rowsPerPage, getInternalTransactions])

  return (
    <StyledContainer>
      <StyledPageTitle>Contract Internal Transactions</StyledPageTitle>
      <ViewTxnsTable
        tableInfo={() => TableInfo(totalCounts, loading)}
        rowsPerPage={rowsPerPage}
        counts={totalCounts}
        page={page}
        rows={rows}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        loading={loading}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  rows: state.transaction.internalTxns,
  totalCounts: state.transaction.totalCounts,
  loading: state.transaction.loading,
})
export default connect(mapStateToProps, { getInternalTransactions })(ViewInternalTxns)
