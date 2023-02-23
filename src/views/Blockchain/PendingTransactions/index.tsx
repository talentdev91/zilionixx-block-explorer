import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getPendingTransactions } from '../../../store/actions/transaction'
//components
import PendingTable from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import { columns } from './data'
import TableInfo from './components/TableInfo'
import { StyledPageTitle } from './TableStyle'

interface ViewPendingProps {
  getPendingTransactions: (page: any, rowsPerPage: any) => void
  pendingtxns: any
  totalCount: any
  loading: boolean
}

function ViewPendings({ getPendingTransactions, pendingtxns, totalCount, loading }: ViewPendingProps) {
  // const [total, setTotalPendings] = React.useState(totalpendings)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getPendingTransactions(page, rowsPerPage)
  }, [page, rowsPerPage, getPendingTransactions])

  return (
    <StyledContainer>
      <StyledPageTitle>Pending Transactions</StyledPageTitle>
      <PendingTable
        tableInfo={() => TableInfo(totalCount, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={pendingtxns}
        columns={columns}
        totalCount={totalCount}
        loading={loading}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  pendingtxns: state.transaction.pendingtxns,
  totalCount: state.transaction.totalTxnsCnt,
  loading: state.transaction.loadingPendingTxns,
})
export default connect(mapStateToProps, { getPendingTransactions })(ViewPendings)
