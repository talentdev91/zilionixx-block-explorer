import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'

//components
import { StyledContainer } from '../../../components/StyledContainer'
import Table from './components/Table'
import TableInfo from './components/TableInfo'
import { getTopAccountsByBalance } from '../../../store/actions/address'
import { isEmptyObject } from '../../../common/utils'
import Category from '../category'

interface AccountsProps {
  getTopAccountsByBalance: (page: any, rowsPerPage: any) => void
  accounts: any
  totalBalance: any
}

function Accounts({ getTopAccountsByBalance, accounts, totalBalance }: AccountsProps) {
  const columns = ['#', 'Address', 'Name', 'Balance', 'Type', 'Action']

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
    getTopAccountsByBalance(page, rowsPerPage)
  }, [page, rowsPerPage, getTopAccountsByBalance])

  return (
    <div>
      <StyledContainer>
        <Category />
        <div>
          <Table
            tableInfo={() => TableInfo(!isEmptyObject(accounts) ? accounts.totalDocs : 0, totalBalance)}
            rowsPerPage={rowsPerPage}
            page={page}
            columns={columns}
            accounts={accounts}
            totalBalance={totalBalance}
            handleChange={handleChange}
            handleChangePage={handleChangePage}
          />
        </div>
      </StyledContainer>
    </div>
  )
}

const mapStateToProps = (state: AppState) => ({
  accounts: state.address.accounts,
  totalBalance: state.address.totalBalance,
})
export default connect(mapStateToProps, { getTopAccountsByBalance })(Accounts)
