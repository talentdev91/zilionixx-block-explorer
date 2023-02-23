import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getValidatorsTopLeaderboard } from '../../../store/actions/validator'

//material-ui components
import { StyledContainer } from '../../../components/StyledContainer'
//components
import ValidatorsTable from './components/Table'
import TableInfo from './components/TableInfo'

//style
import { StyledPageTitle } from './TableStyle'

interface ValidatorsProps {
  getValidatorsTopLeaderboard: (page: any, rowsPerPage: any, sortStatus: any) => void
  totalCount: any
  loading: boolean
}

const Validators = ({ getValidatorsTopLeaderboard, totalCount, loading }: ValidatorsProps) => {
  const columns = ['Rank', 'Address', 'Id', 'Downtime', 'Self-Stacked', 'Delegated', 'Total Stacked', 'Active']

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const [sortStatus, setSortStatus] = React.useState({ orderBy: 'Total Stacked', order: -1 })

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleSortStatus = (sortStatus: any) => {
    setSortStatus(sortStatus)
  }

  React.useEffect(() => {
    getValidatorsTopLeaderboard(page, rowsPerPage, sortStatus)
  }, [page, rowsPerPage, sortStatus, getValidatorsTopLeaderboard])

  return (
    <StyledContainer>
      <StyledPageTitle>Validators Top Leaderboard</StyledPageTitle>
      <ValidatorsTable
        setSortStatus={handleSortStatus}
        sortStatus={sortStatus}
        tableInfo={() => TableInfo(totalCount, page, rowsPerPage, loading)}
        rowsPerPage={rowsPerPage}
        page={page}
        columns={columns}
        totalCount={totalCount}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        loading={loading}
      />
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  totalCount: state.validator.validatorsTopLeaderboardCnt,
  loading: state.validator.loading,
})

export default connect(mapStateToProps, { getValidatorsTopLeaderboard })(Validators)
