import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '../../../store/configureStore'
import { getErc20Transfers } from '../../../store/actions/token'
//components
import Erc20Transfers from './components/Table'
import { StyledContainer } from '../../../components/StyledContainer'
import { columns } from './data'
import TableInfo from './components/TableInfo'
import { StyledPageTitle } from './TableStyle'

interface ViewTokenProps {
  getErc20Transfers: (page: any, rowsPerPage: any) => void
  erc20transfers: any
  erc20TransferCnt: any
  loading: any
  reqeustStatus: boolean
}

function ViewErc20Transfers({ getErc20Transfers, erc20transfers, erc20TransferCnt, loading, reqeustStatus }: ViewTokenProps) {
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
    getErc20Transfers(page, rowsPerPage)
  }, [page, rowsPerPage, getErc20Transfers])

  return (
    <StyledContainer>
      <StyledPageTitle>Token Transfers</StyledPageTitle>
      <Erc20Transfers
        tableInfo={() => TableInfo(erc20TransferCnt, rowsPerPage, loading)}
        rowsPerPage={rowsPerPage}
        erc20TransferCnt={erc20TransferCnt}
        page={page}
        rows={erc20transfers}
        loading={loading}
        columns={columns}
        handleChange={handleChange}
        handleChangePage={handleChangePage}
        status={reqeustStatus}
      />
    </StyledContainer>
  )
}
const mapStateToProps = (state: AppState) => ({
  erc20transfers: state.token.erc20transfers,
  erc20TransferCnt: state.token.erc20TransferCnt,
  loading: state.token.loadingErc20Transfer,
  reqeustStatus: state.token.requestToken20TransferStatus,
})

export default connect(mapStateToProps, { getErc20Transfers })(ViewErc20Transfers)
