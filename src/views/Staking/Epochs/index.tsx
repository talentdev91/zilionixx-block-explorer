import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getEpochs } from '../../../store/actions/epoch'
//material-ui components
import { StyledContainer } from '../../../components/StyledContainer'
//components
import EpochTable from './components/Table'
import TableInfo from './components/TableInfo'
import { rows, columns } from './data'
//style
import { StyledPageTitle } from './TableStyle'

interface ViewEpochProps {
  getEpochs: (page: any, rowsPerPage: any, sortStatus: any) => void
  epochs: any
  totalEpochCnt: any
  loading: boolean
}

function Epochs({ getEpochs, epochs, totalEpochCnt, loading }: ViewEpochProps) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(25)

  const [sortStatus, setSortStatus] = React.useState({ order: -1 })

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(Number(event.target.value))
    setPage(0)
  }

  const handleSortStatus = (sortStatus: any) => {
    setSortStatus(sortStatus)
  }

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  React.useEffect(() => {
    getEpochs(page, rowsPerPage, sortStatus)
  }, [page, rowsPerPage, sortStatus, getEpochs])

  return (
    <StyledContainer>
      <StyledPageTitle>Epochs</StyledPageTitle>
      <EpochTable
        tableInfo={() => TableInfo(totalEpochCnt, page, rowsPerPage, loading)}
        setSortStatus={handleSortStatus}
        sortStatus={sortStatus}
        rowsPerPage={rowsPerPage}
        page={page}
        rows={epochs}
        columns={columns}
        totalEpochCnt={totalEpochCnt}
        emptyRows={emptyRows}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        loading={loading}
      />
    </StyledContainer>
  )
}

const mapStateToProps = (state: AppState) => ({
  epochs: state.epoch.epochs,
  totalEpochCnt: state.epoch.totalEpochCnt,
  loading: state.epoch.loading,
})

export default connect(mapStateToProps, { getEpochs })(Epochs)
