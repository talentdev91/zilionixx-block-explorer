import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getTopAccountsByBalance } from '../../../store/actions/address'

//material-ui components
import { StyledContainer } from '../../../components/StyledContainer'

//components
import TopAccountsTable from './components/Table'
import TableInfo from './components/TableInfo'

//style
import { StyledPageTitle } from './TableStyle'

interface TopAccountsProps {
  getTopAccountsByBalance: (page: any, rowsPerPage: any) => void
  accounts: any
  totalBalance: any
  loading: any
}

const TopAccounts = ({ getTopAccountsByBalance, accounts, totalBalance, loading }: TopAccountsProps) => {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const columns = ['Rank', 'Address', 'Name Tag', 'Balance', 'Percentage', 'Txn Count']

  React.useEffect(() => {
    getTopAccountsByBalance(page, rowsPerPage)
  }, [page, rowsPerPage, getTopAccountsByBalance])

  return (
    <StyledContainer>
      <StyledPageTitle>Top Accounts by ZNX Balance</StyledPageTitle>
      <TopAccountsTable
        tableInfo={() => TableInfo(accounts.totalDocs, totalBalance, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  accounts: state.address.accounts,
  totalBalance: state.address.totalBalance,
  loading: state.address.loadingTopAccounts,
})

export default connect(mapStateToProps, { getTopAccountsByBalance })(TopAccounts)
